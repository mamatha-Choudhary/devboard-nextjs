import type { Metadata } from "next";
import { ProjectEmptyState } from "@/features/projects/components/ProjectEmptyState";
import { ProjectFiltersBar } from "@/features/projects/components/ProjectFiltersBar";
import { ProjectList } from "@/features/projects/components/ProjectList";
import { getProjects } from "@/features/projects/services/project.service";

export const metadata: Metadata = {
  title: "Projects",
  description: "Manage, filter, and track all active workspace projects.",
};

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
    <div className="p-6 md:p-8 max-w-7xl mx-auto w-full space-y-6">
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Projects
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage, track, and collaborate on your active workspace projects.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            {projects.length} {projects.length === 1 ? "project" : "projects"}
          </span>
        </div>
      </div>

      <ProjectFiltersBar
        search={search}
        status={status}
        favorites={favorites === "true"}
      />

      {projects.length > 0 ? (
        <ProjectList projects={projects} />
      ) : (
        <ProjectEmptyState />
      )}
    </div>
  );
}
