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
    "Mint Landscape was founded on a straightforward idea: that every outdoor space deserves to be treated with the same care and skill as the people who live and work in it.",
};

const trustGrid = [
  {
    icon: Users,
    title: "A team that listens",
    body: "We take the time to deeply understand your outdoor vision before any ground gets broken.",
  },
  {
    icon: ShieldCheck,
    title: "Honest craft, no shortcuts",
    body: "We do not cut corners, we do not overstate what we can deliver, and we do not walk away until the work is something we're proud to put our name to.",
  },
  {
    icon: HardHat,
    title: "Horticulturists and tradespeople",
    body: "Our team is experienced horticulturists, skilled tradespeople, and dedicated project managers, united by shared quality standards.",
  },
  {
    icon: Building2,
    title: "Rooted in British Columbia",
    body: "Built on craft, honesty, and a genuine love for the land we work with — shaping BC one property at a time.",
  },
];

const howWeWork = [
  {
    title: "Real listening",
    body: "Every project starts with understanding your outdoor vision — not a generic package.",
  },
  {
    title: "Honest craft",
    body: "We do not cut corners, and we do not overstate what we can deliver.",
  },
  {
    title: "Lasting results",
    body: "We do not walk away until the work is something we are proud to put our name to.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Built on craft, honesty, and a genuine love for the land we work with."
        description="Mint Landscape was founded on a straightforward idea: that every outdoor space deserves to be treated with the same care and skill as the people who live and work in it."
        image={heroImages.about}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <p className="label-tag text-accent-foreground">Our story</p>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-muted-foreground">
              <p>
                Our construction team and in-house horticulturists are driven by a genuine love of
                design. For them, creating and building isn&apos;t just a job — it&apos;s where their
                passion finds its fullest expression.
              </p>
              <p>
                We deliver a comprehensive suite of landscape construction services: from
                full-scale renovations and new residential builds to commercial developments,
                public spaces, and strata or multi-family projects.
              </p>
              <p>
                Above all, we are a team that listens. We take the time to deeply understand your
                outdoor vision, then apply our craft to make it real — on time, on budget, and
                beyond expectation.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="blueprint-grid h-full border border-border bg-brand-dark p-8 text-white">
              <p className="label-tag text-primary">Our belief</p>
              <p className="mt-5 text-[15px] leading-relaxed text-white/80">
                We hold a simple conviction: that the ground beneath your feet should feel as
                considered as everything above it. Mint Landscape was built on the understanding
                that great outdoor spaces are not accidents. They are the result of real
                listening, honest craft, and a deep respect for the land we work with.
              </p>
              <p className="font-heading mt-5 text-xl leading-snug font-bold">
                &ldquo;That is what it means to build with Mint.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <p className="label-tag text-accent-foreground">What we believe</p>
            <h2 className="font-heading mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              What building with Mint means for your property
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
          <p className="label-tag text-accent-foreground">How we work</p>
        </Reveal>
        <StaggerGroup className="mt-10 grid divide-y divide-border border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {howWeWork.map((v, i) => (
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

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <p className="label-tag text-accent-foreground">Where we work</p>
            <h2 className="font-heading mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Rooted in British Columbia
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-6 flex flex-wrap gap-3">
            {site.serviceAreas.map((area) => (
              <span
                key={area}
                className="border border-border bg-background px-4 py-2 text-[15px] font-semibold"
              >
                {area}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="blueprint-grid relative overflow-hidden bg-brand-dark text-white">
        <div className="hazard-stripes absolute inset-x-0 top-0 h-1.5" aria-hidden />
        <Reveal className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
              Ready to start your project?
            </h2>
            <p className="mt-2 max-w-xl text-white/75">
              Tell us about your outdoor space and we&apos;ll start with a conversation, not a sales
              pitch.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 bg-primary px-6 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Get a Quote
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
