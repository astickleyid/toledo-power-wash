import type { Metadata } from "next";
import { QuoteForm } from "../../components/QuoteForm";
import { phoneHref, phoneLabel, site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Free Power Washing Estimate in Toledo, OH",
  description:
    "Request a free power washing estimate in Toledo, Ohio. Residential and commercial projects. Serving Toledo, Sylvania, Maumee, Perrysburg, and NW Ohio.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const tel = phoneHref();
  const label = phoneLabel();

  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="wrap grid gap-12 py-14 lg:grid-cols-2 lg:py-16">
        <div>
          <p className="text-sm font-semibold text-teal-700">Contact</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Free power washing estimate
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Residential or commercial. Share a few details about the property and we will follow up
            with next steps. Owner: {site.owner}.
          </p>

          <div className="mt-8 space-y-4">
            <div className="card">
              <p className="text-sm font-semibold text-slate-900">{site.name}</p>
              <p className="mt-1 text-sm text-slate-600">Toledo & Northwest Ohio</p>
              {tel && label && (
                <p className="mt-3">
                  <a href={tel} className="text-base font-semibold text-teal-700 hover:underline">
                    {label}
                  </a>
                </p>
              )}
              <p className="mt-1 text-sm">
                <a href={`mailto:${site.email}`} className="text-slate-600 hover:text-teal-700">
                  {site.email}
                </a>
              </p>
            </div>

            <div className="card bg-slate-50">
              <p className="text-sm font-semibold text-slate-900">For a faster estimate, include:</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                <li>Property type (home, apartment, retail, etc.)</li>
                <li>What needs cleaned</li>
                <li>Approximate size or photos</li>
                <li>One-time vs. recurring service</li>
                <li>Access notes (gates, hours, water source)</li>
              </ul>
            </div>
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}
