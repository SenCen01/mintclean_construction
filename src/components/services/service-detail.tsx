import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ServiceDetail } from "@/app/services/services-data";

export function ServiceDetailView({ service }: { service: ServiceDetail }) {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="hazard-stripes absolute inset-x-0 bottom-0 h-1.5" aria-hidden />
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
          <p className="inline-flex items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-bold tracking-wide text-accent uppercase">
            Services
          </p>
          <h1 className="font-heading mt-5 text-3xl leading-[1.1] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {service.label}
          </h1>
          <p className="mt-6 text-lg text-white/75">{service.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-extrabold tracking-tight">What&apos;s included</h2>
        <ul className="mt-6 flex flex-col gap-4">
          {service.included.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] text-foreground">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-sm border border-border bg-secondary p-6">
          <h2 className="font-heading text-lg font-bold">Who this is for</h2>
          <p className="mt-2 text-[15px] text-muted-foreground">{service.whoThisIsFor}</p>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
              Ready to talk about your site?
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Tell us what you&apos;re dealing with and we&apos;ll have a crew lead reach out.
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
