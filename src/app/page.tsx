import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { serviceLinks, site } from "@/lib/site";

const trustPoints = [
  "A division of MintClean Building Maintenance, serving BC since the company's founding",
  "Same commercial, strata, and property-management clients MintClean already maintains",
  "Licensed, insured, and WorkSafeBC-registered crews",
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="hazard-stripes absolute inset-x-0 bottom-0 h-1.5" aria-hidden />
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:py-28 lg:px-8">
          <div className="max-w-2xl">
            <p className="inline-flex items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-bold tracking-wide text-primary uppercase">
              A MintClean company
            </p>
            <h1 className="font-heading mt-5 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Civil construction from the team that already maintains your property.
            </h1>
            <p className="mt-6 text-lg text-white/75">
              MintClean Civil Construction handles the sitework indoor maintenance can&apos;t:
              grading, concrete, asphalt, and drainage for commercial buildings, strata
              corporations, and developments across Metro Vancouver.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-primary px-6 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/85"
              >
                Request a quote
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex h-12 items-center justify-center rounded-sm border border-white/25 px-6 text-base font-semibold text-white hover:bg-white/10"
              >
                {site.phone}
              </a>
            </div>
          </div>

          <div className="w-full max-w-md shrink-0 rounded-sm border border-white/10 bg-white/5 p-6 lg:ml-auto">
            <p className="text-sm font-bold tracking-wide text-primary uppercase">Why MintClean Civil</p>
            <ul className="mt-4 flex flex-col gap-4">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[15px] text-white/85">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-wide text-accent-foreground uppercase">Services</p>
          <h2 className="font-heading mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Sitework and grounds infrastructure, start to finish
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceLinks.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col rounded-sm border border-border p-6 outline-none transition-colors hover:border-primary focus-visible:ring-2 focus-visible:ring-primary"
            >
              <h3 className="font-heading text-lg font-bold">{s.label}</h3>
              <p className="mt-2 flex-1 text-[15px] text-muted-foreground">{s.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Learn more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
              Already a MintClean client? Your site crew is one call away.
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              No new vendor to vet — same office, same accounts team, same standards.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-sm bg-primary px-6 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Request a quote
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
