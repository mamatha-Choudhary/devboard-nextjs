import { Card } from "@/components/ui/card";
import { TrendingUp, AlertTriangle, Clock, Trophy } from "lucide-react";
import type { DashboardInsight } from "../types/dashboard";

interface InsightCardProps {
  insight: DashboardInsight;
}

export const InsightCard = ({ insight }: InsightCardProps) => {
  const getIcon = () => {
    switch (insight.type) {
      case "productivity":
        return <TrendingUp className="h-4 w-4 text-emerald-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case "deadline":
        return <Clock className="h-4 w-4 text-amber-500" />;
      case "achievement":
        return <Trophy className="h-4 w-4 text-indigo-500" />;
    }
  };

  return (
    <Card className="flex flex-col gap-2 border-border/60 bg-card p-4 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-2">
        {getIcon()}
        <h4 className="font-semibold text-sm">{insight.title}</h4>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {insight.description}
      </p>
    </Card>
  );
};
