import { Calendar, ArrowUpRight, Star } from "lucide-react";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

/** Renders a modern SaaS summary card for a single project. */
export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-xs transition-all duration-200 hover:border-primary/40 hover:shadow-md">
      {/* Top Header Row */}
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {project.name}
          </h3>
          <div className="flex items-center gap-1.5 shrink-0">
            {project.isFavorite && (
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            )}
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
          </div>
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-xs text-muted-foreground">
          {project.description || "No description provided."}
        </p>
      </div>

      {/* Card Footer Section */}
      <div className="mt-5 space-y-3.5 border-t border-border/60 pt-3.5">
        <div className="flex items-center justify-between gap-2">
          {/* Owner Info */}
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
              {getInitials(project.owner.name)}
            </div>
            <span className="truncate text-xs font-medium text-foreground">
              {project.owner.name}
            </span>
          </div>

          {/* Status Badge */}
          <ProjectStatusBadge status={project.status} />
        </div>

        {/* Date Row */}
        <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          <span>
            Updated{" "}
            {new Date(project.updatedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};
