import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "../../components/QuoteForm";
import { site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Commercial Power Washing for Property Managers in Toledo",
  description:
    "Commercial power washing in Toledo, OH for apartments, retail plazas, restaurants, and property managers. Recurring exterior cleaning, photo reports, and certificates of insurance.",
  alternates: { canonical: "/commercial" },
};

const packages = [
  {
    name: "Essential",
    price: "From $150–$300 / month",
    description: "Best for smaller commercial sites and focused exterior touchpoints.",
    items: [
      "Sidewalks and entry paths",
      "Scheduled dumpster pad service",
      "Before-and-after photos",
      "Single-site scheduling",
    ],
  },
  {
    name: "Managed",
    price: "From $300–$600 / month",
    description: "Most common for multi-building or higher-traffic properties.",
    featured: true,
    items: [
      "Expanded flatwork coverage",
      "Dumpster pads and high-traffic zones",
      "Priority scheduling",
      "Quarterly exterior review",
    ],
  },
  {
    name: "Portfolio",
    price: "Custom pricing",
    description: "For managers overseeing multiple locations in the Toledo area.",
    items: [
      "Multi-site route planning",
      "Volume-based pricing options",
      "Consolidated invoicing available",
      "Reporting suited to ownership updates",
    ],
  },
];

export default function CommercialPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="wrap py-14 sm:py-16">
          <p className="text-sm font-semibold text-teal-700">Commercial services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Commercial power washing for property managers in Toledo
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            {site.name} helps apartments, retail centers, restaurants, and commercial properties keep
            exteriors looking maintained. Recurring plans, documentation, and insurance paperwork
            available for vendor compliance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Request a commercial estimate
            </Link>
            <a href="#packages" className="btn-secondary">
              View package options
            </a>
          </div>
        </div>
      </section>

      <section id="packages" className="wrap py-16">
        <h2 className="section-title">Recurring package options</h2>
        <p className="section-lead">
          Final pricing is based on site size, access, and condition. Quotes are provided after a
          walkthrough or clear photos. An introductory discount may be available with a 6–12 month
          service agreement.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.name}
              className={`card ${p.featured ? "border-teal-600 ring-1 ring-teal-600" : ""}`}
            >
              {p.featured && (
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-teal-700">
                  Most requested
                </p>
              )}
              <h3 className="text-xl font-bold text-slate-900">{p.name}</h3>
              <p className="mt-1 text-base font-semibold text-teal-800">{p.price}</p>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {p.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-teal-700">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-2">
          <div>
            <h2 className="section-title">What property managers typically need</h2>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>• Certificate of insurance for the vendor file</li>
              <li>• Consistent sidewalk and dumpster pad appearance</li>
              <li>• Reliable scheduling without repeated follow-up</li>
              <li>• Before-and-after photos for ownership or regional review</li>
              <li>• One local contact who can cover multiple sites when possible</li>
            </ul>
            <p className="mt-8 rounded-xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-600">
              Minimum job charges apply to cover mobilization. Scope is confirmed in writing before
              work begins. Contact {site.owner} to discuss your portfolio.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
