import { PlusCircle, Target, UserPlus, BarChart3 } from "lucide-react";
import { ActionCard } from "./ActionCard";

/**
 * Renders a row of common actions for quick access.
 */
export const QuickActions = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold tracking-tight">Quick Actions</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <ActionCard
          title="New Project"
          description="Create a new blank project"
          icon={<PlusCircle className="h-5 w-5" />}
        />
        <ActionCard
          title="Create Task"
          description="Add a task to a project"
          icon={<Target className="h-5 w-5" />}
        />
        <ActionCard
          title="Invite Member"
          description="Add someone to your team"
          icon={<UserPlus className="h-5 w-5" />}
        />
        <ActionCard
          title="View Reports"
          description="Check workspace analytics"
          icon={<BarChart3 className="h-5 w-5" />}
        />
      </div>
    </div>
  );
};
