"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProjectStatus } from "../types/project";
import { ProjectFavoritesFilter } from "./ProjectFavoritesFilter";
import { ProjectSearch } from "./ProjectSearch";
import { ProjectStatusFilter } from "./ProjectStatusFilter";

interface ProjectFiltersBarProps {
  search?: string;
  status?: string;
  favorites?: boolean;
}

/** Renders the shared projects filter controls in a stable two-row layout. */
export const ProjectFiltersBar = ({
  search,
  status,
  favorites,
}: ProjectFiltersBarProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [resetSignal, setResetSignal] = useState(0);

  const activeStatus = status && status !== "All" ? status : undefined;
  const hasActiveFilters = Boolean(search || activeStatus || favorites);

  const handleClearFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    params.delete("status");
    params.delete("favorites");

    const query = params.toString();
    const nextUrl = query ? `/projects?${query}` : "/projects";

    setResetSignal((previous) => previous + 1);
    router.replace(nextUrl);
  };

  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-4 shadow-xs">
      {/* Row 1: Fixed Control Row (Search, Status, Favorites) */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <ProjectSearch initialValue={search} resetSignal={resetSignal} />
        </div>
        <ProjectStatusFilter value={(status as ProjectStatus | "All" | undefined) ?? "All"} />
        <ProjectFavoritesFilter checked={favorites ?? false} />
      </div>

      {/* Row 2: Secondary Info & Action Row (Zero Layout Shift) */}
      <div className="mt-4 flex flex-col gap-2 border-t border-border/60 pt-3 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground min-h-[36px]">
        {/* Left: Active Filter Summary Tags */}
        <div className="flex flex-wrap items-center gap-2 min-h-[24px]">
          <span className="inline-flex items-center gap-1 text-muted-foreground font-medium">
            <Filter className="h-3.5 w-3.5" />
            <span>Active Filters:</span>
          </span>

          {!hasActiveFilters ? (
            <span className="italic text-muted-foreground/70">None</span>
          ) : (
            <div className="flex flex-wrap items-center gap-1.5">
              {search && (
                <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 font-medium text-foreground">
                  Search: &quot;{search}&quot;
                </span>
              )}
              {activeStatus && (
                <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 font-medium text-foreground">
                  Status: {activeStatus}
                </span>
              )}
              {favorites && (
                <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 font-medium text-amber-600 dark:text-amber-400">
                  ★ Favorites Only
                </span>
              )}
            </div>
          )}
        </div>

        {/* Right: Clear Filters Action Slot */}
        <div className="flex items-center justify-end">
          {hasActiveFilters ? (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleClearFilters}
              className="h-7 gap-1 text-xs text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              <X className="h-3.5 w-3.5" />
              <span>Clear all filters</span>
            </Button>
          ) : (
            <span className="text-[11px] text-muted-foreground/60">No filters applied</span>
          )}
        </div>
      </div>
    </div>
  );
};
