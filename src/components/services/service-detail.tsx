import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconTile } from "@/components/icon-tile";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { serviceImages } from "@/lib/images";
import type { ServiceDetail } from "@/app/services/services-data";
import { servicesData } from "@/app/services/services-data";

export function ServiceDetailView({ service }: { service: ServiceDetail }) {
  const index = servicesData.findIndex((s) => s.slug === service.slug) + 1;
  const image = serviceImages[service.slug as keyof typeof serviceImages];
  const Icon = service.icon;

  return (
    <>
      <section className="cut-corner-br relative overflow-hidden bg-brand-dark text-white">
        <ParallaxImage
          src={image.src}
          alt={image.alt}
          priority
          sizes="100vw"
          className="absolute inset-0"
          imageClassName="opacity-40"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/85 to-brand-dark/30"
          aria-hidden
        />
        <div className="hazard-stripes absolute inset-x-0 bottom-0 h-1.5" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-28 lg:px-8">
          <Reveal>
            <p className="label-tag text-accent">{`Service ${String(index).padStart(2, "0")}`}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-heading mt-5 text-3xl leading-[1.08] font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {service.label}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-white/75">{service.intro}</p>
          </Reveal>
        </div>
      </section>

      {service.layout === "tiles" ? (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="label-tag text-accent-foreground">What&apos;s included</p>
            <h2 className="font-heading mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Scope of work
            </h2>
          </Reveal>
          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.included.map((item) => (
              <StaggerItem key={item}>
                <div className="flex h-full items-start gap-4 border border-border p-5">
                  <IconTile tone="primary" className="size-10">
                    <Icon className="size-5" aria-hidden />
                  </IconTile>
                  <p className="pt-1 text-[15px] leading-snug text-foreground">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal className="blueprint-grid mt-12 bg-brand-dark p-8 text-white">
            <p className="label-tag text-primary">Who this is for</p>
            <p className="mt-3 max-w-3xl text-[17px] leading-relaxed text-white/85">
              {service.whoThisIsFor}
            </p>
          </Reveal>
        </section>
      ) : (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <Reveal className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-6 border-l-2 border-primary pl-5">
                <p className="label-tag text-accent-foreground">Who this is for</p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {service.whoThisIsFor}
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="label-tag text-accent-foreground">What&apos;s included</p>
                <h2 className="font-heading mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Scope of work
                </h2>
              </Reveal>
              <StaggerGroup className="mt-8 flex flex-col gap-4">
                {service.included.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-4 border-b border-border py-4 last:border-b-0">
                      <IconTile tone="accent" className="size-9">
                        <Icon className="size-4" aria-hidden />
                      </IconTile>
                      <p className="pt-1 text-[15px] leading-snug text-foreground">{item}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </section>
      )}

      <section className="blueprint-grid relative overflow-hidden bg-brand-dark text-white">
        <div className="hazard-stripes absolute inset-x-0 top-0 h-1.5" aria-hidden />
        <Reveal className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
              Ready to talk about your site?
            </h2>
            <p className="mt-2 max-w-xl text-white/70">
              Tell us what you&apos;re dealing with and we&apos;ll have a crew lead reach out.
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
