"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { ProjectStatus } from "../types/project";

interface ProjectStatusFilterProps {
  value?: ProjectStatus | "All";
}

const statusOptions: Array<ProjectStatus | "All"> = [
  "All",
  "Planning",
  "In Progress",
  "Completed",
  "Archived",
];

/** Renders a styled status dropdown for project filtering. */
export const ProjectStatusFilter = ({ value = "All" }: ProjectStatusFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (nextValue: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (nextValue === "All") {
      params.delete("status");
    } else {
      params.set("status", nextValue);
    }

    const query = params.toString();
    const nextUrl = query ? `?${query}` : "?";

    router.replace(`/projects${nextUrl}`);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor="status-filter-select"
        className="text-xs font-medium text-muted-foreground"
      >
        Status
      </label>
      <select
        id="status-filter-select"
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        className="h-10 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground shadow-xs transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20 focus:outline-hidden cursor-pointer"
      >
        {statusOptions.map((option) => (
          <option key={option} value={option} className="bg-background text-foreground">
            {option === "All" ? "All Statuses" : option}
          </option>
        ))}
      </select>
    </div>
  );
};
