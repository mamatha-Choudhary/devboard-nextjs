import { ProjectDetailsSkeleton } from "@/features/projects/components/ProjectDetailsSkeleton";

export default function ProjectDetailLoading() {
  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto w-full space-y-6">
      {/* Back to Projects link skeleton */}
      <div className="h-4 w-32 animate-pulse rounded-md bg-muted" />

      <ProjectDetailsSkeleton />
    </div>
  );
}
