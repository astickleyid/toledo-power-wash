#!/usr/bin/env node
/**
 * Buy a Toledo (419) business number via Twilio and write brand/phone.json
 *
 * Usage:
 *   export TWILIO_ACCOUNT_SID=ACxxxx
 *   export TWILIO_AUTH_TOKEN=xxxx
 *   node scripts/buy-twilio-number.mjs
 *
 * Or put credentials in ../pressure-ops/.env or ./.env
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function loadEnvFiles() {
  const candidates = [
    path.join(root, ".env"),
    path.join(root, "..", "pressure-ops", ".env"),
    path.join(root, "..", "hvac-lead-qualifier", ".env"),
  ];
  for (const file of candidates) {
    if (!fs.existsSync(file)) continue;
    for (const line of fs.readFileSync(file, "utf8").split("\n")) {
      const t = line.trim();
      if (!t || t.startsWith("#") || !t.includes("=")) continue;
      const i = t.indexOf("=");
      const k = t.slice(0, i).trim();
      let v = t.slice(i + 1).trim().replace(/^["']|["']$/g, "");
      if (process.env[k] === undefined && v) process.env[k] = v;
    }
  }
}

loadEnvFiles();

const sid = process.env.TWILIO_ACCOUNT_SID;
const token = process.env.TWILIO_AUTH_TOKEN;
if (!sid || !token) {
  console.error("Missing TWILIO_ACCOUNT_SID / TWILIO_AUTH_TOKEN");
  console.error("1) Sign up free at https://www.twilio.com/try-twilio");
  console.error("2) Copy Account SID + Auth Token into toledo-power-wash/.env");
  console.error("3) Re-run: node scripts/buy-twilio-number.mjs");
  process.exit(1);
}

const auth = Buffer.from(`${sid}:${token}`).toString("base64");

async function twilio(method, apiPath, form) {
  const url = `https://api.twilio.com/2010-04-01${apiPath}`;
  const opts = {
    method,
    headers: { Authorization: `Basic ${auth}` },
  };
  if (form) {
    opts.headers["Content-Type"] = "application/x-www-form-urlencoded";
    opts.body = new URLSearchParams(form).toString();
  }
  const res = await fetch(url, opts);
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = { raw: text };
  }
  if (!res.ok) {
    throw new Error(`${method} ${apiPath} → ${res.status} ${text.slice(0, 500)}`);
  }
  return json;
}

const q = new URLSearchParams({
  AreaCode: "419",
  SmsEnabled: "true",
  VoiceEnabled: "true",
  PageSize: "20",
});
let avail = await twilio("GET", `/Accounts/${sid}/AvailablePhoneNumbers/US/Local.json?${q}`);
let nums = avail.available_phone_numbers || [];
if (!nums.length) {
  const q2 = new URLSearchParams({
    InRegion: "OH",
    SmsEnabled: "true",
    VoiceEnabled: "true",
    PageSize: "20",
  });
  avail = await twilio("GET", `/Accounts/${sid}/AvailablePhoneNumbers/US/Local.json?${q2}`);
  nums = avail.available_phone_numbers || [];
}
if (!nums.length) throw new Error("No available numbers");

let chosen = nums[0];
for (const n of nums) {
  if ((n.locality || "").toLowerCase().includes("toledo")) {
    chosen = n;
    break;
  }
}

console.log("Buying", chosen.phone_number, chosen.locality, chosen.region);
const bought = await twilio("POST", `/Accounts/${sid}/IncomingPhoneNumbers.json`, {
  PhoneNumber: chosen.phone_number,
  FriendlyName: "Toledo Power Wash - Austin Stickley",
});

const e164 = bought.phone_number;
const pretty =
  e164?.startsWith("+1") && e164.length === 12
    ? `(${e164.slice(2, 5)}) ${e164.slice(5, 8)}-${e164.slice(8)}`
    : e164;

const out = {
  business: "Toledo Power Wash",
  owner: "Austin Stickley",
  phone_e164: e164,
  phone_display: pretty,
  phone_sid: bought.sid,
  locality: chosen.locality,
  region: chosen.region,
  provider: "twilio",
  purchasedAt: new Date().toISOString(),
};
fs.mkdirSync(path.join(root, "brand"), { recursive: true });
fs.writeFileSync(path.join(root, "brand", "phone.json"), JSON.stringify(out, null, 2) + "\n");
fs.writeFileSync(path.join(root, "brand", "phone.txt"), pretty + "\n");

// append to .env.local for Next
const envLocal = path.join(root, ".env.local");
const lines = [
  `NEXT_PUBLIC_PHONE=${e164}`,
  `NEXT_PUBLIC_PHONE_DISPLAY=${pretty}`,
  `NEXT_PUBLIC_EMAIL=austin@toledopowerwash.com`,
];
let existing = fs.existsSync(envLocal) ? fs.readFileSync(envLocal, "utf8") : "";
for (const line of lines) {
  const key = line.split("=")[0];
  if (existing.includes(`${key}=`)) {
    existing = existing
      .split("\n")
      .map((l) => (l.startsWith(`${key}=`) ? line : l))
      .join("\n");
  } else {
    existing = existing.trim() ? existing.trim() + "\n" + line + "\n" : line + "\n";
  }
}
fs.writeFileSync(envLocal, existing.endsWith("\n") ? existing : existing + "\n");

console.log("\n✅ Business number:", pretty);
console.log("Saved brand/phone.json and .env.local");
console.log("Next: update Pressure Ops meta + redeploy site with NEXT_PUBLIC_PHONE");
