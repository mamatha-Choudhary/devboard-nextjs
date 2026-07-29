export default function Loading() {
  return (
    <div className="space-y-4" aria-label="Loading project details">
      <div className="h-8 w-48 animate-pulse rounded bg-muted" />
      <div className="h-4 w-64 animate-pulse rounded bg-muted" />
      <div className="h-4 w-40 animate-pulse rounded bg-muted" />
    </div>
  );
};
