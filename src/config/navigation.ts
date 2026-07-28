export interface NavigationItem {
  title: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Projects", href: "/projects" },
  { title: "Settings", href: "/settings" },
];
