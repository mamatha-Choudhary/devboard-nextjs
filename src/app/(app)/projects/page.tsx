import { ProjectEmptyState } from "@/features/projects/components/ProjectEmptyState";
import { ProjectFiltersBar } from "@/features/projects/components/ProjectFiltersBar";
import { ProjectList } from "@/features/projects/components/ProjectList";
import { getProjects } from "@/features/projects/services/project.service";

interface ProjectsPageProps {
  searchParams: Promise<{
    search?: string | string[];
    status?: string | string[];
    favorites?: string | string[];
  }>;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const search = Array.isArray(params.search) ? params.search[0] : params.search;
  const status = Array.isArray(params.status) ? params.status[0] : params.status;
  const favorites = Array.isArray(params.favorites)
    ? params.favorites[0]
    : params.favorites;

  const projects = await getProjects({
    search,
    status: status as "All" | undefined,
    favoritesOnly: favorites === "true",
  });

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <ProjectFiltersBar
          search={search}
          status={status}
          favorites={favorites === "true"}
        />
      </div>

      {projects.length > 0 ? (
        <ProjectList projects={projects} />
      ) : (
        <ProjectEmptyState />
      )}
    </div>
  );
}
