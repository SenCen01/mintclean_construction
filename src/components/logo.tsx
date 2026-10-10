import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <span className={cn("inline-flex shrink-0 flex-col self-start leading-none", className)}>
      <span
        className={cn(
          "font-heading text-[1.6em] font-extrabold tracking-tight text-primary",
        )}
      >
        Mint
      </span>
      <span
        className={cn(
          "mt-1 text-[0.42em] font-bold tracking-[0.25em] uppercase",
          tone === "dark" ? "text-accent" : "text-accent-foreground",
        )}
      >
        Civil Construction
      </span>
    </span>
  );
}
