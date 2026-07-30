import { Bell } from "lucide-react";
import HeaderActionItem from "./HeaderActionItem";
import ThemeToggle from "@/components/layout/ThemeToggle";
import UserMenu from "@/components/layout/UserMenu";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      {/* Interactive Theme Toggle */}
      <ThemeToggle />

      {/* Notifications Placeholder */}
      <div className="relative">
        <HeaderActionItem
          ariaLabel="Notifications"
          icon={<Bell className="h-4.5 w-4.5" />}
        />
        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
      </div>

      {/* User Menu Dropdown */}
      <div className="ml-1 flex items-center border-l border-border/60 pl-2">
        <UserMenu />
      </div>
    </div>
  );
}
