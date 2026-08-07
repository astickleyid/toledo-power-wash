"use client";

import { FormEvent, useState } from "react";
import { phoneHref, phoneLabel, site } from "../lib/site";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const tel = phoneHref();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");
    const address = String(data.get("address") || "");

    const subject = encodeURIComponent(`Quote — ${service} — ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Service: ${service}`,
        `Property: ${address}`,
        "",
        message,
        "",
        "— Toledo Power Wash website",
      ].join("\n")
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8 ${compact ? "" : ""}`}
    >
      <div className="mb-6 border-b border-line pb-5">
        <p className="text-xs font-bold uppercase tracking-widest text-rust">Free quote</p>
        <h2 className="mt-1 font-display text-3xl font-extrabold tracking-tight text-ink">
          Tell us about the property
        </h2>
        <p className="mt-2 text-sm text-ink-soft">
          Commercial or residential. Same-week visits when we can.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className="field" placeholder="Your name" />
        </div>
        <div>
          <label className="label" htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className="field" placeholder="(419) …" />
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" className="field" placeholder="you@company.com" />
        </div>
        <div>
          <label className="label" htmlFor="service">
            What needs cleaned
          </label>
          <select id="service" name="service" className="field" defaultValue="Parking / sidewalks">
            <option>Parking / sidewalks</option>
            <option>Dumpster pad</option>
            <option>Parking lot</option>
            <option>Building exterior</option>
            <option>House wash</option>
            <option>Driveway</option>
            <option>Monthly / quarterly plan</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="label" htmlFor="address">
            Address or city
          </label>
          <input id="address" name="address" className="field" placeholder="Toledo, OH or full address" />
        </div>
        <div className="sm:col-span-2">
          <label className="label" htmlFor="message">
            Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="field"
            placeholder="Size, photos, access, preferred days…"
          />
        </div>
      </div>

      <button type="submit" className="btn-hivis mt-6 w-full sm:w-auto">
        Send quote request
      </button>

      {tel && (
        <p className="mt-4 text-sm text-ink-soft">
          Or call{" "}
          <a href={tel} className="font-bold text-rust hover:underline">
            {phoneLabel()}
          </a>
        </p>
      )}
      {status === "sent" && (
        <p className="mt-3 text-sm font-semibold text-[var(--ok)]">
          Opening your email with the details…
        </p>
      )}
    </form>
  );
}
