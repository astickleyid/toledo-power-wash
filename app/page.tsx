import Link from "next/link";
import { QuoteForm } from "../components/QuoteForm";
import { faqs, phoneHref, phoneLabel, serviceAreas, services, site } from "../lib/site";

export default function HomePage() {
  const tel = phoneHref();
  const label = phoneLabel();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* HERO */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="wrap grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-sm font-semibold text-teal-700">
              Toledo, Ohio · Commercial & residential
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Professional power washing in Toledo, OH
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              {site.name} provides reliable exterior cleaning for homes and businesses across
              Toledo and Northwest Ohio—house washing, driveways, parking lots, dumpster pads, and
              building exteriors. Free estimates. Locally owned by {site.owner}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Get a free estimate
              </Link>
              <Link href="/commercial" className="btn-secondary">
                Commercial services
              </Link>
              {tel && label && (
                <a href={tel} className="btn-secondary">
                  Call {label}
                </a>
              )}
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-700">
              <li>✓ Free estimates</li>
              <li>✓ Photo documentation</li>
              <li>✓ Commercial COI available</li>
              <li>✓ Recurring service plans</li>
            </ul>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* SEO keyword strip — natural */}
      <section className="border-b border-slate-200 bg-white py-3">
        <p className="wrap text-center text-sm text-slate-500">
          Searching for <strong className="font-medium text-slate-700">power washing in Toledo</strong>,{" "}
          <strong className="font-medium text-slate-700">Toledo pressure washing</strong>, or{" "}
          <strong className="font-medium text-slate-700">house washing near you</strong>? We serve
          homes and commercial properties throughout the metro area.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="wrap py-16 sm:py-20">
        <h2 className="section-title">Power washing services in Toledo</h2>
        <p className="section-lead">
          From residential exteriors to commercial properties, we focus on clean results, clear
          communication, and pricing you understand before work begins.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.slug} className="card hover:border-teal-200">
              <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.summary}</p>
            </article>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="wrap py-16 sm:py-20">
          <h2 className="section-title">Why hire Toledo Power Wash</h2>
          <p className="section-lead">
            Property owners and managers need a vendor who shows up prepared, protects the site, and
            documents the work.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Local & accountable",
                d: `Owned by ${site.owner}. You work with a local operator—not a call center or revolving subcontractors.`,
              },
              {
                t: "Clear estimates",
                d: "We quote after photos or a site visit so scope and price are agreed before equipment arrives.",
              },
              {
                t: "Built for commercial needs",
                d: "Insurance documentation, before-and-after photos, and optional recurring schedules for multi-site portfolios.",
              },
            ].map((item) => (
              <div key={item.t} className="card">
                <h3 className="text-base font-bold text-slate-900">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL CTA */}
      <section className="wrap py-16 sm:py-20">
        <div className="rounded-2xl bg-slate-900 px-8 py-10 text-white sm:px-12 sm:py-12">
          <p className="text-sm font-semibold text-teal-300">For property managers</p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Recurring exterior cleaning for apartments, retail, and commercial sites
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            Keep sidewalks, dumpster pads, and common areas looking maintained with monthly or
            quarterly service. Certificates of insurance and photo reports available for your
            vendor file.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/commercial" className="btn-primary">
              View commercial options
            </Link>
            <Link href="/contact" className="btn border border-white/20 bg-white/10 text-white hover:bg-white/15">
              Schedule a site visit
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-slate-200 bg-white">
        <div className="wrap py-16 sm:py-20">
          <h2 className="section-title">How to get started</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "1",
                t: "Request an estimate",
                d: "Share the address, what needs cleaned, and photos if you have them.",
              },
              {
                n: "2",
                t: "Review the quote",
                d: "You get a clear scope and price. Commercial sites can include a walkthrough.",
              },
              {
                n: "3",
                t: "We clean and document",
                d: "Work is completed to the agreed scope with before-and-after photos.",
              },
            ].map((step) => (
              <li key={step.n} className="card">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-700 text-sm font-bold text-white">
                  {step.n}
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section id="service-area" className="border-t border-slate-200 bg-slate-50">
        <div className="wrap py-16 sm:py-20">
          <h2 className="section-title">Service area: Toledo & Northwest Ohio</h2>
          <p className="section-lead">
            We prioritize Toledo and nearby communities for efficient scheduling and consistent
            response times.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="wrap py-16 sm:py-20">
        <h2 className="section-title">Frequently asked questions</h2>
        <p className="section-lead">
          Common questions about power washing costs, commercial service, and coverage in Toledo.
        </p>
        <div className="mt-10 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {faqs.map((f) => (
            <details key={f.q} className="group px-6 py-5">
              <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {f.q}
                  <span className="text-slate-400 group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ABOUT + CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="wrap grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="section-title">About {site.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {site.name} is a locally owned power washing company serving Toledo and surrounding
              Northwest Ohio communities. Founder {site.owner} focuses on straightforward
              communication, careful work around buildings and landscaping, and service options for
              both homeowners and commercial property managers.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Whether you need a one-time house wash after winter or a recurring plan for sidewalks
              and dumpster pads, we are ready to provide a free estimate.
            </p>
          </div>
          <div className="rounded-2xl bg-teal-700 px-8 py-10 text-white">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready for a cleaner exterior?
            </h2>
            <p className="mt-3 text-teal-50">
              Request your free estimate today. Commercial and residential projects welcome.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn bg-white text-teal-900 hover:bg-teal-50">
                Free estimate
              </Link>
              {tel && label && (
                <a href={tel} className="btn border border-white/30 text-white hover:bg-white/10">
                  {label}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
