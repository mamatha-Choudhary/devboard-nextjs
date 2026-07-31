import { ProjectPageHeaderSkeleton } from "@/features/projects/components/ProjectPageHeaderSkeleton";
import { ProjectFiltersBarSkeleton } from "@/features/projects/components/ProjectFiltersBarSkeleton";
import { ProjectListSkeleton } from "@/features/projects/components/ProjectListSkeleton";

export default function ProjectsLoading() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto w-full space-y-6">
      <ProjectPageHeaderSkeleton />
      <ProjectFiltersBarSkeleton />
      <ProjectListSkeleton />
    </div>
  );
}
