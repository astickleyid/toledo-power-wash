import Link from "next/link";
import { QuoteForm } from "../components/QuoteForm";
import { phoneHref, phoneLabel } from "../lib/site";

const jobs = [
  {
    title: "Parking lots & sidewalks",
    body: "Even surface cleaner finish. Plazas, apartments, offices — salt, grime, tire marks.",
  },
  {
    title: "Dumpster pads",
    body: "Grease and trash juice don’t wait. Higher-margin clean that PMs actually care about.",
  },
  {
    title: "Buildings & storefronts",
    body: "Soft wash / controlled exterior clean so you don’t blast siding into next week.",
  },
  {
    title: "Houses & driveways",
    body: "Residential fill while we stack commercial routes. Curb appeal after winter.",
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
];

export default function HomePage() {
  const tel = phoneHref();

  return (
    <>
      {/* HERO */}
      <section className="texture border-b border-line">
        <div className="wrap grid items-center gap-10 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-ink">
              <span className="h-2 w-2 rounded-full bg-ink" />
              Toledo, Ohio · Local owner
            </p>

            <h1 className="mt-5 font-display text-[clamp(2.75rem,8vw,5.5rem)] font-extrabold leading-[0.9] tracking-tight text-ink">
              Power washing
              <br />
              <span className="text-rust">that looks like</span>
              <br />
              you give a damn.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Commercial lots, pads, sidewalks, and buildings — with residential when it fits the
              route.{" "}
              <strong className="text-ink">Austin Stickley</strong>, Toledo Power Wash. Free
              quotes. Recurring plans for property managers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-hivis">
                Get a free quote
              </Link>
              <Link href="/commercial" className="btn-dark">
                For property managers
              </Link>
              {tel && (
                <a href={tel} className="btn-ghost">
                  Call {phoneLabel()}
                </a>
              )}
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-ink/10 pt-8">
              <div>
                <dt className="font-display text-3xl font-extrabold text-ink">Local</dt>
                <dd className="text-xs font-semibold uppercase tracking-wide text-mud">
                  Toledo based
                </dd>
              </div>
              <div>
                <dt className="font-display text-3xl font-extrabold text-ink">Insured</dt>
                <dd className="text-xs font-semibold uppercase tracking-wide text-mud">
                  GL for commercial
                </dd>
              </div>
              <div>
                <dt className="font-display text-3xl font-extrabold text-ink">Photos</dt>
                <dd className="text-xs font-semibold uppercase tracking-wide text-mud">
                  Every job
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="split-ba mb-4 shadow-lg">
              <div className="seam" />
            </div>
            <p className="text-center text-xs font-bold uppercase tracking-widest text-mud">
              Dirty concrete → managed property
            </p>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-line bg-ink py-4 text-white">
        <div className="wrap flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-sm font-semibold tracking-wide">
          <span>Apartments</span>
          <span className="text-hivis">·</span>
          <span>Retail plazas</span>
          <span className="text-hivis">·</span>
          <span>Restaurants</span>
          <span className="text-hivis">·</span>
          <span>Gas stations</span>
          <span className="text-hivis">·</span>
          <span>Homes</span>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="wrap py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-rust">What we clean</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Built for commercial first.
            <br />
            <span className="text-mud">Residential keeps the calendar full.</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {jobs.map((j, i) => (
            <article
              key={j.title}
              className="group border border-line bg-white p-6 transition hover:border-ink hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink">
                  {j.title}
                </h3>
                <span className="font-display text-3xl font-extrabold text-line group-hover:text-hivis">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{j.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PM BAND */}
      <section className="bg-ink text-white">
        <div className="wrap grid items-center gap-8 py-14 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-hivis">
              Property managers
            </p>
            <h2 className="mt-2 font-display text-4xl font-extrabold leading-none tracking-tight sm:text-5xl">
              Stop firefighting
              <br />
              exterior appearance.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/85">
              Monthly and quarterly packages. Photo documentation. COI on file. Discounted first
              clean when you lock 6–12 months.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/commercial" className="btn-hivis">
                See commercial packages
              </Link>
              <Link href="/contact" className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-rust">
                Book a site walk
              </Link>
            </div>
          </div>
          <ul className="space-y-3 rounded-lg border border-white/20 bg-black/25 p-6 text-sm">
            {[
              "Certificate of insurance for your vendor file",
              "Before & after photos every visit",
              "Written scope — not “we’ll see when we get there”",
              "Route-dense scheduling across your Toledo sites",
              "One contact: Austin",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-0.5 font-bold text-hivis">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AREAS + QUOTE */}
      <section id="areas" className="wrap grid gap-12 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-rust">Service area</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Toledo & NW Ohio
          </h2>
          <p className="mt-4 max-w-md text-ink-soft">
            We prioritize commercial route density. If you’re nearby and the job fits, we roll.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {areas.map((a) => (
              <li
                key={a}
                className="border border-line bg-white px-3 py-1.5 text-sm font-semibold text-ink"
              >
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-10 border border-line bg-concrete p-6">
            <p className="font-display text-2xl font-extrabold text-ink">How it works</p>
            <ol className="mt-4 space-y-4 text-sm text-ink-soft">
              <li>
                <strong className="text-ink">1. Scope</strong> — Call, form, or photos. Site walk
                for commercial when needed.
              </li>
              <li>
                <strong className="text-ink">2. Quote</strong> — Clear number. Min job covers the
                drive. No mystery fees.
              </li>
              <li>
                <strong className="text-ink">3. Clean + document</strong> — Before/after photos.
                Done.
              </li>
            </ol>
          </div>
        </div>

        <QuoteForm />
      </section>

      {/* ABOUT */}
      <section className="border-t border-line bg-concrete">
        <div className="wrap grid gap-8 py-16 md:grid-cols-5 md:py-20">
          <div className="md:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-rust">Owner</p>
            <h2 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-ink">
              Austin Stickley
            </h2>
          </div>
          <div className="md:col-span-3 space-y-4 text-base leading-relaxed text-ink-soft">
            <p>
              I’m building Toledo Power Wash as a real commercial vendor — insurance, photo SOPs,
              recurring contracts — not a weekend flyer operation.
            </p>
            <p>
              Ohio peak season is spring through fall when winter salt and grime hit hardest. We
              plan packages around that. If you manage property or just need the house looking
              right, get a quote.
            </p>
            <Link href="/contact" className="btn-primary mt-2">
              Talk to Austin
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL */}
      <section className="bg-ink py-16 text-center text-white">
        <div className="wrap">
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">
            Need power washing
            <br />
            <span className="text-hivis">in Toledo?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/70">
            Tell us the property. We’ll quote it straight.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-hivis">
              Free quote
            </Link>
            {tel && (
              <a href={tel} className="btn border-2 border-white/30 text-white hover:border-hivis hover:text-hivis">
                {phoneLabel()}
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
