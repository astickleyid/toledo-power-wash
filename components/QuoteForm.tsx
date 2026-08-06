"use client";

import { FormEvent, useState } from "react";
import { phoneHref, phoneLabel, site } from "../lib/site";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
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

    const subject = encodeURIComponent(`Quote request — ${service || "Power washing"} — ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Service: ${service}`,
        `Address / property: ${address}`,
        "",
        message,
        "",
        "— Sent from Toledo Power Wash quote form",
      ].join("\n")
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className={`card p-6 sm:p-8 ${compact ? "" : "shadow-glow"}`}>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">Get a free quote</h2>
        <p className="mt-1 text-sm text-mute">
          Toledo power washing for commercial properties and homes. Same-week site visits when
          available.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className="input" placeholder="Austin Stickley" />
        </div>
        <div>
          <label className="label" htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className="input" placeholder="(419) 555-0100" />
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" className="input" placeholder="you@company.com" />
        </div>
        <div>
          <label className="label" htmlFor="service">
            Service needed
          </label>
          <select id="service" name="service" className="input" defaultValue="Commercial flatwork">
            <option>Commercial flatwork / sidewalks</option>
            <option>Dumpster pad / grease</option>
            <option>Parking lot</option>
            <option>Building exterior / soft wash</option>
            <option>House washing</option>
            <option>Driveway / residential</option>
            <option>Monthly / quarterly plan</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="label" htmlFor="address">
            Property address or city
          </label>
          <input
            id="address"
            name="address"
            className="input"
            placeholder="Toledo, OH — or full address"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="label" htmlFor="message">
            Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="input"
            placeholder="Sq ft estimate, # of buildings, photos available, preferred schedule…"
          />
        </div>
      </div>
      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Request free quote
      </button>
      {tel && (
        <p className="mt-4 text-sm text-mute">
          Prefer to talk? Call{" "}
          <a href={tel} className="font-semibold text-sky hover:underline">
            {phoneLabel()}
          </a>
        </p>
      )}
      {status === "sent" && (
        <p className="mt-3 text-sm text-green-400">
          Opening your email app with the quote details.
          {tel ? ` Or call ${phoneLabel()}.` : " If it didn’t open, email Austin directly."}
        </p>
      )}
    </form>
  );
}
