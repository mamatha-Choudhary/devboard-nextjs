export const QuickActionsSkeleton = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="h-6 w-32 animate-pulse rounded bg-muted" />
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex h-[104px] w-full flex-col items-start gap-3 rounded-md border border-border/60 p-4"
          >
            <div className="h-9 w-9 animate-pulse rounded-md bg-muted" />
            <div className="space-y-1.5 w-full">
              <div className="h-4 w-24 animate-pulse rounded bg-muted/80" />
              <div className="h-3 w-full animate-pulse rounded bg-muted/60" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
