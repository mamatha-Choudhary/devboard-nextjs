import { Badge } from "@/components/ui/badge";
import type { ProjectStatus } from "../types/project";

interface ProjectStatusBadgeProps {
  status: ProjectStatus;
}

/** Maps a project status to the appropriate Badge variant. */
const statusVariantMap: Record<ProjectStatus, "success" | "warning" | "secondary" | "outline"> = {
  Completed: "success",
  "In Progress": "warning",
  Planning: "secondary",
  Archived: "outline",
};

/** Renders the current status of a project. */
export const ProjectStatusBadge = ({ status }: ProjectStatusBadgeProps) => {
  return (
    <Badge variant={statusVariantMap[status]} size="sm">
      {status}
    </Badge>
  );
};
