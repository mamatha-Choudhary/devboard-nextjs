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

/** Renders a simple status dropdown for project filtering. */
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
    <label className="flex items-center gap-2 text-sm text-gray-700">
      <span>Status</span>
      <select
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        className="rounded border border-gray-300 px-3 py-2"
      >
        {statusOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};
