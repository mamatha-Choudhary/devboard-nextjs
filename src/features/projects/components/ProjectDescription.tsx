import { FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectDescriptionProps {
  description?: string;
}

/** Renders the project description when one exists. */
export const ProjectDescription = ({ description }: ProjectDescriptionProps) => {
  if (!description) {
    return null;
  }

  return (
    <Card className="shadow-xs">
      <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-3">
        <FileText className="h-4 w-4 text-muted-foreground" />
        <CardTitle className="text-base font-semibold">Description</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
