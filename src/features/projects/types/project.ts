/** Represents the lifecycle state of a project. */
export type ProjectStatus = "Planning" | "In Progress" | "Completed" | "Archived";

/** Represents a user associated with a project. */
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

/** Represents a project in the application domain. */
export interface Project {
  id: string;
  slug: string;
  name: string;
  description?: string;
  status: ProjectStatus;
  owner: User;
  createdAt: Date;
  updatedAt: Date;
  isFavorite: boolean;
}
