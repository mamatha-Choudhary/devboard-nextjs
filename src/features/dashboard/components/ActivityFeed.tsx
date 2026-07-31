import { Card } from "@/components/ui/card";
import type { DashboardActivityItem } from "../types/dashboard";
import { ActivityItem } from "./ActivityItem";

interface ActivityFeedProps {
  activities: DashboardActivityItem[];
}

export const ActivityFeed = ({ activities }: ActivityFeedProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold tracking-tight">Recent Activity</h2>
      <Card className="p-4 border-border/60 bg-card">
        <div className="flex flex-col divide-y divide-border/40">
          {activities.length > 0 ? (
            activities.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))
          ) : (
            <div className="flex h-24 items-center justify-center text-sm text-muted-foreground py-4">
              No recent activity to show.
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
