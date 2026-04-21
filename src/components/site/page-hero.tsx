import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  children: ReactNode;
  className?: string;
};

export function PageHero({ children, className }: PageHeroProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-b border-[var(--border)] bg-gradient-to-b from-[var(--surface)] to-[var(--background)]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[length:48px_48px] bg-grid-soft bg-[0_0] opacity-60"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {children}
      </div>
    </div>
  );
}
