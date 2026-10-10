import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Sprout } from "lucide-react";
import { IconTile } from "@/components/icon-tile";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { heroImages, serviceImages } from "@/lib/images";
import { serviceLinks, site } from "@/lib/site";

const trustPoints = [
  {
    icon: Sprout,
    title: "In-house horticulturists & craftsmen",
    body: "Our construction team and in-house horticulturists are driven by a genuine love of design — creating and building is where their passion finds its fullest expression.",
  },
  {
    icon: ShieldCheck,
    title: "Honest, no-shortcuts craft",
    body: "We do not cut corners, we do not overstate what we can deliver, and we do not walk away until the work is something we're proud to put our name to.",
  },
  {
    icon: MapPin,
    title: "Rooted in British Columbia",
    body: "Built on craft, honesty, and a genuine love for the land we work with — across Vancouver, the North Shore, and beyond.",
  },
];

export default function Home() {
  return (
    <>
      <section className="cut-corner-br relative overflow-hidden bg-brand-dark text-white">
        <ParallaxImage
          src={heroImages.home.src}
          alt={heroImages.home.alt}
          priority
          sizes="100vw"
          className="absolute inset-0"
          imageClassName="opacity-45"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/40"
          aria-hidden
        />
        <div className="hazard-stripes absolute inset-x-0 bottom-0 h-1.5" aria-hidden />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-24 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:py-32 lg:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <p className="label-tag text-primary">A Mint company</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-heading mt-5 text-4xl leading-[1.03] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                We craft spaces that endure.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 text-lg text-white/75">
                Skilled across every discipline of landscape construction, we bring vision, depth,
                and permanence to your property — from full-scale renovations and new residential
                builds to commercial developments, public spaces, and strata or multi-family
                projects.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 bg-primary px-6 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/85"
                >
                  Get a Quote
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <a
                  href={site.phoneHref}
                  className="inline-flex h-12 items-center justify-center border border-white/25 px-6 text-base font-semibold text-white hover:bg-white/10"
                >
                  {site.phone}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.3} className="w-full max-w-md shrink-0 lg:ml-auto">
            <div className="blueprint-grid border border-white/10 bg-white/5 p-6">
              <p className="label-tag text-primary">Our Belief</p>
              <ul className="mt-5 flex flex-col gap-5">
                {trustPoints.map(({ icon: Icon, title, body }) => (
                  <li key={title} className="flex items-start gap-4">
                    <IconTile tone="primary" className="size-10">
                      <Icon className="size-5" aria-hidden />
                    </IconTile>
                    <div>
                      <p className="font-heading text-sm font-bold">{title}</p>
                      <p className="mt-1 text-[14px] leading-snug text-white/70">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="label-tag text-accent-foreground">Our Services</p>
          <h2 className="font-heading mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Every outdoor space tells a story.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
            Our construction specialists bring decades of hands-on experience to every project,
            working with precision and care to shape environments that stand apart and stand the
            test of time.
          </p>
        </Reveal>
        <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceLinks.map((s, i) => {
            const img = serviceImages[s.href.split("/").pop() as keyof typeof serviceImages];
            return (
              <StaggerItem key={s.href}>
                <Link
                  href={s.href}
                  className="group relative flex h-full flex-col overflow-hidden border border-border outline-none transition-colors hover:border-primary focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="relative h-36 overflow-hidden">
                    {img && (
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent" aria-hidden />
                    <span className="font-heading absolute bottom-2 left-3 text-3xl font-black text-white/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-lg font-bold">{s.label}</h3>
                    <p className="mt-2 flex-1 text-[15px] text-muted-foreground">{s.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      <section className="blueprint-grid relative overflow-hidden bg-brand-dark text-white">
        <div className="hazard-stripes absolute inset-x-0 top-0 h-1.5" aria-hidden />
        <Reveal className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
              Ready to build something that lasts?
            </h2>
            <p className="mt-2 max-w-xl text-white/70">
              We take the time to understand your outdoor vision, then apply our craft to make it
              real — on time, on budget, and beyond expectation.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 bg-primary px-6 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Get a Quote
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
