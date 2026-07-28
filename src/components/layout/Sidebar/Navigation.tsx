"use client";

import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
import { navigation } from "@/config/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="space-y-2">
        {navigation.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            title={item.title}
            isActive={pathname === item.href}
          />
        ))}
      </ul>
    </nav>
  );
}
