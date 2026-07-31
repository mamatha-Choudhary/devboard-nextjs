import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  description?: string;
}

/**
 * A reusable component for displaying a key metric.
 */
export const StatCard = ({ title, value, icon, description }: StatCardProps) => {
  return (
    <Card className="p-5 border-border bg-card">
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    </Card>
  );
};
