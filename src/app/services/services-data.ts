import { Armchair, Droplets, Fence, Flower2, Hammer, Layers, Mountain, Route, Sprout } from "lucide-react";
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
    slug: "turf-and-sod",
    label: "Turf and Sod",
    href: "/services/turf-and-sod",
    icon: Sprout,
    layout: "tiles",
    shortDescription:
      "A well-laid lawn sets the tone for everything around it, prepared and planted to stay lush through every season.",
    metaDescription:
      "Turf and sod installation across Metro Vancouver, the North Shore, and the Sea to Sky Corridor, from Mint Civil Construction.",
    intro:
      "A well-laid lawn sets the tone for everything around it. We prepare your ground thoroughly and lay premium turf or sod suited to your soil, sun exposure and lifestyle, delivering a result that stays lush through every season.",
    included: [
      "Soil preparation, grading, and amendment",
      "Premium sod selection suited to sun exposure and use",
      "New lawn installation for residential and commercial sites",
      "Lawn renovation and overseeding",
      "Post-installation watering and establishment guidance",
    ],
    whoThisIsFor:
      "Homeowners starting fresh after a renovation, and strata or commercial properties that need a durable, good-looking lawn put in right the first time.",
  },
  {
    slug: "retaining-walls",
    label: "Retaining Walls",
    href: "/services/retaining-walls",
    icon: Fence,
    layout: "split",
    shortDescription:
      "A well-built retaining wall shapes the character of your landscape while holding ground in place with confidence.",
    metaDescription:
      "Retaining wall design and construction for sloped BC properties, from Mint Civil Construction.",
    intro:
      "Beyond holding ground in place, a well-built retaining wall shapes the character of your landscape. We construct walls that carry their load with confidence while adding a sense of order and permanence to your outdoor environment.",
    included: [
      "Segmental block and natural stone retaining walls",
      "Gabion wall construction",
      "Tiered walls for sloped and terraced properties",
      "Backfill drainage and weep systems",
      "Engineering coordination on taller or structural walls",
    ],
    whoThisIsFor:
      "Properties with a slope that needs shaping, an aging wall that needs rebuilding, or a design that calls for a wall as a landscape feature, not just a function.",
  },
  {
    slug: "woodworking",
    label: "Woodworking",
    href: "/services/woodworking",
    icon: Hammer,
    layout: "tiles",
    shortDescription:
      "Pergolas, decks, trellises and custom fencing, built with quality timber selected to perform outdoors.",
    metaDescription:
      "Custom outdoor woodworking — pergolas, decks, and fencing — from Mint Civil Construction in BC.",
    intro:
      "From pergolas and privacy screens to decks, trellises and custom fencing, our craftsmen work with quality timber selected to perform outdoors. Every structure we build is designed to feel at home in its setting for years to come.",
    included: [
      "Pergolas and shade structures",
      "Decks and raised platforms",
      "Privacy screens and trellises",
      "Custom fencing and gates",
      "Timber selection and finishing for BC's climate",
    ],
    whoThisIsFor:
      "Homeowners and property managers wanting a built structure — shade, privacy, or definition — that's made to last outdoors, not assembled from a kit.",
  },
  {
    slug: "garden-beds",
    label: "Garden Beds",
    href: "/services/garden-beds",
    icon: Flower2,
    layout: "split",
    shortDescription:
      "Thoughtfully planned garden beds that transform a yard, from perennial borders to raised kitchen gardens.",
    metaDescription:
      "Garden bed design, construction, and planting across Metro Vancouver, from Mint Civil Construction.",
    intro:
      "Thoughtfully planned garden beds can transform even a modest yard into something memorable. We build and plant to suit your aesthetic, from layered perennial borders to raised kitchen gardens, using soil mixes and practices that keep things thriving long after installation.",
    included: [
      "Garden bed layout and construction",
      "Raised bed and kitchen garden builds",
      "Perennial border design and planting",
      "Soil mix selection for long-term plant health",
      "Seasonal planting plans",
    ],
    whoThisIsFor:
      "Homeowners who want a yard that feels designed, not default, and strata or commercial properties looking to upgrade their curb appeal.",
  },
  {
    slug: "natural-stone",
    label: "Natural Stone",
    href: "/services/natural-stone",
    icon: Mountain,
    layout: "tiles",
    shortDescription:
      "Carefully selected stone for patios, pathways, steps and garden accents, fitted with precision.",
    metaDescription:
      "Natural stone patios, pathways, and garden features installed across BC, from Mint Civil Construction.",
    intro:
      "Few materials age as gracefully as natural stone. We source and install carefully selected stone for patios, pathways, steps and garden accents, fitting each piece with precision so the result feels as though it has always belonged there.",
    included: [
      "Natural stone patios and terraces",
      "Stepping-stone and flagstone pathways",
      "Stone garden steps and accents",
      "Dry-stack and mortared stonework",
      "Stone sourcing and material matching",
    ],
    whoThisIsFor:
      "Properties where a built surface needs to look like it belongs to the landscape, not sit on top of it — a common ask on higher-end residential and public-space projects.",
  },
  {
    slug: "irrigation-and-lighting",
    label: "Irrigation and Lighting",
    href: "/services/irrigation-and-lighting",
    icon: Droplets,
    layout: "split",
    shortDescription:
      "Efficient, reliable irrigation and lighting systems that keep your landscape hydrated and looking good after dark.",
    metaDescription:
      "Landscape irrigation and lighting design and installation from Mint Civil Construction, serving BC.",
    intro:
      "A landscape that performs well after dark and stays hydrated without waste is a landscape that endures. We design and install irrigation and lighting systems that are efficient, reliable and genuinely enhance how your property looks and functions around the clock.",
    included: [
      "Irrigation system design and installation",
      "Zone-based drip and spray irrigation",
      "Landscape and accent lighting",
      "Smart controller setup and water-use scheduling",
      "Seasonal system start-up and winterization",
    ],
    whoThisIsFor:
      "Properties that want a lower-maintenance landscape — one that waters itself efficiently and looks intentional from dusk through nightfall.",
  },
  {
    slug: "pathways-patios-driveways",
    label: "Pathways, Patios and Driveways",
    href: "/services/pathways-patios-driveways",
    icon: Route,
    layout: "tiles",
    shortDescription:
      "Outdoor surfaces that hold up to daily use and look great doing it, matched to your property and habits.",
    metaDescription:
      "Pathway, patio, and driveway construction across BC, from Mint Civil Construction.",
    intro:
      "We design and build outdoor surfaces that hold up to daily use and look great doing it. Working closely with you, we select materials and layouts that suit your property, your habits and the surrounding environment for a result that feels complete.",
    included: [
      "Paver and concrete driveways",
      "Walkways and entry pathways",
      "Patios sized and laid out for how you actually use them",
      "Material and pattern selection",
      "Grading and drainage integration",
    ],
    whoThisIsFor:
      "Anyone replacing a worn or undersized surface, or planning a new one as part of a larger landscape build.",
  },
  {
    slug: "site-furnishings",
    label: "Site Furnishings",
    href: "/services/site-furnishings",
    icon: Armchair,
    layout: "split",
    shortDescription:
      "Benches, planters, tables and play elements, sourced and installed to complement your landscape.",
    metaDescription:
      "Outdoor site furnishings sourcing and installation from Mint Civil Construction, serving BC properties.",
    intro:
      "The right outdoor fixtures turn a yard into a place people actually want to spend time. We source and install benches, planters, tables and play elements that are built for outdoor conditions and placed to complement everything around them.",
    included: [
      "Bench and seating installation",
      "Planters and raised containers",
      "Outdoor tables and gathering areas",
      "Play structures and site amenities",
      "Placement planning as part of a broader design",
    ],
    whoThisIsFor:
      "Residential, strata, and public-space projects where the finishing touches — not just the hardscape — make the space work.",
  },
  {
    slug: "architectural-concrete",
    label: "Architectural Concrete Features",
    href: "/services/architectural-concrete",
    icon: Layers,
    layout: "tiles",
    shortDescription:
      "Custom concrete elements — sculpted pathways, statement patios, textured accent walls — poured with confidence.",
    metaDescription:
      "Custom architectural concrete features for landscapes across BC, from Mint Civil Construction.",
    intro:
      "Concrete done well has a confidence that few materials can match. Our team designs and pours custom concrete elements, from sculpted pathways and statement patios to textured accent walls, tailored to the specific character of your space.",
    included: [
      "Custom-poured patios and pathways",
      "Textured and stamped concrete finishes",
      "Architectural accent walls",
      "Integrated colour and finish options",
      "Design coordination with the rest of your landscape build",
    ],
    whoThisIsFor:
      "Projects where a standard paver or stone surface isn't the right fit, and a custom-poured feature is.",
  },
];
