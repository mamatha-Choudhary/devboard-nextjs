export const ProjectInfoSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
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
  );
};
