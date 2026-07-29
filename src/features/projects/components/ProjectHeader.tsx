import { Badge } from "@/components/ui/badge";
import type { ProjectStatus } from "../types/project";

interface ProjectHeaderProps {
  name: string;
  status: ProjectStatus;
  isFavorite: boolean;
}

/** Renders the project title and status summary. */
export const ProjectHeader = ({ name, status, isFavorite }: ProjectHeaderProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <Badge variant="secondary" size="sm">
          {status}
        </Badge>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span aria-label={isFavorite ? "Favorite project" : "Not favorite"}>
          {isFavorite ? "★" : "☆"}
        </span>
      </div>
    </div>
  );
};
