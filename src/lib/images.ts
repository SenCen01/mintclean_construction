/**
 * Curated, verified-loading Unsplash photos for the site. Unsplash License:
 * free to use commercially, attribution appreciated but not required.
 * Append width/quality params when rendering: `${url}&w=1600&q=80`.
 */

function img(base: string) {
  return `${base}?auto=format&fit=crop`;
}

export const heroImages = {
  home: {
    src: img("https://images.unsplash.com/photo-1635111031688-9b13c0125d12"),
    alt: "A wooded residential property with a mature, professionally landscaped yard",
  },
  about: {
    src: img("https://images.unsplash.com/photo-1788538812809-f22af3a6993a"),
    alt: "Landscaping crew tending to garden beds together",
  },
  careers: {
    src: img("https://images.unsplash.com/photo-1788538812851-9aacd4189fa8"),
    alt: "Crew members working together on garden beds",
  },
  projects: {
    src: img("https://images.unsplash.com/photo-1711110066231-cb235d6e117e"),
    alt: "Aerial view of a beautifully landscaped residential property",
  },
  services: {
    src: img("https://images.unsplash.com/photo-1741362278079-6faa25f13816"),
    alt: "A stone path winding through a lush, mature garden",
  },
} as const;

export const serviceImages = {
  "turf-and-sod": {
    src: img("https://images.unsplash.com/photo-1628340981113-fe1949fe5cc0"),
    alt: "A lush, freshly laid green lawn",
  },
  "retaining-walls": {
    src: img("https://images.unsplash.com/photo-1767263318272-01a10851d5d2"),
    alt: "A stone retaining wall built into a landscaped slope",
  },
  woodworking: {
    src: img("https://images.unsplash.com/photo-1769503236428-7773271074cf"),
    alt: "A wooden pergola covering an outdoor dining area",
  },
  "garden-beds": {
    src: img("https://images.unsplash.com/photo-1779565426321-a4712d0d38e8"),
    alt: "A layered perennial garden border in full bloom",
  },
  "natural-stone": {
    src: img("https://images.unsplash.com/photo-1741362278079-6faa25f13816"),
    alt: "A natural stone path winding through a garden",
  },
  "irrigation-and-lighting": {
    src: img("https://images.unsplash.com/photo-1780772415259-bda4359205a8"),
    alt: "A sprinkler watering a lush lawn in golden evening light",
  },
  "pathways-patios-driveways": {
    src: img("https://images.unsplash.com/photo-1761637823407-ef47925c2714"),
    alt: "A curved paver patio with stone steps and greenery",
  },
  "site-furnishings": {
    src: img("https://images.unsplash.com/photo-1765097732474-973a92d6fb4c"),
    alt: "White outdoor patio furniture surrounded by lush greenery",
  },
  "architectural-concrete": {
    src: img("https://images.unsplash.com/photo-1654722440303-caad3a39431c"),
    alt: "An aerial view of a poured concrete patio with outdoor seating",
  },
} as const;

export type ServiceImageKey = keyof typeof serviceImages;
