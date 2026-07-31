export const RecentProjectsListSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="h-6 w-32 animate-pulse rounded bg-muted" />
        <div className="h-6 w-20 animate-pulse rounded bg-muted/50" />
      </div>
      
      <div className="flex flex-col gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-lg border border-border/60 bg-card">
            <div className="flex flex-col gap-2">
              <div className="h-4 w-36 animate-pulse rounded bg-muted" />
              <div className="flex items-center gap-2">
                <div className="h-5 w-20 animate-pulse rounded-full bg-muted/70" />
                <div className="h-3 w-24 animate-pulse rounded bg-muted/40" />
              </div>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <div className="h-3 w-8 animate-pulse rounded bg-muted/80" />
              <div className="h-1.5 w-16 animate-pulse rounded-full bg-muted/60" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
