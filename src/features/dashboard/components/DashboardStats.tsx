import { LayoutDashboard, CheckCircle2, Activity, Users } from "lucide-react";
import type { DashboardStatsData } from "../types/dashboard";
import { StatCard } from "./StatCard";

interface DashboardStatsProps {
  stats: DashboardStatsData;
}

/**
 * Renders the primary metric summary cards for the dashboard.
 */
export const DashboardStats = ({ stats }: DashboardStatsProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Projects"
        value={stats.totalProjects}
        icon={<LayoutDashboard className="h-4 w-4" />}
        description="Across all workspaces"
      />
      <StatCard
        title="Active Tasks"
        value={stats.activeTasks}
        icon={<Activity className="h-4 w-4" />}
        description="Currently in progress"
      />
      <StatCard
        title="Completed Projects"
        value={stats.completedProjects}
        icon={<CheckCircle2 className="h-4 w-4" />}
        description="Successfully delivered"
      />
      <StatCard
        title="Team Members"
        value={stats.teamMembers}
        icon={<Users className="h-4 w-4" />}
        description="Active collaborators"
      />
    </div>
  );
};
