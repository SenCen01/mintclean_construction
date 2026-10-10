import type { Metadata } from "next";
import { CalendarCheck, MapPin, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/about/page-hero";
import { RoleCard } from "@/components/careers/role-card";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Field roles with MintClean Civil Construction — steady, local work across Metro Vancouver.",
};

const whyUs = [
  {
    icon: CalendarCheck,
    title: "Steady, year-round work",
    body: "Our client base is the same commercial and strata portfolio MintClean already services, so the work doesn't disappear between big projects.",
  },
  {
    icon: MapPin,
    title: "Local jobs, not camps",
    body: "Our sites are across Metro Vancouver. You go home at the end of the day — no fly-in camp rotations.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-first culture",
    body: "WorkSafeBC-registered safety program, proper PPE, and site supervisors who take hazard assessments seriously.",
  },
];

const roles = [
  {
    title: "Equipment Operator",
    type: "Full-time",
    summary:
      "Excavator, skid steer, and compact loader operation for grading, trenching, and site-prep work.",
  },
  {
    title: "Concrete Finisher",
    type: "Full-time",
    summary: "Flatwork finishing for sidewalks, curbs, pads, and parkade ramps on commercial sites.",
  },
  {
    title: "Labourer / Groundskeeper",
    type: "Full-time",
    summary: "General site labour, traffic control, and groundskeeping support across active job sites.",
  },
  {
    title: "Site Supervisor",
    type: "Full-time",
    summary: "Day-to-day oversight of crews, scheduling, and safety compliance on commercial civil sites.",
  },
  {
    title: "Class 1 / CDL Driver",
    type: "Seasonal — winter",
    summary: "Snow-plow and de-icing routes for commercial lots during winter contract season.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the ground floor of a new MintClean division."
        description="We're hiring field crews for commercial and strata sitework across Metro Vancouver — backed by the stability of an established company."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {whyUs.map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <Icon className="size-6 text-primary" aria-hidden />
              <h2 className="font-heading mt-3 font-bold">{title}</h2>
              <p className="mt-1.5 text-[15px] text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl">
            Open roles
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <RoleCard key={r.title} {...r} />
            ))}
          </div>
          <p className="mt-10 text-[15px] text-muted-foreground">
            Don&apos;t see a fit?{" "}
            <a
              href="mailto:careers@mintclean.ca?subject=General%20Application%20-%20Civil%20Construction"
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
