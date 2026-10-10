import type { Metadata } from "next";
import { CalendarCheck, HardHat, MapPin, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/about/page-hero";
import { FeaturedRole } from "@/components/careers/featured-role";
import { RoleCard } from "@/components/careers/role-card";
import { IconTile } from "@/components/icon-tile";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { heroImages, serviceImages } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Landscape construction field roles with Mint Landscape — steady, local work across Vancouver, the North Shore, and the Sea to Sky Corridor.",
};

const whyUs = [
  {
    icon: CalendarCheck,
    title: "Steady, varied work",
    body: "From spring planting season through design-build and winter maintenance, there's always a project in motion.",
  },
  {
    icon: MapPin,
    title: "Local jobs, not camps",
    body: "Our sites are across Vancouver, the North Shore, and the Sea to Sky Corridor. You go home at the end of the day.",
  },
  {
    icon: ShieldCheck,
    title: "Craft-first culture",
    body: "You'll work alongside horticulturists and skilled tradespeople who care about getting it right, with proper safety practices on every site.",
  },
];

const roles = [
  {
    title: "Hardscape Installer",
    type: "Full-time",
    summary: "Paver, natural stone, and retaining wall installation across residential and commercial sites.",
  },
  {
    title: "Irrigation Technician",
    type: "Full-time",
    summary: "Installation, troubleshooting, and seasonal start-up and winterization of irrigation and lighting systems.",
  },
  {
    title: "Crew Lead / Foreman",
    type: "Full-time",
    summary: "Day-to-day oversight of crews, scheduling, and quality on active landscape construction builds.",
  },
  {
    title: "Horticulturist / Gardener",
    type: "Full-time",
    summary: "Planting, soil work, and garden bed care across residential, strata, and commercial properties.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build outdoor spaces people love, with a team that cares about craft."
        description="We're hiring landscape construction crews across Vancouver, the North Shore, and the Sea to Sky Corridor."
        image={heroImages.careers}
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <StaggerGroup className="grid gap-8 sm:grid-cols-3">
          {whyUs.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title}>
              <IconTile tone="primary">
                <Icon className="size-5" aria-hidden />
              </IconTile>
              <h2 className="font-heading mt-4 font-bold">{title}</h2>
              <p className="mt-1.5 text-[15px] text-muted-foreground">{body}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <p className="label-tag text-accent-foreground">Open roles</p>
            <h2 className="font-heading mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Field positions hiring now
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <FeaturedRole
              icon={HardHat}
              title="Equipment Operator"
              type="Full-time — featured"
              summary="Skid steer and mini-excavator operation for grading, retaining wall base prep, and site work across BC properties."
              image={serviceImages["retaining-walls"]}
            />
          </Reveal>

          <StaggerGroup className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((r) => (
              <StaggerItem key={r.title}>
                <RoleCard {...r} />
              </StaggerItem>
            ))}
          </StaggerGroup>

          <p className="mt-10 text-[15px] text-muted-foreground">
            Don&apos;t see a fit?{" "}
            <a
              href={`mailto:${site.email}?subject=General%20Application`}
              className="font-semibold text-primary hover:underline"
            >
              Send us your resume anyway
            </a>
            . We keep applications on file for the next opening.
          </p>
        </div>
      </section>
    </>
  );
}
