"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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

/** Renders the shared projects filter controls in one place. */
export const ProjectFiltersBar = ({
  search,
  status,
  favorites,
}: ProjectFiltersBarProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [resetSignal, setResetSignal] = useState(0);

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
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-4 shadow-sm sm:flex-row sm:items-end">
      <div className="flex-1">
        <ProjectSearch initialValue={search} resetSignal={resetSignal} />
      </div>
      <ProjectStatusFilter value={(status as ProjectStatus | "All" | undefined) ?? "All"} />
      <ProjectFavoritesFilter checked={favorites ?? false} />
      <Button type="button" variant="outline" onClick={handleClearFilters}>
        Clear filters
      </Button>
    </div>
  );
};
