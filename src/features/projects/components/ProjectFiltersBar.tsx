"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";
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

/** Renders the shared projects filter controls in a cohesive toolbar. */
export const ProjectFiltersBar = ({
  search,
  status,
  favorites,
}: ProjectFiltersBarProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [resetSignal, setResetSignal] = useState(0);

  const hasActiveFilters = Boolean(search || (status && status !== "All") || favorites);

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
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-xs md:flex-row md:items-end md:justify-between">
      <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <ProjectSearch initialValue={search} resetSignal={resetSignal} />
        </div>
        <ProjectStatusFilter value={(status as ProjectStatus | "All" | undefined) ?? "All"} />
        <ProjectFavoritesFilter checked={favorites ?? false} />
      </div>

      {hasActiveFilters && (
        <div className="flex flex-col gap-1.5 self-end sm:self-auto">
          <span className="text-xs font-medium opacity-0 hidden sm:block">Reset</span>
          <Button
            type="button"
            variant="ghost"
            onClick={handleClearFilters}
            className="h-10 gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
            <span>Clear filters</span>
          </Button>
        </div>
      )}
    </div>
  );
};
