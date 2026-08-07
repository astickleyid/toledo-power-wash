import Image from "next/image";
import Link from "next/link";
import { phoneHref, phoneLabel, site } from "../lib/site";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/commercial", label: "Commercial" },
  { href: "/#service-area", label: "Service area" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const tel = phoneHref();
  const label = phoneLabel();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]">
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <Image
            src="/logo.svg"
            alt={`${site.name} logo`}
            width={240}
            height={40}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-teal-700">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {tel && label && (
            <a
              href={tel}
              className="hidden text-sm font-semibold text-slate-900 hover:text-teal-700 sm:inline"
            >
              {label}
            </a>
          )}
          <Link href="/contact" className="btn-primary !px-4 !py-2.5 text-xs sm:text-sm">
            Free estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
