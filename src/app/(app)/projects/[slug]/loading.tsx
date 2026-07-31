import { Card } from "@/components/ui/card";

export default function ProjectDetailLoading() {
  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto w-full space-y-6">
      {/* Back to Projects link skeleton */}
      <div className="h-4 w-32 animate-pulse rounded-md bg-muted" />

      {/* Main Project Details Card Skeleton */}
      <Card className="p-6 md:p-8 space-y-6 border-border bg-card">
        {/* Header: Title, Status Badge, Owner & Favorite Toggle */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-6 border-b border-border/60">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 animate-pulse rounded-full bg-primary/10 border border-primary/20" />
            <div className="space-y-2">
              <div className="h-7 w-64 animate-pulse rounded-md bg-muted" />
              <div className="flex items-center gap-2">
                <div className="h-4 w-28 animate-pulse rounded-full bg-muted/70" />
                <div className="h-5 w-24 animate-pulse rounded-full bg-muted/80" />
              </div>
            </div>
          </div>
          <div className="h-9 w-9 animate-pulse rounded-md bg-muted" />
        </div>

        {/* Description Box Skeleton */}
        <div className="rounded-xl border border-border/40 bg-muted/20 p-5 space-y-3">
          <div className="h-4 w-32 animate-pulse rounded bg-muted" />
          <div className="space-y-1.5">
            <div className="h-3.5 w-full animate-pulse rounded bg-muted/70" />
            <div className="h-3.5 w-4/5 animate-pulse rounded bg-muted/70" />
          </div>
        </div>

        {/* 2-Column Details Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg border border-border/40 p-3.5 bg-muted/20"
            >
              <div className="h-4 w-4 animate-pulse rounded bg-muted" />
              <div className="space-y-1.5 flex-1">
                <div className="h-3 w-20 animate-pulse rounded bg-muted/60" />
                <div className="h-4 w-36 animate-pulse rounded bg-muted" />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
