import { ProjectList } from "@/features/projects/components/ProjectList";
import { getProjects } from "@/features/projects/services/project.service";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
}
