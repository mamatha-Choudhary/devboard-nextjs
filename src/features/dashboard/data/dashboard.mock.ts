import type { DashboardData } from "../types/dashboard";

/**
 * Mock data source for the Dashboard.
 * 
 * In a real application, this would be replaced with API calls (e.g., using fetch or Prisma).
 * The UI components are decoupled and only depend on the typed props, so swapping this
 * out for a real data source requires zero changes to the UI components.
 */
export async function getDashboardData(): Promise<DashboardData> {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 800));

  const now = new Date();

  return {
    stats: {
      totalProjects: 12,
      activeTasks: 48,
      completedProjects: 8,
      teamMembers: 5,
    },
    recentProjects: [
      {
        id: "proj-1",
        name: "Website Redesign",
        status: "In Progress",
        progress: 75,
        lastUpdated: new Date(now.getTime() - 1000 * 60 * 30).toISOString(), // 30 mins ago
      },
      {
        id: "proj-2",
        name: "Q3 Marketing Campaign",
        status: "Planning",
        progress: 15,
        lastUpdated: new Date(now.getTime() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
      },
      {
        id: "proj-3",
        name: "Mobile App MVP",
        status: "In Progress",
        progress: 45,
        lastUpdated: new Date(now.getTime() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
      },
      {
        id: "proj-4",
        name: "Backend Migration",
        status: "Archived",
        progress: 30,
        lastUpdated: new Date(now.getTime() - 1000 * 60 * 60 * 24 * 3).toISOString(), // 3 days ago
      },
    ],
    recentActivity: [
      {
        id: "act-1",
        user: { name: "Alice Johnson" },
        action: "completed task",
        target: "Design System Specs",
        timestamp: new Date(now.getTime() - 1000 * 60 * 15).toISOString(),
      },
      {
        id: "act-2",
        user: { name: "Bob Smith" },
        action: "commented on",
        target: "Website Redesign",
        timestamp: new Date(now.getTime() - 1000 * 60 * 45).toISOString(),
      },
      {
        id: "act-3",
        user: { name: "Charlie Davis" },
        action: "uploaded a file to",
        target: "Q3 Marketing Campaign",
        timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 3).toISOString(),
      },
      {
        id: "act-4",
        user: { name: "Diana Prince" },
        action: "created project",
        target: "New Dashboard Module",
        timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 24).toISOString(),
      },
    ],
    insights: [
      {
        id: "ins-1",
        title: "High Productivity",
        description: "Your team has completed 15 tasks this week, a 20% increase from last week.",
        type: "productivity",
      },
      {
        id: "ins-2",
        title: "Approaching Deadline",
        description: "The 'Website Redesign' project is due in 3 days. 5 tasks remain.",
        type: "deadline",
      },
      {
        id: "ins-3",
        title: "Storage Warning",
        description: "Workspace storage is at 85% capacity. Consider upgrading your plan.",
        type: "warning",
      },
    ],
  };
}
