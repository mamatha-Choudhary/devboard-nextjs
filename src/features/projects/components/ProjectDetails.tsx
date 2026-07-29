import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "../types/project";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectInfo } from "./ProjectInfo";

interface ProjectDetailsProps {
  project: Project;
}

/** Renders the full project details view for a single project. */
export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <ProjectHeader
          name={project.name}
          status={project.status}
          isFavorite={project.isFavorite}
        />
        <ProjectDescription description={project.description} />
        <ProjectInfo
          ownerName={project.owner.name}
          ownerEmail={project.owner.email}
          createdAt={project.createdAt}
          updatedAt={project.updatedAt}
        />
      </CardContent>
    </Card>
  );
};
