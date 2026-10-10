import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { IconTile } from "@/components/icon-tile";
import type { LucideIcon } from "lucide-react";

export function FeaturedRole({
  icon: Icon,
  title,
  type,
  summary,
  image,
}: {
  icon: LucideIcon;
  title: string;
  type: string;
  summary: string;
  image: { src: string; alt: string };
}) {
  const mailto = `mailto:careers@mintclean.ca?subject=${encodeURIComponent(
    `Application - ${title}`,
  )}`;

  return (
    <div className="grid overflow-hidden border border-border sm:grid-cols-2">
      <div className="relative h-48 sm:h-full">
        <Image src={image.src} alt={image.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" aria-hidden />
      </div>
      <div className="flex flex-col justify-center gap-4 p-8">
        <IconTile tone="accent">
          <Icon className="size-5" aria-hidden />
        </IconTile>
        <div>
          <span className="label-tag text-accent-foreground">{type}</span>
          <h3 className="font-heading mt-2 text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-[15px] text-muted-foreground">{summary}</p>
        </div>
        <a
          href={mailto}
          className="inline-flex w-fit items-center gap-2 bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/85"
        >
          Apply by email
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </div>
  );
}
