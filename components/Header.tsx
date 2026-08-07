import Link from "next/link";
import { phoneHref, phoneLabel, site } from "../lib/site";

export function Header() {
  const tel = phoneHref();
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="wrap flex h-[4.25rem] items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded bg-ink font-display text-lg font-extrabold text-hivis">
            TP
          </span>
          <span>
            <span className="block font-display text-xl font-extrabold leading-none tracking-tight text-ink sm:text-2xl">
              {site.name}
            </span>
            <span className="mt-0.5 hidden text-[11px] font-semibold uppercase tracking-widest text-mud sm:block">
              Toledo · NW Ohio
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-ink-soft md:flex">
          <Link href="/#work" className="hover:text-water">
            What we clean
          </Link>
          <Link href="/commercial" className="hover:text-water">
            Property managers
          </Link>
          <Link href="/#areas" className="hover:text-water">
            Service area
          </Link>
          {tel && (
            <a href={tel} className="font-bold text-water hover:underline">
              {phoneLabel()}
            </a>
          )}
        </nav>

        <div className="flex items-center gap-2">
          {tel && (
            <a href={tel} className="btn-ghost !hidden !px-3 !py-2 text-xs sm:!inline-flex">
              Call
            </a>
          )}
          <Link href="/contact" className="btn-primary !px-4 !py-2.5 text-xs sm:text-sm">
            Free quote
          </Link>
        </div>
      </div>
    </header>
  );
}
