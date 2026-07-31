import { ProjectHeaderSkeleton } from "./ProjectHeaderSkeleton";
import { ProjectDescriptionSkeleton } from "./ProjectDescriptionSkeleton";
import { ProjectInfoSkeleton } from "./ProjectInfoSkeleton";

export const ProjectDetailsSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Header Banner Skeleton */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-xs">
        <ProjectHeaderSkeleton />
      </div>

      {/* 2-Column Responsive Layout Skeleton */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Content (Left 2 cols) */}
        <div className="space-y-6 lg:col-span-2">
          <ProjectDescriptionSkeleton />
        </div>

        {/* Sidebar Info (Right 1 col) */}
        <div className="space-y-6">
          <ProjectInfoSkeleton />
        </div>
      </div>
    </div>
  );
};
