import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  HardHat,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/about/page-hero";
import { IconTile } from "@/components/icon-tile";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { heroImages } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why MintClean started a civil construction division, and what being part of the MintClean family means for your site.",
};

const trustGrid = [
  {
    icon: Users,
    title: "One accounts team",
    body: "The same MintClean contacts your property already works with coordinate your civil work — no new relationship to build.",
  },
  {
    icon: Building2,
    title: "Same office, same standards",
    body: `Based out of ${site.address.line1}, ${site.address.city}, alongside the rest of MintClean. One company, one set of service standards.`,
  },
  {
    icon: ShieldCheck,
    title: "One invoice relationship",
    body: "Civil work can run through the same billing relationship you already have with MintClean, instead of a separate vendor file.",
  },
  {
    icon: HardHat,
    title: "Crews that know your site",
    body: "Our site teams work the same buildings and properties MintClean maintains, so they already understand access, parking, and tenant schedules.",
  },
];

const values = [
  {
    title: "Safety first, every site",
    body: "Every crew operates under a WorkSafeBC-registered safety program, with daily hazard assessments and site-specific traffic control plans where the work affects tenants, residents, or the public.",
  },
  {
    title: "Licensed and insured",
    body: "MintClean Civil Construction carries commercial general liability coverage and is licensed to operate across Metro Vancouver and the surrounding Lower Mainland.",
  },
  {
    title: "Coordinated, not improvised",
    body: "For grading and drainage work that requires it, we bring in a licensed BC Land Surveyor and civil engineer of record rather than estimating elevations on-site.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MintClean Civil Construction"
        title="Built by MintClean, for the properties MintClean already maintains."
        description="We started this division because our commercial and strata clients kept asking us for work our janitorial and building-maintenance crews don't do — grading, concrete, asphalt, and drainage. So MintClean Civil Construction was formed to handle it, under the same roof."
        image={heroImages.about}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <p className="label-tag text-accent-foreground">Our story</p>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-muted-foreground">
              <p>
                MintClean Building Maintenance has spent years keeping commercial properties and
                strata buildings across Metro Vancouver clean, maintained, and presentable. Along
                the way, the same property managers and strata councils kept coming back with the
                same request: could MintClean also handle the ground-level work — the cracked
                parking lot, the catch basin that keeps backing up, the retaining wall that needs
                rebuilding, the lot that needs plowing when a storm closes the city down?
              </p>
              <p>
                Those jobs needed heavier equipment, different trades, and different crews than
                indoor maintenance — but the clients asking for them didn&apos;t want to vet,
                onboard, and manage a brand-new contractor just to get a parking lot repaved.
                MintClean Civil Construction exists to close that gap: a dedicated sitework and
                civil construction division, built from the ground up, operating inside the same
                company our clients already trust.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="blueprint-grid h-full border border-border bg-brand-dark p-8 text-white">
              <p className="label-tag text-primary">New division, established parent</p>
              <p className="font-heading mt-5 text-2xl leading-snug font-bold">
                &ldquo;We&apos;re a new division with an established parent.&rdquo;
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-white/70">
                Our site superintendent brings over a decade of BC heavy-civil and grading
                experience to the team, and every crew lead is hired specifically for commercial
                and strata-scale sitework — not residential driveways or large-scale land
                development.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <p className="label-tag text-accent-foreground">What this means for you</p>
            <h2 className="font-heading mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              What being part of MintClean means for your property
            </h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {trustGrid.map(({ icon: Icon, title, body }) => (
              <StaggerItem key={title}>
                <div className="flex h-full gap-4 border border-border bg-background p-6">
                  <IconTile tone="primary">
                    <Icon className="size-5" aria-hidden />
                  </IconTile>
                  <div>
                    <h3 className="font-heading font-bold">{title}</h3>
                    <p className="mt-1.5 text-[15px] text-muted-foreground">{body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <p className="label-tag text-accent-foreground">Safety and how we work</p>
        </Reveal>
        <StaggerGroup className="mt-10 grid divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {values.map((v, i) => (
            <StaggerItem key={v.title}>
              <div className="flex h-full flex-col gap-3 px-0 py-6 sm:px-8 sm:py-2 sm:first:pl-0">
                <span className="font-heading text-3xl font-black text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading font-bold">{v.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="blueprint-grid relative overflow-hidden bg-brand-dark text-white">
        <div className="hazard-stripes absolute inset-x-0 top-0 h-1.5" aria-hidden />
        <Reveal className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
              Already a MintClean client?
            </h2>
            <p className="mt-2 max-w-xl text-white/75">
              Ask your account contact to loop in the civil team, or reach out directly.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 bg-primary px-6 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Request a quote
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 border border-white/25 px-6 text-base font-semibold text-white hover:bg-white/10"
            >
              <Phone className="size-4" aria-hidden />
              {site.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
