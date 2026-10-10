export const site = {
  name: "MintClean Civil Construction",
  parentName: "Mint Clean Building Maintenance Ltd.",
  shortName: "MintClean Civil",
  legalName: "MintClean Civil Construction, a division of Mint Clean Building Maintenance Ltd.",
  tagline: "The civil construction division of MintClean.",
  description:
    "Site grading, concrete, asphalt, and grounds infrastructure for the commercial properties, strata corporations, and developments MintClean already maintains across Metro Vancouver.",
  phone: "604-800-6161",
  phoneHref: "tel:+16048006161",
  email: "civil@mintclean.ca",
  address: {
    line1: "170-422 Richards St",
    city: "Vancouver, BC",
    postal: "V6B 2Z4",
  },
  hours: [
    { label: "Mon – Fri", value: "7:00 am – 5:00 pm" },
    { label: "Emergency callout", value: "24/7" },
  ],
} as const;

export type ServiceLink = {
  label: string;
  href: string;
  description: string;
};

export const serviceLinks: ServiceLink[] = [
  {
    label: "Site Grading & Excavation",
    href: "/services/grading-excavation",
    description: "Grading, trenching, and site prep for new construction and redevelopment.",
  },
  {
    label: "Concrete Flatwork",
    href: "/services/concrete",
    description: "Sidewalks, curbs, parkade ramps, and equipment pads.",
  },
  {
    label: "Asphalt Paving & Patching",
    href: "/services/asphalt-paving",
    description: "New lots, resurfacing, and pothole and alligator-crack repair.",
  },
  {
    label: "Storm Drainage & Catch Basins",
    href: "/services/drainage",
    description: "Catch basin install and maintenance, French drains, and grading for runoff.",
  },
  {
    label: "Retaining Walls & Site Drainage",
    href: "/services/retaining-walls",
    description: "Segmental and poured retaining structures for sloped and problem sites.",
  },
  {
    label: "Commercial Snow & Ice Management",
    href: "/services/snow-ice-management",
    description: "Plow trucks, de-icing, and seasonal contracts for lots too large for hand crews.",
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
