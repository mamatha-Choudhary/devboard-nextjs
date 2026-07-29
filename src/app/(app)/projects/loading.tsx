import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProjectListSkeleton } from "@/features/projects/components/ProjectListSkeleton";

export default function ProjectsLoading() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Card>
          <CardHeader>
            <div className="h-8 w-32 animate-pulse rounded bg-muted" />
          </CardHeader>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="h-16 w-full animate-pulse rounded bg-muted" />
          </CardContent>
        </Card>
      </div>
      <ProjectListSkeleton />
    </div>
  );
};
