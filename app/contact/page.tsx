import type { Metadata } from "next";
import { QuoteForm } from "../../components/QuoteForm";
import { phoneHref, phoneLabel, site } from "../../lib/site";

export const metadata: Metadata = {
  title: "Free Power Washing Quote — Toledo OH",
  description:
    "Request a free Toledo power washing quote. Commercial and residential. Serving Toledo, Sylvania, Maumee, Perrysburg, and NW Ohio.",
};

export default function ContactPage() {
  const tel = phoneHref();

  return (
    <section className="texture border-b border-line">
      <div className="wrap grid gap-12 py-14 lg:grid-cols-2 lg:py-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-water">Contact</p>
          <h1 className="mt-2 font-display text-5xl font-extrabold leading-none tracking-tight text-ink sm:text-6xl">
            Free quote.
            <br />
            Straight answer.
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink-soft">
            Commercial or home. Austin Stickley, Toledo Power Wash. Tell us the property — we’ll
            follow up.
          </p>

          <div className="mt-8 space-y-3">
            <div className="border border-line bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-mud">Business</p>
              <p className="mt-1 font-display text-2xl font-extrabold text-ink">{site.name}</p>
              <p className="text-sm text-ink-soft">Owner: {site.owner}</p>
              <p className="text-sm text-ink-soft">Toledo & NW Ohio</p>
            </div>
            {(tel || site.email) && (
              <div className="border border-line bg-white p-5 text-sm">
                {tel && (
                  <p>
                    <a href={tel} className="font-bold text-water hover:underline">
                      {phoneLabel()}
                    </a>
                  </p>
                )}
                <p className="mt-1">
                  <a href={`mailto:${site.email}`} className="text-ink-soft hover:text-water">
                    {site.email}
                  </a>
                </p>
              </div>
            )}
            <div className="border border-line bg-concrete p-5 text-sm text-ink-soft">
              <p className="font-bold text-ink">For a faster quote, include:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Property type</li>
                <li>Rough size or photos</li>
                <li>One-time vs monthly/quarterly</li>
                <li>Access notes</li>
              </ul>
            </div>
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
