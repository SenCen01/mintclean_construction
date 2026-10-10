import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A clipped, angled badge for section/feature icons — replaces plain icons
 * floating in whitespace with a shape that ties into the hazard-stripe /
 * blueprint-corner visual language used across the site.
 */
export function IconTile({
  children,
  tone = "primary",
  className,
}: {
  children: ReactNode;
  tone?: "primary" | "accent" | "dark";
  className?: string;
}) {
  const toneCls = {
    primary: "bg-primary text-primary-foreground",
    accent: "bg-accent text-accent-foreground",
    dark: "bg-brand-dark text-white",
  }[tone];

  return (
    <span
      className={cn(
        "relative inline-flex size-12 shrink-0 items-center justify-center [clip-path:polygon(0_0,100%_0,100%_75%,75%_100%,0_100%)]",
        toneCls,
        className,
      )}
    >
      {children}
    </span>
  );
}
