import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectInfoProps {
  ownerName: string;
  ownerEmail: string;
  createdAt: Date;
  updatedAt: Date;
}

/** Displays owner and timeline information for a project. */
export const ProjectInfo = ({ ownerName, ownerEmail, createdAt, updatedAt }: ProjectInfoProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project information</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">Owner:</span> {ownerName}
          </li>
          <li>
            <span className="font-medium text-foreground">Email:</span> {ownerEmail}
          </li>
          <li>
            <span className="font-medium text-foreground">Created:</span> {createdAt.toLocaleDateString()}
          </li>
          <li>
            <span className="font-medium text-foreground">Updated:</span> {updatedAt.toLocaleDateString()}
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
