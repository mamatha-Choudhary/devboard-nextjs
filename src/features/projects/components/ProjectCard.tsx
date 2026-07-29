import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

/** Renders a summary card for a single project. */
export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        {project.description ? (
          <CardDescription>{project.description}</CardDescription>
        ) : null}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Owner: {project.owner.name}
        </p>
        <ProjectStatusBadge status={project.status} />
        <p className="text-sm text-muted-foreground">
          Updated: {project.updatedAt.toLocaleDateString()}
        </p>
      </CardContent>
    </Card>
  );
};
