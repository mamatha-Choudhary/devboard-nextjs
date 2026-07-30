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
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-xs">
        <ProjectHeader
          name={project.name}
          status={project.status}
          isFavorite={project.isFavorite}
        />
      </div>

      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main Content (Left 2 cols) */}
        <div className="space-y-6 lg:col-span-2">
          <ProjectDescription description={project.description} />
        </div>

        {/* Sidebar Info (Right 1 col) */}
        <div className="space-y-6">
          <ProjectInfo
            ownerName={project.owner.name}
            ownerEmail={project.owner.email}
            createdAt={project.createdAt}
            updatedAt={project.updatedAt}
          />
        </div>
      </div>
    </div>
  );
};
