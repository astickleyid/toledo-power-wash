import Link from "next/link";
import { phoneHref, phoneLabel, site } from "../lib/site";

export function Footer() {
  const tel = phoneHref();
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="wrap grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl font-extrabold tracking-tight">{site.name}</div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
            Commercial-first power washing for Toledo and NW Ohio. Owned and run by{" "}
            {site.owner}.
          </p>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-hivis">Services</div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Parking lots & sidewalks</li>
            <li>Dumpster pads</li>
            <li>Building exteriors</li>
            <li>House & driveway wash</li>
            <li>Monthly / quarterly plans</li>
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-hivis">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Toledo, Ohio</li>
            {tel && (
              <li>
                <a href={tel} className="font-semibold text-white hover:text-hivis">
                  {phoneLabel()}
                </a>
              </li>
            )}
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-hivis">
                {site.email}
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-hivis">
                Request a free quote →
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {site.name} · {site.owner} · Power washing Toledo OH
      </div>
      <div className="stripe" aria-hidden />
    </footer>
  );
}
