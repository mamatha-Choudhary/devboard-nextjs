import type { ProjectStatus } from "../types/project";

export interface StatusFilterOption {
  label: string;
  value: ProjectStatus | "All";
}

export const STATUS_FILTER_OPTIONS: StatusFilterOption[] = [
  { label: "All Statuses", value: "All" },
  { label: "Planning", value: "Planning" },
  { label: "In Progress", value: "In Progress" },
  { label: "Completed", value: "Completed" },
  { label: "Archived", value: "Archived" },
];
