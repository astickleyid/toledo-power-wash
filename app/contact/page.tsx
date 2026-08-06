import type { Metadata } from "next";
import { QuoteForm } from "../../components/QuoteForm";

export const metadata: Metadata = {
  title: "Free Power Washing Quote in Toledo OH",
  description:
    "Request a free Toledo power washing quote for commercial or residential properties. Serving Toledo, Sylvania, Maumee, Perrysburg, and NW Ohio.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="container-page py-14 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <span className="badge">Get a quote</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Free power washing quote — Toledo, OH
          </h1>
          <p className="mt-4 text-lg text-mute">
            Commercial properties and homes. Tell us the address, what needs cleaned, and any
            photos. Austin Stickley will follow up with next steps.
          </p>
          <div className="mt-8 space-y-4 text-sm text-mute">
            <div className="card p-5">
              <div className="font-semibold text-white">Business</div>
              <p className="mt-1">Toledo Power Wash</p>
              <p>Owner: Austin Stickley</p>
              <p>Service area: Toledo & Northwest Ohio</p>
            </div>
            <div className="card p-5">
              <div className="font-semibold text-white">Best for fast quotes</div>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Property type (apartment, retail, home, etc.)</li>
                <li>Rough size or photos</li>
                <li>One-time vs monthly/quarterly</li>
                <li>Access notes (water, gates, hours)</li>
              </ul>
            </div>
          </div>
        </div>
        <QuoteForm />
      </div>
    </div>
  );
}
