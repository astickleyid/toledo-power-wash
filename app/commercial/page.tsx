import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "../../components/QuoteForm";

export const metadata: Metadata = {
  title: "Commercial Power Washing for Property Managers",
  description:
    "Commercial power washing in Toledo OH for apartments, retail, restaurants, and PMs. Monthly and quarterly packages with photos and COI.",
};

const tiers = [
  {
    name: "Essential",
    price: "$150–$300/mo",
    note: "Smaller sites",
    items: ["Sidewalks / entries", "Dumpster pad cadence", "Photo report", "One site"],
  },
  {
    name: "Managed",
    price: "$300–$600/mo",
    note: "Most properties",
    featured: true,
    items: ["Expanded flatwork", "Pads + high traffic", "Priority schedule", "Quarterly review"],
  },
  {
    name: "Portfolio",
    price: "Custom",
    note: "Multi-site",
    items: ["Route density pricing", "Shared invoicing", "Multiple locations", "PM-ready reports"],
  },
];

export default function CommercialPage() {
  return (
    <>
      <section className="texture border-b border-line">
        <div className="wrap py-14 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-water">
            Property managers · Commercial
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-ink sm:text-6xl">
            Exterior cleaning that keeps ownership off your back.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            Toledo Power Wash — Austin Stickley. Recurring sidewalks, dumpster pads, lots, and
            exteriors with photos and insurance docs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-hivis">
              Schedule a site walk
            </Link>
            <a href="#packages" className="btn-ghost">
              View packages
            </a>
          </div>
        </div>
      </section>

      <section id="packages" className="wrap py-16">
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink">
          Recurring packages
        </h2>
        <p className="mt-2 max-w-xl text-ink-soft">
          Final pricing after site visit or clear photos. Job minimums apply. Intro discount on first
          full clean with a 6–12 month agreement.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`border p-6 ${
                t.featured
                  ? "border-ink bg-ink text-white shadow-lg"
                  : "border-line bg-white text-ink"
              }`}
            >
              {t.featured && (
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-hivis">
                  Most booked
                </p>
              )}
              <h3 className="font-display text-3xl font-extrabold tracking-tight">{t.name}</h3>
              <p className={`mt-1 text-lg font-bold ${t.featured ? "text-hivis" : "text-water"}`}>
                {t.price}
              </p>
              <p className={`text-sm ${t.featured ? "text-white/60" : "text-mud"}`}>{t.note}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {t.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className={t.featured ? "text-hivis" : "text-water"}>✓</span>
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-concrete">
        <div className="wrap grid gap-10 py-16 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-ink">
              What PMs actually need
            </h2>
            <ul className="mt-6 space-y-3 text-ink-soft">
              <li>• COI without chasing</li>
              <li>• Dumpster pads that don’t embarrass the walkthrough</li>
              <li>• Someone who shows up on the schedule</li>
              <li>• Photos for regional / ownership</li>
              <li>• One vendor for multiple local sites</li>
            </ul>
            <p className="mt-8 border-l-4 border-hivis bg-white p-4 text-sm text-ink-soft">
              Offer: discounted first full clean for a written 6–12 month monthly or quarterly
              agreement. Quote after site walk or photos.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
