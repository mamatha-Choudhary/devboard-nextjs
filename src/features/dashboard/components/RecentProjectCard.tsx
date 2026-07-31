import { Card } from "@/components/ui/card";
import type { DashboardRecentProject } from "../types/dashboard";
import { ProjectStatusBadge } from "@/features/projects/components/ProjectStatusBadge";

interface RecentProjectCardProps {
  project: DashboardRecentProject;
}

export const RecentProjectCard = ({ project }: RecentProjectCardProps) => {
  return (
    <Card className="flex items-center justify-between p-4 border-border/60 hover:bg-muted/20 transition-colors">
      <div className="flex flex-col gap-1.5 overflow-hidden">
        <h4 className="font-medium text-sm truncate">{project.name}</h4>
        <div className="flex items-center gap-2">
          <ProjectStatusBadge status={project.status} />
          <span className="text-[10px] text-muted-foreground">
            Updated {new Date(project.lastUpdated).toLocaleDateString()}
          </span>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end gap-1">
          <span className="text-xs font-medium text-foreground">{project.progress}%</span>
          <div className="h-1.5 w-16 overflow-hidden rounded-full bg-secondary">
            <div 
              className="h-full bg-primary transition-all" 
              style={{ width: `${project.progress}%` }} 
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
