import { Card } from "@/components/ui/card";

export const DashboardStatsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i} className="p-5 border-border bg-card">
          <div className="flex items-center justify-between pb-2">
            <div className="h-4 w-24 animate-pulse rounded bg-muted" />
            <div className="h-4 w-4 animate-pulse rounded bg-muted/60" />
          </div>
          <div className="flex flex-col gap-1.5 mt-2">
            <div className="h-8 w-12 animate-pulse rounded bg-muted/80" />
            <div className="h-3 w-32 animate-pulse rounded bg-muted/50" />
          </div>
        </Card>
      ))}
    </div>
  );
};
