import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-steel/70 bg-navy/40">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="text-lg font-bold text-white">Toledo Power Wash</div>
          <p className="mt-2 text-sm text-mute">
            Commercial-first power washing and soft washing for Toledo and NW Ohio.
            Owned by Austin Stickley.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-mute">Services</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>Parking lots & sidewalks</li>
            <li>Dumpster pad cleaning</li>
            <li>Building exteriors / soft wash</li>
            <li>House & driveway washing</li>
            <li>Monthly / quarterly plans</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-mute">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>Toledo, Ohio service area</li>
            <li>
              <Link href="/contact" className="text-sky hover:underline">
                Request a free quote
              </Link>
            </li>
            <li>Property managers welcome</li>
            <li>Fully insured (general liability)</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-steel/50 py-4 text-center text-xs text-mute">
        © {new Date().getFullYear()} Toledo Power Wash · Austin Stickley · Power washing Toledo OH
      </div>
    </footer>
  );
}
