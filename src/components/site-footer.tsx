import Link from "next/link";
import { Logo } from "@/components/logo";
import { companyLinks, serviceLinks, site } from "@/lib/site";

const linkCls = "inline-flex min-h-9 items-center text-[15px] text-white/80 outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-primary";
const headCls = "text-sm font-bold tracking-wide text-white uppercase";

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="hazard-stripes h-1.5 w-full" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-center md:justify-between">
          <Logo tone="dark" className="h-12" />
          <p className="max-w-[38ch] text-white/70 md:text-right">
            {site.tagline} Site grading, concrete, asphalt, and grounds infrastructure for the
            properties MintClean already maintains.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Services">
            <h2 className={headCls}>Services</h2>
            <ul className="mt-4 flex flex-col gap-1">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className={headCls}>Company</h2>
            <ul className="mt-4 flex flex-col gap-1">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={headCls}>Contact</h2>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a href={site.phoneHref} className={`${linkCls} text-lg font-bold text-white`}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className={linkCls}>
                  {site.email}
                </a>
              </li>
              <li className="mt-2 text-[15px] leading-snug text-white/70">
                {site.address.line1}
                <br />
                {site.address.city} {site.address.postal}
              </li>
            </ul>
          </div>

          <div>
            <h2 className={headCls}>Hours</h2>
            <dl className="mt-4 flex flex-col gap-2">
              {site.hours.map((h) => (
                <div key={h.label} className="flex justify-between gap-4 text-[15px]">
                  <dt className="text-white/70">{h.label}</dt>
                  <dd className="font-semibold text-white">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 {site.legalName}</p>
          <p>
            Proudly part of the{" "}
            <a href="https://mintclean.ca" className="font-semibold text-primary hover:underline">
              MintClean
            </a>{" "}
            family of companies.
          </p>
        </div>
      </div>
    </footer>
  );
}
