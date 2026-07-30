import { Star } from "lucide-react";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import type { ProjectStatus } from "../types/project";

interface ProjectHeaderProps {
  name: string;
  status: ProjectStatus;
  isFavorite: boolean;
}

/** Renders the project title and status summary. */
export const ProjectHeader = ({ name, status, isFavorite }: ProjectHeaderProps) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3 flex-wrap">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {name}
        </h1>
        <ProjectStatusBadge status={status} />
      </div>

      {isFavorite && (
        <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400 w-fit">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span>Favorite Project</span>
        </div>
      )}
    </div>
  );
};
