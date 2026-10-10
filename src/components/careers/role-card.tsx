import { ArrowRight } from "lucide-react";

export function RoleCard({
  title,
  type,
  summary,
}: {
  title: string;
  type: string;
  summary: string;
}) {
  const mailto = `mailto:careers@mintclean.ca?subject=${encodeURIComponent(
    `Application - ${title}`,
  )}`;

  return (
    <div className="flex flex-col rounded-sm border border-border p-6">
      <span className="inline-flex w-fit items-center rounded-sm bg-accent/15 px-2.5 py-1 text-xs font-bold tracking-wide text-accent-foreground uppercase">
        {type}
      </span>
      <h3 className="font-heading mt-3 text-lg font-bold">{title}</h3>
      <p className="mt-2 flex-1 text-[15px] text-muted-foreground">{summary}</p>
      <a
        href={mailto}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
      >
        Apply by email
        <ArrowRight className="size-4" aria-hidden />
      </a>
    </div>
  );
}
