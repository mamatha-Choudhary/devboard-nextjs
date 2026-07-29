import Link from "next/link";
import { type ReactNode } from "react";

type SidebarNavItemProps = Readonly<{
  href: string;
  title: string;
  isActive: boolean;
  icon?: ReactNode;
}>;

export default function SidebarNavItem({
  href,
  title,
  isActive,
  icon,
}: SidebarNavItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-150 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring ${
          isActive
            ? "bg-secondary text-secondary-foreground font-semibold shadow-xs"
            : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
        }`}
      >
        {icon && (
          <span
            className={`transition-colors ${
              isActive ? "text-secondary-foreground" : "text-muted-foreground"
            }`}
          >
            {icon}
          </span>
        )}
        <span>{title}</span>
      </Link>
    </li>
  );
}
