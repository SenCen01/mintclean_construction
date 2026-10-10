export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      <div className="hazard-stripes absolute inset-x-0 bottom-0 h-1.5" aria-hidden />
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-20 lg:px-8">
        <p className="inline-flex items-center rounded-sm bg-white/10 px-3 py-1 text-xs font-bold tracking-wide text-primary uppercase">
          {eyebrow}
        </p>
        <h1 className="font-heading mt-5 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">{description}</p>
      </div>
    </section>
  );
}
