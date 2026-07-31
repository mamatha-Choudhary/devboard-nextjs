import {
  DashboardHeaderSkeleton,
  DashboardStatsSkeleton,
  QuickActionsSkeleton,
  RecentProjectsListSkeleton,
  ActivityFeedSkeleton,
  InsightsSkeleton,
} from "@/features/dashboard/components";

export default function DashboardLoading() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 p-6 md:p-8">
      <DashboardHeaderSkeleton />
      
      <DashboardStatsSkeleton />
      
      <QuickActionsSkeleton />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <RecentProjectsListSkeleton />
        <ActivityFeedSkeleton />
      </div>

      <InsightsSkeleton />
    </div>
  );
}
