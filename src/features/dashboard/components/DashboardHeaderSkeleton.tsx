export const DashboardHeaderSkeleton = () => {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="h-8 w-64 animate-pulse rounded-md bg-muted sm:h-9 sm:w-80" />
      <div className="h-4 w-72 animate-pulse rounded-md bg-muted/60 sm:w-96" />
    </div>
  );
};
