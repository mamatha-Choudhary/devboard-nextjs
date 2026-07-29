import { delay } from "../../../lib/delay";
import { projectsMock } from "../mocks/projects.mock";
import type { Project, ProjectStatus } from "../types/project";

export interface ProjectQuery {
  search?: string;
  status?: ProjectStatus | "All";
  favoritesOnly?: boolean;
}

const matchesSearch = (project: Project, search: string): boolean =>
  project.name.toLowerCase().includes(search);

const matchesStatus = (project: Project, status?: ProjectStatus | "All"): boolean => {
  if (!status || status === "All") {
    return true;
  }

  return project.status === status;
};

const filterByFavorites = (project: Project, favoritesOnly?: boolean): boolean => {
  if (!favoritesOnly) {
    return true;
  }

  return project.isFavorite;
};

/** Fetches the list of projects with a brief simulated network delay. */
export const getProjects = async (query?: ProjectQuery): Promise<Project[]> => {
  await delay(500);

  const search = query?.search?.trim().toLowerCase();
  const status = query?.status;
  const favoritesOnly = query?.favoritesOnly;

  return projectsMock.filter((project) => {
    const matchesSearchQuery = !search || matchesSearch(project, search);
    const matchesStatusQuery = matchesStatus(project, status);
    const matchesFavoritesQuery = filterByFavorites(project, favoritesOnly);

    return matchesSearchQuery && matchesStatusQuery && matchesFavoritesQuery;
  });
};

/** Fetches a single project by its slug with a brief simulated network delay. */
export const getProjectBySlug = async (slug: string): Promise<Project | undefined> => {
  await delay(500);

  return projectsMock.find((project) => project.slug === slug);
};
