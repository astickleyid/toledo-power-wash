import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "../../components/QuoteForm";

export const metadata: Metadata = {
  title: "Commercial Power Washing Toledo for Property Managers",
  description:
    "Commercial power washing in Toledo, OH for apartments, retail plazas, restaurants, and property managers. Monthly and quarterly exterior packages with photo documentation and COI.",
  alternates: { canonical: "/commercial" },
};

const packages = [
  {
    name: "Essential",
    price: "From $150–$300/mo",
    items: ["Sidewalks / entry paths", "Dumpster pad touch schedule", "Photo report each visit", "Ideal for smaller sites"],
  },
  {
    name: "Managed",
    price: "From $300–$600/mo",
    items: ["Expanded flatwork", "Pad + high-traffic zones", "Quarterly exterior review", "Priority scheduling"],
    featured: true,
  },
  {
    name: "Portfolio",
    price: "Custom",
    items: ["Multi-site route density", "Shared pricing across properties", "Single invoice option", "PM portal-ready reports"],
  },
];

export default function CommercialPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <span className="badge">Property managers · Commercial accounts</span>
      <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Commercial power washing in Toledo for properties that need to look managed
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-mute">
        Toledo Power Wash partners with property managers, multifamily, retail, restaurants, and
        facilities teams. Owner Austin Stickley — local, insured, photo-documented work.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {packages.map((p) => (
          <article
            key={p.name}
            className={`card p-6 ${p.featured ? "border-sky/50 shadow-glow" : ""}`}
          >
            {p.featured && (
              <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-sky">
                Most popular
              </div>
            )}
            <h2 className="text-xl font-bold text-white">{p.name}</h2>
            <p className="mt-1 text-sm text-sky">{p.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-mute">
              {p.items.map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-white">What PMs usually need</h2>
          <ul className="mt-4 space-y-3 text-mute">
            <li>• Certificate of insurance on file</li>
            <li>• Consistent dumpster pad and sidewalk appearance</li>
            <li>• Someone who shows up on schedule without chasing</li>
            <li>• Before/after proof for ownership or regional managers</li>
            <li>• One vendor for multiple local sites when possible</li>
          </ul>
          <p className="mt-6 text-sm text-mute">
            Offer: discounted first full clean in exchange for a 6–12 month service agreement
            (monthly or quarterly). Site visit or clear photos before final quote. Job minimums
            apply to protect mobilization.
          </p>
          <Link href="/contact" className="btn-primary mt-6">
            Schedule a free site walk
          </Link>
        </div>
        <QuoteForm />
      </div>
    </div>
  );
}
