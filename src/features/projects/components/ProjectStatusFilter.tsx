"use client";

import { useRouter, useSearchParams } from "next/navigation";
import type { ProjectStatus } from "../types/project";
import { STATUS_FILTER_OPTIONS } from "../constants/project-status-options";
import { ProjectStatusDropdown } from "./ProjectStatusDropdown";

interface ProjectStatusFilterProps {
  value?: ProjectStatus | "All";
}

/** Controller component that manages URL search params for status filtering and renders ProjectStatusDropdown. */
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
    <ProjectStatusDropdown
      value={value}
      options={STATUS_FILTER_OPTIONS}
      onChange={handleChange}
    />
  );
};
