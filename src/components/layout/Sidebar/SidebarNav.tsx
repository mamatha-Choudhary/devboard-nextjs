"use client";

import { usePathname } from "next/navigation";
import { LayoutDashboard, FolderKanban, Settings } from "lucide-react";
import SidebarNavItem from "./SidebarNavItem";
import { navigation } from "@/config/navigation";

const getNavIcon = (href: string) => {
  switch (href) {
    case "/dashboard":
      return <LayoutDashboard className="h-4 w-4" />;
    case "/projects":
      return <FolderKanban className="h-4 w-4" />;
    case "/settings":
      return <Settings className="h-4 w-4" />;
    default:
      return null;
  }
};

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1">
      <ul className="space-y-1">
        {navigation.map((item) => (
          <SidebarNavItem
            key={item.href}
            href={item.href}
            title={item.title}
            isActive={pathname === item.href}
            icon={getNavIcon(item.href)}
          />
        ))}
      </ul>
    </nav>
  );
}
