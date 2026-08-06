/** Central business contact config — update phone after number is live. */
export const site = {
  name: "Toledo Power Wash",
  owner: "Austin Stickley",
  email: process.env.NEXT_PUBLIC_EMAIL || "austin@toledopowerwash.com",
  /** E.164 preferred, e.g. +14195551212 — set via NEXT_PUBLIC_PHONE */
  phone: process.env.NEXT_PUBLIC_PHONE || "",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "",
  city: "Toledo, OH",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://toledopowerwash.com",
};

export function phoneHref(): string | null {
  const raw = site.phone || site.phoneDisplay;
  if (!raw) return null;
  const digits = raw.replace(/[^\d+]/g, "");
  if (!digits) return null;
  return `tel:${digits.startsWith("+") ? digits : `+1${digits.replace(/\D/g, "").slice(-10)}`}`;
}

export function phoneLabel(): string {
  if (site.phoneDisplay) return site.phoneDisplay;
  const p = site.phone;
  if (p.startsWith("+1") && p.length === 12) {
    return `(${p.slice(2, 5)}) ${p.slice(5, 8)}-${p.slice(8)}`;
  }
  return p || "Request a quote";
}
