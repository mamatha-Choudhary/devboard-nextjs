import type { DashboardInsight } from "../types/dashboard";
import { InsightCard } from "./InsightCard";

interface InsightsProps {
  insights: DashboardInsight[];
}

export const Insights = ({ insights }: InsightsProps) => {
  if (insights.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight">Insights</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {insights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </div>
  );
};
