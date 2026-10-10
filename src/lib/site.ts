export const site = {
  name: "MintClean Civil Construction",
  shortName: "MintClean Civil",
  legalName: "MintClean Civil Construction, operated by Mint Group Landscaping & Maintenance Inc.",
  tagline: "We craft spaces that endure.",
  description:
    "Skilled across every discipline of landscape construction, we bring vision, depth, and permanence to your property — serving Vancouver, the North Shore, and the Sea to Sky Corridor.",
  mission: "Shaping BC one property at a time.",
  phone: "672-336-2753",
  phoneHref: "tel:+16723362753",
  email: "info@mintlandscape.ca",
  address: {
    line1: "9780 197B St, Unit #201",
    city: "Langley Township, BC",
    postal: "V1M 3G3",
  },
  hours: [{ label: "Mon – Fri", value: "7:00 am – 5:00 pm" }],
  serviceAreas: [
    "Vancouver",
    "West Vancouver",
    "North Vancouver",
    "Burnaby",
    "Richmond",
    "Metro Vancouver",
    "Fraser Valley",
    "Vancouver Island",
    "Gulf Islands",
    "Discovery Islands",
  ],
} as const;

export type ServiceLink = {
  label: string;
  href: string;
  description: string;
};

export const serviceLinks: ServiceLink[] = [
  {
    label: "Turf and Sod",
    href: "/services/turf-and-sod",
    description:
      "A well-laid lawn sets the tone for everything around it. We prepare your ground thoroughly and lay premium turf or sod suited to your soil, sun exposure and lifestyle.",
  },
  {
    label: "Retaining Walls",
    href: "/services/retaining-walls",
    description:
      "Beyond holding ground in place, a well-built retaining wall shapes the character of your landscape, adding a sense of order and permanence to your outdoor environment.",
  },
  {
    label: "Woodworking",
    href: "/services/woodworking",
    description:
      "From pergolas and privacy screens to decks, trellises and custom fencing, our craftsmen work with quality timber selected to perform outdoors for years to come.",
  },
  {
    label: "Garden Beds",
    href: "/services/garden-beds",
    description:
      "Thoughtfully planned garden beds can transform even a modest yard into something memorable, from layered perennial borders to raised kitchen gardens.",
  },
  {
    label: "Natural Stone",
    href: "/services/natural-stone",
    description:
      "Few materials age as gracefully as natural stone. We source and install carefully selected stone for patios, pathways, steps and garden accents.",
  },
  {
    label: "Irrigation and Lighting",
    href: "/services/irrigation-and-lighting",
    description:
      "A landscape that performs well after dark and stays hydrated without waste is a landscape that endures — efficient, reliable systems designed in.",
  },
  {
    label: "Pathways, Patios and Driveways",
    href: "/services/pathways-patios-driveways",
    description:
      "We design and build outdoor surfaces that hold up to daily use and look great doing it, selecting materials and layouts suited to your property.",
  },
  {
    label: "Site Furnishings",
    href: "/services/site-furnishings",
    description:
      "The right outdoor fixtures turn a yard into a place people actually want to spend time — benches, planters, tables and play elements built for outdoor conditions.",
  },
  {
    label: "Architectural Concrete Features",
    href: "/services/architectural-concrete",
    description:
      "Concrete done well has a confidence that few materials can match. We design and pour custom elements, from sculpted pathways to textured accent walls.",
  },
];

export const headerNav = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const companyLinks = [
  { label: "About MintClean Civil", href: "/about" },
  { label: "Our Projects", href: "/projects" },
  { label: "MintClean Building Maintenance", href: "https://mintclean.ca" },
  { label: "Careers", href: "/careers" },
];
