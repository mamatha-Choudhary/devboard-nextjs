export const ProjectHeaderSkeleton = () => {
  return (
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
  );
};
