export const ProjectFiltersBarSkeleton = () => {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-4 shadow-xs">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1 space-y-1.5">
          <div className="h-4 w-16 animate-pulse rounded bg-muted/60" />
          <div className="h-10 w-full animate-pulse rounded-lg bg-muted/80" />
        </div>
        <div className="space-y-1.5">
          <div className="h-4 w-14 animate-pulse rounded bg-muted/60" />
          <div className="h-10 w-36 animate-pulse rounded-lg bg-muted/80" />
        </div>
        <div className="space-y-1.5">
          <div className="h-4 w-16 animate-pulse rounded bg-muted/60" />
          <div className="h-10 w-28 animate-pulse rounded-lg bg-muted/80" />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2 border-t border-border/60 pt-3 sm:flex-row sm:items-center sm:justify-between min-h-[36px]">
        <div className="h-4 w-40 animate-pulse rounded bg-muted/70" />
        <div className="h-4 w-24 animate-pulse rounded bg-muted/50" />
      </div>
    </div>
  );
};
