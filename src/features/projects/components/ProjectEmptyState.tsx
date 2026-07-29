import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectEmptyStateProps {
  onClearFilters?: () => void;
}

/** Renders a friendly empty state when no projects match the current filters. */
export const ProjectEmptyState = ({ onClearFilters }: ProjectEmptyStateProps) => {
  return (
    <Card className="border-dashed">
      <CardHeader>
        <CardTitle>No projects found</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          Try adjusting your search or filters to see more results.
        </CardDescription>
      </CardContent>
      <CardFooter>
        {onClearFilters ? (
          <Button type="button" variant="outline" onClick={onClearFilters}>
            Clear filters
          </Button>
        ) : (
          <Button asChild variant="outline">
            <Link href="/projects">Clear filters</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
