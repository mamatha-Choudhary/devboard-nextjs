import * as React from "react";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

interface ProjectSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

/** Presentational search input for listing views and filters. */
export const ProjectSearch = React.forwardRef<HTMLInputElement, ProjectSearchProps>(
  ({ className, label = "Search", placeholder = "Search", ...props }, ref) => {
    return (
      <label className="block w-full space-y-2">
        {label ? <span className="text-sm font-medium text-foreground">{label}</span> : null}
        <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 shadow-sm transition-colors focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            ref={ref}
            type="search"
            placeholder={placeholder}
            className={cn(
              "w-full border-0 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground",
              className,
            )}
            {...props}
          />
        </div>
      </label>
    );
  },
);

ProjectSearch.displayName = "ProjectSearch";
