import type { Metadata } from "next";
import { requireAuth } from "@/lib/auth/session";
import { getDashboardData } from "@/features/dashboard/data/dashboard.mock";
import {
  DashboardHeader,
  DashboardStats,
  QuickActions,
  RecentProjectsList,
  ActivityFeed,
  Insights,
} from "@/features/dashboard/components";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "View workspace activity, project metrics, and team overview.",
};

export default async function DashboardPage() {
  // Ensure the user is authenticated
  const user = await requireAuth();

  // Fetch dashboard data (mocked for now)
  const dashboardData = await getDashboardData();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 p-6 md:p-8">
      <DashboardHeader user={user} />
      
      <DashboardStats stats={dashboardData.stats} />
      
      <QuickActions />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <RecentProjectsList projects={dashboardData.recentProjects} />
        <ActivityFeed activities={dashboardData.recentActivity} />
      </div>

      <Insights insights={dashboardData.insights} />
    </div>
  );
}
