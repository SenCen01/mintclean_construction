import { CloudSnow, Droplets, Fence, Layers, Mountain, Route } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceDetail = {
  slug: string;
  label: string;
  href: string;
  shortDescription: string;
  metaDescription: string;
  intro: string;
  included: string[];
  whoThisIsFor: string;
  icon: LucideIcon;
  layout: "tiles" | "split";
};

export const servicesData: ServiceDetail[] = [
  {
    slug: "grading-excavation",
    label: "Site Grading & Excavation",
    href: "/services/grading-excavation",
    icon: Mountain,
    layout: "tiles",
    shortDescription: "Grading, trenching, and site prep for new construction and redevelopment.",
    metaDescription:
      "Site grading and excavation for Metro Vancouver commercial properties and redevelopment projects, from MintClean Civil Construction.",
    intro:
      "Before anything else gets built, the site has to be moved, cut, and compacted to spec. Our grading and excavation crews handle the earthwork that redevelopment, utility work, and new concrete or asphalt all depend on.",
    included: [
      "Rough and finish grading to engineered drawings",
      "Trenching for utility and drainage lines",
      "Cut-and-fill earthwork with compaction testing",
      "Site prep and demolition debris clearing for small commercial lots",
      "Erosion and sediment control during active earthwork",
    ],
    whoThisIsFor:
      "Property managers and developers preparing a site for new paving, a building addition, or a utility upgrade — the same commercial and strata clients MintClean's maintenance crews already serve, now needing work our indoor teams don't do.",
  },
  {
    slug: "concrete",
    label: "Concrete Flatwork",
    href: "/services/concrete",
    icon: Layers,
    layout: "split",
    shortDescription: "Sidewalks, curbs, parkade ramps, and equipment pads.",
    metaDescription:
      "Commercial concrete flatwork — sidewalks, curbs, parkade ramps, and equipment pads — from MintClean Civil Construction in Metro Vancouver.",
    intro:
      "Cracked sidewalks and spalling curbs are a liability as much as an eyesore. We pour and repair the concrete flatwork that keeps a commercial property safe and presentable, from a single curb repair to a full parkade ramp.",
    included: [
      "Sidewalks, curbs, and gutters",
      "Parkade ramps and entry aprons",
      "Equipment and garbage-enclosure pads",
      "Control-joint sawcutting and spall repair",
      "Stamped and broom-finish flatwork for common areas",
    ],
    whoThisIsFor:
      "Strata corporations and commercial building owners dealing with tripping-hazard sidewalks, aging parkade ramps, or a new pad needed for a mechanical unit or garbage enclosure.",
  },
  {
    slug: "asphalt-paving",
    label: "Asphalt Paving & Patching",
    href: "/services/asphalt-paving",
    icon: Route,
    layout: "tiles",
    shortDescription: "New lots, resurfacing, and pothole and alligator-crack repair.",
    metaDescription:
      "Commercial asphalt paving, resurfacing, and pothole repair for Metro Vancouver parking lots, from MintClean Civil Construction.",
    intro:
      "A parking lot is usually the first thing a tenant or customer sees. We pave, patch, and restripe commercial lots so they stay smooth, safe, and accessible-compliant year-round.",
    included: [
      "Parking lot resurfacing and overlays",
      "Pothole and alligator-crack repair",
      "Line striping and accessible-stall marking",
      "Speed bump and wheel-stop installation",
      "Seal coating for lot longevity",
    ],
    whoThisIsFor:
      "Commercial plaza owners and property managers whose lot has gone past the point hand-patching can fix, and strata corporations budgeting for a lot resurface.",
  },
  {
    slug: "drainage",
    label: "Storm Drainage & Catch Basins",
    href: "/services/drainage",
    icon: Droplets,
    layout: "split",
    metaDescription:
      "Catch basin installation, maintenance, and site drainage for Metro Vancouver commercial properties, from MintClean Civil Construction.",
    shortDescription: "Catch basin install and maintenance, French drains, and grading for runoff.",
    intro:
      "Metro Vancouver's rain doesn't forgive poor drainage. We install and maintain the catch basins, French drains, and site grading that keep stormwater off walkways, out of parkades, and away from foundations.",
    included: [
      "Catch basin installation and replacement",
      "Catch basin cleaning and sediment removal",
      "French drain and perimeter drain installation",
      "Grading corrections to redirect surface runoff",
      "Municipal storm connection coordination",
    ],
    whoThisIsFor:
      "Properties with recurring pooling, parkade seepage, or a catch basin that's been flagged during a building envelope or insurance inspection.",
  },
  {
    slug: "retaining-walls",
    label: "Retaining Walls & Site Drainage",
    href: "/services/retaining-walls",
    icon: Fence,
    layout: "split",
    metaDescription:
      "Retaining wall construction and site drainage for sloped commercial properties in Metro Vancouver, from MintClean Civil Construction.",
    shortDescription: "Segmental and poured retaining structures for sloped and problem sites.",
    intro:
      "Metro Vancouver's terrain means a lot of commercial sites are built on a slope. We design and build the retaining structures that hold that grade, and the drainage behind them that keeps the wall doing its job for decades.",
    included: [
      "Segmental block retaining walls",
      "Poured concrete retaining structures",
      "Geogrid-reinforced walls for taller grade changes",
      "Backfill drainage and weep-hole systems",
      "Coordination with a geotechnical engineer on larger or structural walls",
    ],
    whoThisIsFor:
      "Properties with a failing or leaning wall, a slope that's eroding onto a walkway or parking area, or a redevelopment that needs a new grade change held back.",
  },
  {
    slug: "snow-ice-management",
    label: "Commercial Snow & Ice Management",
    href: "/services/snow-ice-management",
    icon: CloudSnow,
    layout: "tiles",
    metaDescription:
      "Plow trucks and bulk de-icing contracts for large commercial parking lots in Metro Vancouver, from MintClean Civil Construction.",
    shortDescription: "Plow trucks, de-icing, and seasonal contracts for lots too large for hand crews.",
    intro:
      "MintClean's hand crews already clear sidewalks and entrances across Metro Vancouver every winter. This is the heavier end of that same job: plow trucks and bulk de-icing for lots that are simply too big to clear by hand.",
    included: [
      "Seasonal plow-truck contracts for large parking lots",
      "Bulk salt and liquid de-icing application",
      "Priority response for fire lanes and accessible routes",
      "24/7 storm monitoring and callout during active snowfall",
      "Coordination with MintClean's hand crews for entrances and walkways on the same site",
    ],
    whoThisIsFor:
      "Commercial plazas, large strata developments, and multi-building sites where a hand crew can clear the sidewalks but the lot itself needs a truck — a natural add-on for properties already on a MintClean snow removal contract.",
  },
];
