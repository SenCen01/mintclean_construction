import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { heroImages, serviceImages } from "@/lib/images";
import { servicesData } from "./services-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Turf, retaining walls, woodworking, garden beds, natural stone, irrigation and lighting, hardscaping, and custom concrete from Mint Civil Construction.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="cut-corner-br relative overflow-hidden bg-brand-dark text-white">
        <ParallaxImage
          src={heroImages.services.src}
          alt={heroImages.services.alt}
          priority
          sizes="100vw"
          className="absolute inset-0"
          imageClassName="opacity-40"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/50"
          aria-hidden
        />
        <div className="hazard-stripes absolute inset-x-0 bottom-0 h-1.5" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-28 lg:px-8">
          <Reveal>
            <p className="label-tag text-accent">Services</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-heading mt-5 text-3xl leading-[1.08] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Every discipline of landscape construction, under one roof
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg text-white/75">
              Our construction team and in-house horticulturists are driven by a genuine love of
              design. We deliver a comprehensive suite of landscape construction services, from
              full-scale renovations and new residential builds to commercial and strata projects.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((s, i) => {
            const img = serviceImages[s.slug as keyof typeof serviceImages];
            return (
              <StaggerItem key={s.href}>
                <Link
                  href={s.href}
                  className="group relative flex h-full flex-col overflow-hidden border border-border outline-none transition-colors hover:border-primary focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent" aria-hidden />
                    <span className="font-heading absolute bottom-2 left-3 text-3xl font-black text-white/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-heading text-lg font-bold">{s.label}</h2>
                    <p className="mt-2 flex-1 text-[15px] text-muted-foreground">{s.shortDescription}</p>
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
    </>
  );
}
