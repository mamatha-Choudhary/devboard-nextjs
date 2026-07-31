export const ProjectPageHeaderSkeleton = () => {
  return (
    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
      <div className="space-y-1.5">
        <div className="h-8 w-36 animate-pulse rounded-md bg-muted" />
        <div className="h-4 w-72 animate-pulse rounded-md bg-muted/60" />
      </div>
      <div className="h-6 w-20 animate-pulse rounded-full bg-muted/80" />
    </div>
  );
};
