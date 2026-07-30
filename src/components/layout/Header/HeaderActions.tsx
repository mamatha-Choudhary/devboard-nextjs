import { Sun, Bell, User } from "lucide-react";
import HeaderActionItem from "./HeaderActionItem";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-1 sm:gap-2">
      {/* Theme Toggle Placeholder */}
      <HeaderActionItem
        ariaLabel="Toggle theme"
        icon={<Sun className="h-4.5 w-4.5" />}
      />

      {/* Notifications Placeholder */}
      <div className="relative">
        <HeaderActionItem
          ariaLabel="Notifications"
          icon={<Bell className="h-4.5 w-4.5" />}
        />
        <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary" />
      </div>

      {/* User Avatar Placeholder */}
      <div className="ml-1 flex items-center border-l border-border/60 pl-2">
        <HeaderActionItem
          ariaLabel="User menu"
          icon={<User className="h-4.5 w-4.5" />}
        />
      </div>
    </div>
  );
}
