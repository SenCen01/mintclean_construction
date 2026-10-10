import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, HardHat, Landmark } from "lucide-react";
import { IconTile } from "@/components/icon-tile";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { heroImages, serviceImages } from "@/lib/images";

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
    image: serviceImages.drainage,
  },
  {
    icon: Building2,
    title: "Strata & commercial parking lot projects",
    body: "Lot resurfacing, restriping, drainage correction, and retaining wall work for the strata corporations and commercial plazas MintClean's maintenance teams already serve.",
    image: serviceImages["asphalt-paving"],
  },
  {
    icon: Landmark,
    title: "New development sitework",
    body: "Grading, excavation, and underground drainage coordination for developers bringing a new commercial or multi-family site out of the ground.",
    image: serviceImages["grading-excavation"],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="cut-corner-br relative overflow-hidden bg-brand-dark text-white">
        <ParallaxImage
          src={heroImages.projects.src}
          alt={heroImages.projects.alt}
          priority
          sizes="100vw"
          className="absolute inset-0"
          imageClassName="opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/92 to-brand-dark/55" aria-hidden />
        <div className="hazard-stripes absolute inset-x-0 bottom-0 h-1.5" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <p className="label-tag text-primary">Now accepting projects</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-heading mt-5 max-w-3xl text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
              MintClean Civil Construction is taking on sitework across Metro Vancouver.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              As a new division, we don&apos;t have a long project archive to show you yet — what we
              do have is the accounts, the office, and the client relationships MintClean has built
              across Metro Vancouver for years. Here&apos;s the kind of work we&apos;re equipped to take
              on from day one.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-10 flex gap-10 border-t border-white/10 pt-8">
            <div>
              <p className="font-heading text-4xl font-black text-primary">
                <AnimatedCounter value={6} />
              </p>
              <p className="label-tag mt-1 text-white/60">Service lines</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-black text-primary">
                <AnimatedCounter value={1} />
              </p>
              <p className="label-tag mt-1 text-white/60">Shared office &amp; accounts team</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <StaggerGroup className="flex flex-col gap-16">
          {tiers.map((tier, i) => (
            <StaggerItem key={tier.title}>
              <div
                className={`flex flex-col gap-8 lg:items-center lg:gap-14 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden lg:w-[45%]">
                  <Image
                    src={tier.image.src}
                    alt={tier.image.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                  <span className="font-heading absolute right-0 bottom-0 bg-brand-dark px-4 py-2 text-2xl font-black text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="lg:w-[55%]">
                  <IconTile tone={i === 1 ? "accent" : "primary"}>
                    <tier.icon className="size-5" aria-hidden />
                  </IconTile>
                  <h2 className="font-heading mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {tier.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                    {tier.body}
                  </p>
                </div>
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
              Have a site that needs work?
            </h2>
            <p className="mt-2 max-w-xl text-white/70">
              Tell us about the project and we&apos;ll schedule a site visit — backed by the same
              team and office as MintClean Building Maintenance.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 bg-primary px-6 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Request a quote
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
