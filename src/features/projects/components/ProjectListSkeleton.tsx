import { Card } from "@/components/ui/card";

/** Renders 1:1 skeleton placeholders matching ProjectCard 3-column layout. */
export const ProjectListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="flex flex-col justify-between p-5 space-y-4 border-border bg-card">
          <div className="space-y-3">
            {/* Header: Status badge & Favorite star */}
            <div className="flex items-center justify-between">
              <div className="h-5 w-20 animate-pulse rounded-full bg-muted/80" />
              <div className="h-6 w-6 animate-pulse rounded-md bg-muted/60" />
            </div>

            {/* Title & Slug */}
            <div className="space-y-1.5 pt-1">
              <div className="h-5 w-3/4 animate-pulse rounded-md bg-muted" />
              <div className="h-3.5 w-24 animate-pulse rounded-full bg-muted/60" />
            </div>

            {/* Description lines */}
            <div className="space-y-1.5 pt-1">
              <div className="h-3.5 w-full animate-pulse rounded bg-muted/70" />
              <div className="h-3.5 w-4/5 animate-pulse rounded bg-muted/70" />
            </div>
          </div>

          {/* Footer: Owner avatar/name & Updated date */}
          <div className="flex items-center justify-between pt-3 border-t border-border/60">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 animate-pulse rounded-full bg-muted" />
              <div className="h-3.5 w-24 animate-pulse rounded bg-muted/80" />
            </div>
            <div className="h-3 w-16 animate-pulse rounded bg-muted/60" />
          </div>
        </Card>
      ))}
    </div>
  );
};
