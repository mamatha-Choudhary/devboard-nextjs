export const ProjectDescriptionSkeleton = () => {
  return (
    <div className="rounded-xl border border-border/40 bg-muted/20 p-5 space-y-3">
      <div className="h-4 w-32 animate-pulse rounded bg-muted" />
      <div className="space-y-1.5">
        <div className="h-3.5 w-full animate-pulse rounded bg-muted/70" />
        <div className="h-3.5 w-4/5 animate-pulse rounded bg-muted/70" />
      </div>
    </div>
  );
};
