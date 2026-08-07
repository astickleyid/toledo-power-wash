import Link from "next/link";
import { phoneHref, phoneLabel, serviceAreas, site } from "../lib/site";

export function Footer() {
  const tel = phoneHref();
  const label = phoneLabel();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="wrap grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="text-lg font-bold text-slate-900">{site.name}</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600">
            Professional power washing for homes and businesses in Toledo and Northwest Ohio.
            Owned by {site.owner}.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            {tel && label ? (
              <>
                <a href={tel} className="font-semibold text-slate-900 hover:text-teal-700">
                  {label}
                </a>
                <span className="mx-2 text-slate-300">|</span>
              </>
            ) : null}
            <a href={`mailto:${site.email}`} className="hover:text-teal-700">
              {site.email}
            </a>
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/#services" className="hover:text-teal-700">
                Services
              </Link>
            </li>
            <li>
              <Link href="/commercial" className="hover:text-teal-700">
                Commercial / property managers
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-teal-700">
                Free estimate
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-teal-700">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900">Service area</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {serviceAreas.slice(0, 8).join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200 py-4">
        <div className="wrap flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Power washing in Toledo, OH.
          </p>
          <p>Owner: {site.owner}</p>
        </div>
      </div>
    </footer>
  );
}
