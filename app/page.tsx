import Link from "next/link";
import { QuoteForm } from "../components/QuoteForm";

const services = [
  {
    title: "Parking lots & sidewalks",
    desc: "High-volume flatwork with surface cleaners for even results. Ideal for plazas, apartments, and offices.",
    seo: "parking lot cleaning Toledo",
  },
  {
    title: "Dumpster pads & grease",
    desc: "Degrease and restore pad areas that drag down curb appeal and create safety issues.",
    seo: "dumpster pad cleaning Toledo",
  },
  {
    title: "Building exteriors",
    desc: "Soft wash / controlled exterior cleaning for storefronts, multifamily, and commercial buildings.",
    seo: "building exterior washing Toledo",
  },
  {
    title: "House & driveway washing",
    desc: "Residential power washing to fill the schedule — curb appeal after winter salt and grime.",
    seo: "house washing Toledo",
  },
  {
    title: "Recurring commercial plans",
    desc: "Monthly or quarterly packages so property managers stop firefighting exterior appearance.",
    seo: "commercial power washing Toledo",
  },
  {
    title: "Gas stations & retail",
    desc: "Oil spots, sidewalks, and high-traffic pads that need reliable, insured service.",
    seo: "gas station power washing Toledo",
  },
];

const areas = [
  "Toledo",
  "Sylvania",
  "Maumee",
  "Perrysburg",
  "Oregon",
  "Holland",
  "Rossford",
  "Waterville",
  "Lucas County",
  "NW Ohio",
];

const steps = [
  {
    n: "01",
    title: "Quick scope",
    body: "Call, form, or photos. Commercial sites get a walkthrough when needed.",
  },
  {
    n: "02",
    title: "Clear quote",
    body: "Flat pricing by scope. Recurring plans available. No mystery add-ons.",
  },
  {
    n: "03",
    title: "Clean + document",
    body: "Before/after photos on every job. COI available for property managers.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="container-page pb-16 pt-14 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="badge">Toledo, Ohio · Power Washing</span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Toledo Power Wash —{" "}
              <span className="text-sky">commercial power washing</span> that keeps properties
              looking managed
            </h1>
            <p className="mt-5 max-w-xl text-lg text-mute">
              Parking lots, sidewalks, dumpster pads, and building exteriors for apartments, retail,
              restaurants, and offices — plus residential fill. Local owner:{" "}
              <strong className="text-slate-200">Austin Stickley</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Get a free quote
              </Link>
              <Link href="/commercial" className="btn-secondary">
                For property managers
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-steel/70 pt-8">
              <div>
                <dt className="text-2xl font-bold text-white">Local</dt>
                <dd className="text-xs text-mute">Toledo & NW Ohio</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-white">Insured</dt>
                <dd className="text-xs text-mute">GL for commercial work</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-white">Recurring</dt>
                <dd className="text-xs text-mute">Monthly / quarterly</dd>
              </div>
            </dl>
          </div>
          <QuoteForm compact />
        </div>
      </section>

      {/* SEO strip */}
      <section className="border-y border-steel/60 bg-navy/40">
        <div className="container-page py-4 text-center text-sm text-mute">
          Searching for <strong className="text-slate-200">power washing Toledo OH</strong>,{" "}
          <strong className="text-slate-200">Toledo pressure washing</strong>, or{" "}
          <strong className="text-slate-200">commercial exterior cleaning</strong>? You’re in the
          right place.
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container-page py-20">
        <h2 className="section-title">Power washing services in Toledo</h2>
        <p className="section-sub">
          Built for commercial contracts first. Residential jobs keep the calendar full while we
          grow recurring accounts.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="card p-6 transition hover:border-sky/40">
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{s.desc}</p>
              <p className="mt-4 text-[11px] uppercase tracking-wide text-sky/80">{s.seo}</p>
            </article>
          ))}
        </div>
      </section>

      {/* COMMERCIAL CTA */}
      <section className="container-page pb-8">
        <div className="card relative overflow-hidden p-8 sm:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky/10 blur-2xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Property managers: stop chasing exterior vendors
            </h2>
            <p className="mt-3 text-mute">
              Monthly and quarterly exterior packages with photo documentation, clear scopes, and
              insurance certificates. Discounted first clean available with a 6–12 month agreement.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/commercial" className="btn-primary">
                Commercial packages
              </Link>
              <Link href="/contact" className="btn-secondary">
                Book a site walk
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="container-page py-20">
        <h2 className="section-title">Simple process</h2>
        <p className="section-sub">Fast quotes. Documented work. No drama.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="card p-6">
              <div className="text-sm font-bold text-sky">{s.n}</div>
              <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-mute">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AREAS */}
      <section id="areas" className="container-page pb-20">
        <h2 className="section-title">Service area</h2>
        <p className="section-sub">
          Based in the Toledo area. We prioritize route density for commercial accounts across NW
          Ohio.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {areas.map((a) => (
            <li
              key={a}
              className="rounded-full border border-steel bg-navy/50 px-4 py-2 text-sm text-slate-200"
            >
              {a}
            </li>
          ))}
        </ul>
      </section>

      {/* ABOUT */}
      <section className="container-page pb-20">
        <div className="card grid gap-8 p-8 md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-2xl font-bold text-white">Local owner, commercial standards</h2>
            <p className="mt-3 text-mute">
              I’m <strong className="text-slate-200">Austin Stickley</strong>, owner of Toledo Power
              Wash. This business is built to become a real commercial exterior vendor — not a
              weekend flyer operation. That means insurance, photo SOPs, recurring contracts, and
              clear communication with property managers.
            </p>
            <p className="mt-3 text-mute">
              Peak season in Ohio is spring through fall, when winter salt and grime hit sidewalks
              and pads hardest. We plan routes and packages around that reality.
            </p>
          </div>
          <div className="rounded-2xl border border-steel bg-ink/60 p-6">
            <h3 className="font-semibold text-white">What you can expect</h3>
            <ul className="mt-4 space-y-3 text-sm text-mute">
              <li>• Before & after photos on every job</li>
              <li>• Commercial liability for approved sites</li>
              <li>• Written scopes for recurring work</li>
              <li>• Fair minimums so small jobs stay viable</li>
              <li>• Honest pricing — quote after visit or clear photos</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-page pb-24">
        <div className="rounded-3xl border border-sky/30 bg-gradient-to-br from-sky/20 to-navy p-10 text-center shadow-glow">
          <h2 className="text-3xl font-bold text-white">Need power washing in Toledo?</h2>
          <p className="mx-auto mt-3 max-w-xl text-mute">
            Tell us about the property. We’ll send a clear quote and, for commercial sites, can set
            a recurring plan.
          </p>
          <Link href="/contact" className="btn-primary mt-6">
            Request your free quote
          </Link>
        </div>
      </section>
    </>
  );
}
