import type { User } from "@/features/auth/types/auth";

interface DashboardHeaderProps {
  user: User;
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}

/**
 * Renders the dashboard greeting and welcome message.
 */
export const DashboardHeader = ({ user }: DashboardHeaderProps) => {
  const greeting = getGreeting();

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {greeting}, {user.name.split(" ")[0]}!
      </h1>
      <p className="text-sm text-muted-foreground">
        Here is what&apos;s happening in your workspace today.
      </p>
    </div>
  );
};
