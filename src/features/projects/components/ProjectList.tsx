import { ProjectCard } from "./ProjectCard";
import type { Project } from "../types/project";

interface ProjectListProps {
  projects: Project[];
}

/** Renders the collection of project cards. */
export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <section>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};
