import { ParallaxImage } from "@/components/motion/parallax-image";
import { Reveal } from "@/components/motion/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
}) {
  return (
    <section className="cut-corner-br relative overflow-hidden bg-brand-dark text-white">
      <ParallaxImage
        src={image.src}
        alt={image.alt}
        priority
        sizes="100vw"
        className="absolute inset-0"
        imageClassName="opacity-40"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/85 to-brand-dark/50"
        aria-hidden
      />
      <div className="hazard-stripes absolute inset-x-0 bottom-0 h-1.5" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-28 lg:px-8">
        <Reveal>
          <p className="label-tag text-primary">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-heading mt-5 max-w-2xl text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg text-white/75">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
