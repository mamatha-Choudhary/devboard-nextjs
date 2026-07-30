import { User, Mail, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectInfoProps {
  ownerName: string;
  ownerEmail: string;
  createdAt: Date;
  updatedAt: Date;
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

/** Displays owner and timeline information for a project. */
export const ProjectInfo = ({
  ownerName,
  ownerEmail,
  createdAt,
  updatedAt,
}: ProjectInfoProps) => {
  return (
    <Card className="shadow-xs">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">Project Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Owner Row */}
        <div className="flex items-center gap-3 rounded-lg border border-border/60 bg-muted/30 p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
            {getInitials(ownerName)}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-xs text-muted-foreground font-medium">Owner</span>
            <span className="truncate text-sm font-semibold text-foreground">
              {ownerName}
            </span>
          </div>
        </div>

        {/* Info Rows */}
        <div className="space-y-3 pt-1 text-xs">
          <div className="flex items-center justify-between border-b border-border/40 pb-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-3.5 w-3.5" />
              <span>Email</span>
            </div>
            <a
              href={`mailto:${ownerEmail}`}
              className="font-medium text-foreground hover:underline truncate max-w-[180px]"
            >
              {ownerEmail}
            </a>
          </div>

          <div className="flex items-center justify-between border-b border-border/40 pb-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              <span>Created</span>
            </div>
            <span className="font-medium text-foreground">
              {new Date(createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>Updated</span>
            </div>
            <span className="font-medium text-foreground">
              {new Date(updatedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
