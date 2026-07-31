import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { DashboardRecentProject } from "../types/dashboard";
import { RecentProjectCard } from "./RecentProjectCard";
import Link from "next/link";

interface RecentProjectsListProps {
  projects: DashboardRecentProject[];
}

export const RecentProjectsList = ({ projects }: RecentProjectsListProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold tracking-tight">Recent Projects</h2>
        <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs" asChild>
          <Link href="/projects">
            View All <ArrowRight className="h-3 w-3" />
          </Link>
        </Button>
      </div>
      
      <div className="flex flex-col gap-3">
        {projects.length > 0 ? (
          projects.map((project) => (
            <RecentProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-border/60 text-sm text-muted-foreground">
            No recent projects found.
          </div>
        )}
      </div>
    </div>
  );
};
