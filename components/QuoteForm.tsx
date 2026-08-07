"use client";

import { FormEvent, useState } from "react";
import { phoneHref, phoneLabel, site } from "../lib/site";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const tel = phoneHref();
  const label = phoneLabel();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      service: String(data.get("service") || ""),
      address: String(data.get("address") || ""),
      message: String(data.get("message") || ""),
    };

    const subject = encodeURIComponent(
      `Estimate request — ${payload.service || "Power washing"} — ${payload.name}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${payload.name}`,
        `Phone: ${payload.phone}`,
        `Email: ${payload.email}`,
        `Service: ${payload.service}`,
        `Property address: ${payload.address}`,
        "",
        payload.message,
        "",
        "Sent from toledo-power-wash.vercel.app",
      ].join("\n")
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="card shadow-soft" id="estimate">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-slate-900">Request a free estimate</h2>
        <p className="mt-1 text-sm text-slate-600">
          Tell us about the property. We typically respond the same business day.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">
            Full name
          </label>
          <input id="name" name="name" required className="field" autoComplete="name" />
        </div>
        <div>
          <label className="label" htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required className="field" autoComplete="tel" />
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" className="field" autoComplete="email" />
        </div>
        <div>
          <label className="label" htmlFor="service">
            Service needed
          </label>
          <select id="service" name="service" className="field" defaultValue="House washing">
            <option>House washing</option>
            <option>Driveway cleaning</option>
            <option>Parking lot / sidewalks</option>
            <option>Dumpster pad cleaning</option>
            <option>Building exterior</option>
            <option>Recurring commercial plan</option>
            <option>Other</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="label" htmlFor="address">
            Property address or city
          </label>
          <input
            id="address"
            name="address"
            className="field"
            placeholder="Toledo, OH or full street address"
            autoComplete="street-address"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="label" htmlFor="message">
            Project details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="field"
            placeholder="What needs cleaned, approximate size, photos available, preferred timing…"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Get my free estimate
      </button>

      {tel && label && (
        <p className="mt-4 text-sm text-slate-600">
          Prefer to talk? Call{" "}
          <a href={tel} className="font-semibold text-teal-700 hover:underline">
            {label}
          </a>
        </p>
      )}

      {status === "sent" && (
        <p className="mt-3 text-sm font-medium text-teal-800">
          Opening your email app with the estimate request. If nothing opens, email {site.email}{" "}
          directly.
        </p>
      )}
    </form>
  );
}
