import { Card } from "@/components/ui/card";

export const InsightsSkeleton = () => {
  return (
    <div className="space-y-4">
      <div className="h-6 w-24 animate-pulse rounded bg-muted" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="flex flex-col gap-3 border-border/60 bg-card p-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 animate-pulse rounded bg-muted" />
              <div className="h-4 w-28 animate-pulse rounded bg-muted" />
            </div>
            <div className="space-y-1.5">
              <div className="h-3 w-full animate-pulse rounded bg-muted/60" />
              <div className="h-3 w-4/5 animate-pulse rounded bg-muted/60" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
