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
    src: img("https://images.unsplash.com/photo-1723107638733-16ef49e5d4de"),
    alt: "Aerial view of a construction site with a crane",
  },
  about: {
    src: img("https://images.unsplash.com/photo-1653280662710-1cac52cde6d7"),
    alt: "Construction crew working together on a commercial site",
  },
  careers: {
    src: img("https://images.unsplash.com/photo-1577199001468-44c049e7603f"),
    alt: "Crew members in reflective vests and hard hats",
  },
  projects: {
    src: img("https://images.unsplash.com/photo-1466803136990-7c174b34ff32"),
    alt: "Aerial view of an active construction site",
  },
  services: {
    src: img("https://images.unsplash.com/photo-1770175960229-dd21e8cf950a"),
    alt: "Excavator on a gravel site with mountains in the background",
  },
} as const;

export const serviceImages = {
  "grading-excavation": {
    src: img("https://images.unsplash.com/photo-1630288214173-a119cf823388"),
    alt: "Excavator grading a construction site",
  },
  concrete: {
    src: img("https://images.unsplash.com/photo-1685464196332-ed9c9da28d9a"),
    alt: "Worker pouring and finishing concrete",
  },
  "asphalt-paving": {
    src: img("https://images.unsplash.com/photo-1772852311587-329719989e2b"),
    alt: "Asphalt paving machine laying new pavement",
  },
  drainage: {
    src: img("https://plus.unsplash.com/premium_photo-1661911778005-bda918172dd3"),
    alt: "Installation of storm drains, gutters, and curbs",
  },
  "retaining-walls": {
    src: img("https://images.unsplash.com/photo-1767263318272-01a10851d5d2"),
    alt: "Gabion retaining wall construction",
  },
  "snow-ice-management": {
    src: img("https://images.unsplash.com/photo-1676903826883-cbbd7703f2f4"),
    alt: "Snow plow truck clearing a road",
  },
} as const;

export type ServiceImageKey = keyof typeof serviceImages;
