import { Card } from "@/components/ui/card";

export const ActivityFeedSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-6 w-32 animate-pulse rounded bg-muted" />
      <Card className="p-4 border-border/60 bg-card">
        <div className="flex flex-col divide-y divide-border/40">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-start gap-3 py-3">
              <div className="h-8 w-8 shrink-0 animate-pulse rounded-full bg-muted" />
              <div className="flex flex-col gap-1.5 w-full">
                <div className="h-4 w-3/4 animate-pulse rounded bg-muted/80" />
                <div className="h-3 w-16 animate-pulse rounded bg-muted/60" />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
