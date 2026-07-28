import type { ProjectStatus } from "../types/project";

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
}

/** Renders the current status of a project. */
export const ProjectStatusBadge = ({ status }: ProjectStatusBadgeProps) => {
  return <span>{status}</span>;
};
