import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "../types/project";

interface ProjectListProps {
  projects: Project[];
}

/** Renders the collection of project cards in a responsive grid. */
export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.slug}`}
          className="group block h-full focus:outline-hidden"
        >
          <ProjectCard project={project} />
        </Link>
      ))}
    </section>
  );
};
