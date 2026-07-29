import type { ReactNode } from "react";

interface PreviewSectionProps {
  title: string;
  description: string;
  children: ReactNode;
}

/** Shared wrapper for each design-system preview section. */
export function PreviewSection({ title, description, children }: PreviewSectionProps) {
  return (
    <section className="space-y-4 border-b border-border pb-8 last:border-b-0">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)]">{children}</div>
    </section>
  );
}
