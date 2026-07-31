import type { DashboardActivityItem } from "../types/dashboard";

interface ActivityItemProps {
  activity: DashboardActivityItem;
}

export const ActivityItem = ({ activity }: ActivityItemProps) => {
  const initials = activity.user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="flex items-start gap-3 py-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/50 text-xs font-medium text-secondary-foreground">
        {activity.user.avatarUrl ? (
          <img 
            src={activity.user.avatarUrl} 
            alt={activity.user.name} 
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          initials
        )}
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-sm text-muted-foreground leading-tight">
          <span className="font-medium text-foreground">{activity.user.name}</span>{" "}
          {activity.action}{" "}
          <span className="font-medium text-foreground">{activity.target}</span>
        </p>
        <span className="text-xs text-muted-foreground/80">
          {new Date(activity.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};
