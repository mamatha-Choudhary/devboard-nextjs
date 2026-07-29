import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "../types/project";

interface ProjectListProps {
  projects: Project[];
}

/** Renders the collection of project cards. */
export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <section className="space-y-4">
      {projects.map((project) => (
        <Link key={project.id} href={`/projects/${project.slug}`}>
          <ProjectCard project={project} />
        </Link>
      ))}
    </section>
  );
};
