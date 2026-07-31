import type { ProjectStatus } from "@/features/projects/types/project";

export interface DashboardStatsData {
  totalProjects: number;
  activeTasks: number;
  completedProjects: number;
  teamMembers: number;
}

export interface DashboardRecentProject {
  id: string;
  name: string;
  status: ProjectStatus;
  progress: number;
  lastUpdated: string; // ISO date string
}

export interface DashboardActivityItem {
  id: string;
  user: {
    name: string;
    avatarUrl?: string;
  };
  action: string;
  target: string;
  timestamp: string; // ISO date string
}

export interface DashboardInsight {
  id: string;
  title: string;
  description: string;
  type: "productivity" | "deadline" | "achievement" | "warning";
}

export interface DashboardData {
  stats: DashboardStatsData;
  recentProjects: DashboardRecentProject[];
  recentActivity: DashboardActivityItem[];
  insights: DashboardInsight[];
}
