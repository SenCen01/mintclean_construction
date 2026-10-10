import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote from MintClean Civil Construction — site grading, concrete, asphalt, and drainage for commercial properties and strata across Metro Vancouver.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="hazard-stripes absolute inset-x-0 bottom-0 h-1.5" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="inline-flex items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-bold tracking-wide text-primary uppercase">
            Contact
          </p>
          <h1 className="font-heading mt-5 max-w-2xl text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
            Tell us about your site.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/75">
            Already a MintClean client? You don&apos;t need to find a new vendor — just reach out
            through your usual contact and we&apos;ll loop in the civil team directly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_22rem]">
          <div className="rounded-sm border border-border p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-bold">Request a quote</h2>
            <p className="mt-2 text-muted-foreground">
              Fill out a few details about the project and we&apos;ll follow up to schedule a site
              visit.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-sm font-bold tracking-wide text-accent-foreground uppercase">
                Get in touch directly
              </h2>
              <ul className="mt-4 flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <a href={site.phoneHref} className="font-semibold hover:text-primary">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <a href={`mailto:${site.email}`} className="font-semibold hover:text-primary">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <span className="text-[15px] leading-snug">
                    {site.address.line1}
                    <br />
                    {site.address.city} {site.address.postal}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
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

            <div className="rounded-sm border border-border bg-secondary p-6">
              <p className="text-sm text-muted-foreground">
                MintClean Civil Construction operates out of MintClean&apos;s Vancouver office and
                serves the same commercial, strata, and property-management clients MintClean
                already maintains across Metro Vancouver.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
