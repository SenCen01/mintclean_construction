import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, HardHat, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "MintClean Civil Construction is now accepting sitework, concrete, asphalt, and drainage projects across Metro Vancouver.",
};

const tiers = [
  {
    icon: HardHat,
    title: "Small sitework & repairs",
    body: "Curb and sidewalk repair, pothole patching, catch basin maintenance, and other fixes property managers need handled fast — scoped and scheduled without a long procurement process.",
  },
  {
    icon: Building2,
    title: "Strata & commercial parking lot projects",
    body: "Lot resurfacing, restriping, drainage correction, and retaining wall work for the strata corporations and commercial plazas MintClean's maintenance teams already serve.",
  },
  {
    icon: Landmark,
    title: "New development sitework",
    body: "Grading, excavation, and underground drainage coordination for developers bringing a new commercial or multi-family site out of the ground.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="hazard-stripes absolute inset-x-0 bottom-0 h-1.5" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="inline-flex items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-bold tracking-wide text-primary uppercase">
            Now accepting projects
          </p>
          <h1 className="font-heading mt-5 max-w-3xl text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
            MintClean Civil Construction is taking on sitework across Metro Vancouver.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            As a new division, we don&apos;t have a long project archive to show you yet — what we
            do have is the accounts, the office, and the client relationships MintClean has built
            across Metro Vancouver for years. Here&apos;s the kind of work we&apos;re equipped to take
            on from day one.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.title} className="flex flex-col rounded-sm border border-border p-6">
              <tier.icon className="size-8 text-primary" aria-hidden />
              <h2 className="font-heading mt-4 text-lg font-bold">{tier.title}</h2>
              <p className="mt-2 text-[15px] text-muted-foreground">{tier.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-dark text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
              Have a site that needs work?
            </h2>
            <p className="mt-2 max-w-xl text-white/75">
              Tell us about the project and we&apos;ll schedule a site visit — backed by the same
              team and office as MintClean Building Maintenance.
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
