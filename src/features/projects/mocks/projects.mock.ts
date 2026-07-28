import type { Project } from "../types/project";

/** Mock project data used for UI development and demos. */
export const projectsMock: Project[] = [
  {
    id: "proj-001",
    name: "Redesign Marketing Homepage",
    description:
      "Refresh the public marketing site with a modern layout and better conversion flow.",
    status: "In Progress",
    owner: {
      id: "user-001",
      name: "Alicia Chen",
      email: "alicia@example.com",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    },
    createdAt: new Date("2024-01-10T09:30:00.000Z"),
    updatedAt: new Date("2024-02-14T16:45:00.000Z"),
    isFavorite: true,
  },
  {
    id: "proj-002",
    name: "Mobile App Navigation Overhaul",
    description:
      "Simplify the app navigation experience for first-time users and power users alike.",
    status: "Planning",
    owner: {
      id: "user-002",
      name: "Marcus Lee",
      email: "marcus@example.com",
    },
    createdAt: new Date("2024-02-01T12:00:00.000Z"),
    updatedAt: new Date("2024-02-12T10:15:00.000Z"),
    isFavorite: false,
  },
  {
    id: "proj-003",
    name: "Customer Insights Dashboard",
    description:
      "Build a dashboard that surfaces product usage trends and retention signals.",
    status: "Completed",
    owner: {
      id: "user-003",
      name: "Nadia Patel",
      email: "nadia@example.com",
      avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    },
    createdAt: new Date("2023-09-21T08:20:00.000Z"),
    updatedAt: new Date("2024-01-05T14:00:00.000Z"),
    isFavorite: true,
  },
  {
    id: "proj-004",
    name: "Internal API Documentation",
    description:
      "Document the new platform APIs and provide onboarding guidance for engineers.",
    status: "Archived",
    owner: {
      id: "user-004",
      name: "Derek Brooks",
      email: "derek@example.com",
    },
    createdAt: new Date("2023-05-15T07:45:00.000Z"),
    updatedAt: new Date("2023-12-22T09:10:00.000Z"),
    isFavorite: false,
  },
  {
    id: "proj-005",
    name: "Design System Audit",
    description:
      "Review and standardize core UI components to improve consistency across the product.",
    status: "In Progress",
    owner: {
      id: "user-005",
      name: "Sofia Ramirez",
      email: "sofia@example.com",
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    },
    createdAt: new Date("2024-03-01T11:30:00.000Z"),
    updatedAt: new Date("2024-03-18T13:20:00.000Z"),
    isFavorite: true,
  },
  {
    id: "proj-006",
    name: "Operations Automation Sprint",
    description:
      "Automate repetitive reporting tasks and reduce manual handoffs between teams.",
    status: "Completed",
    owner: {
      id: "user-006",
      name: "Ethan Walker",
      email: "ethan@example.com",
    },
    createdAt: new Date("2023-11-12T15:05:00.000Z"),
    updatedAt: new Date("2024-02-08T17:40:00.000Z"),
    isFavorite: false,
  },
];
