import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { servicesData } from "./services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Site grading, concrete, asphalt, drainage, retaining walls, and commercial snow and ice management from MintClean Civil Construction in Metro Vancouver.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="hazard-stripes absolute inset-x-0 bottom-0 h-1.5" aria-hidden />
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
          <p className="inline-flex items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-bold tracking-wide text-accent uppercase">
            Services
          </p>
          <h1 className="font-heading mt-5 text-3xl leading-[1.1] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Sitework and grounds infrastructure, start to finish
          </h1>
          <p className="mt-6 text-lg text-white/75">
            From the earthwork before a new lot goes in to the plow truck that clears it come
            winter, MintClean Civil Construction covers the outdoor work MintClean&apos;s
            maintenance crews don&apos;t.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col rounded-sm border border-border p-6 outline-none transition-colors hover:border-primary focus-visible:ring-2 focus-visible:ring-primary"
            >
              <h2 className="font-heading text-lg font-bold">{s.label}</h2>
              <p className="mt-2 flex-1 text-[15px] text-muted-foreground">{s.shortDescription}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Learn more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
