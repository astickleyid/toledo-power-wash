import Link from "next/link";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/commercial", label: "Commercial" },
  { href: "/#areas", label: "Service Area" },
  { href: "/#process", label: "Process" },
  { href: "/contact", label: "Get a Quote" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-steel/60 bg-ink/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 font-bold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky text-sm font-black text-white">
            TP
          </span>
          <span className="leading-tight">
            <span className="block text-sm text-white sm:text-base">Toledo Power Wash</span>
            <span className="hidden text-[11px] font-medium text-mute sm:block">
              Toledo, Ohio · Commercial & Residential
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-mute md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn-primary !px-4 !py-2 text-xs sm:text-sm">
          Free Quote
        </Link>
      </div>
    </header>
  );
}
