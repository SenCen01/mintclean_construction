import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { IconTile } from "@/components/icon-tile";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a quote from MintClean Civil Construction — landscape construction for residential, strata, and commercial properties across BC.",
};

export default function ContactPage() {
  return (
    <>
      <section className="cut-corner-br blueprint-grid relative overflow-hidden bg-brand-dark text-white">
        <div className="hazard-stripes absolute inset-x-0 bottom-0 h-1.5" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal>
            <p className="label-tag text-primary">Contact</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-heading mt-5 max-w-2xl text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
              Tell us about your site.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-lg text-white/75">
              Residential or commercial, a small refresh or a full renovation — tell us about your
              property and we&apos;ll take it from there.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_22rem]">
          <Reveal className="border border-border p-6 sm:p-8">
            <p className="label-tag text-accent-foreground">Get a quote</p>
            <h2 className="font-heading mt-3 text-2xl font-bold">Get a Quote</h2>
            <p className="mt-2 text-muted-foreground">
              Fill out a few details about the project and we&apos;ll follow up to schedule a site
              visit.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-8">
            <div>
              <p className="label-tag text-accent-foreground">Get in touch directly</p>
              <ul className="mt-5 flex flex-col gap-5">
                <li className="flex items-center gap-4">
                  <IconTile tone="primary">
                    <Phone className="size-5" aria-hidden />
                  </IconTile>
                  <a href={site.phoneHref} className="font-semibold hover:text-primary">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <IconTile tone="primary">
                    <Mail className="size-5" aria-hidden />
                  </IconTile>
                  <a href={`mailto:${site.email}`} className="font-semibold hover:text-primary">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <IconTile tone="primary">
                    <MapPin className="size-5" aria-hidden />
                  </IconTile>
                  <span className="text-[15px] leading-snug">
                    {site.address.line1}
                    <br />
                    {site.address.city} {site.address.postal}
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <IconTile tone="accent">
                    <Clock className="size-5" aria-hidden />
                  </IconTile>
                  <dl className="flex flex-col gap-1 text-[15px]">
                    {site.hours.map((h) => (
                      <div key={h.label} className="flex gap-2">
                        <dt className="text-muted-foreground">{h.label}:</dt>
                        <dd className="font-semibold">{h.value}</dd>
                      </div>
                    ))}
                  </dl>
                </li>
              </ul>
            </div>

            <div className="blueprint-grid border border-border bg-secondary p-6">
              <p className="label-tag text-accent-foreground">Where we work</p>
              <p className="mt-3 text-sm text-muted-foreground">
                {site.serviceAreas.join(", ")}.
              </p>
            </div>

            <div className="border border-border p-6">
              <p className="text-sm text-muted-foreground">
                MintClean Civil Construction is part of the MintClean family of companies.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
