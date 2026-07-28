import { ProjectStatusBadge } from "./ProjectStatusBadge";
import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

/** Renders a summary card for a single project. */
export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article>
      <h3>{project.name}</h3>
      {project.description ? <p>{project.description}</p> : null}
      <p>Owner: {project.owner.name}</p>
      <ProjectStatusBadge status={project.status} />
      <p>Updated: {project.updatedAt.toLocaleDateString()}</p>
    </article>
  );
};
