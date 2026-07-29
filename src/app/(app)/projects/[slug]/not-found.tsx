import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Project not found</h2>
      <p className="text-muted-foreground">
        The project you are looking for does not exist or may have been removed.
      </p>
      <Button asChild variant="outline">
        <Link href="/projects">Back to projects</Link>
      </Button>
    </div>
  );
};
