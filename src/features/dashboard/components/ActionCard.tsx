import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface ActionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

/**
 * A reusable component for Quick Action shortcuts on the Dashboard.
 */
export const ActionCard = ({ title, description, icon }: ActionCardProps) => {
  return (
    <Button
      variant="outline"
      className="h-auto w-full flex-col items-start gap-2 border-border/60 p-4 text-left font-normal hover:bg-muted/50 focus-visible:ring-offset-1"
    >
      <div className="flex items-center justify-center rounded-md bg-primary/10 p-2 text-primary">
        {icon}
      </div>
      <div className="space-y-0.5">
        <div className="font-semibold text-foreground">{title}</div>
        <div className="text-xs text-muted-foreground whitespace-normal">
          {description}
        </div>
      </div>
    </Button>
  );
};
