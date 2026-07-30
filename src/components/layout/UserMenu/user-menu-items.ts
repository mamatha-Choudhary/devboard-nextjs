import { User, Settings, HelpCircle, LogOut, type LucideIcon } from "lucide-react";

export interface UserProfile {
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}

export interface UserMenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href?: string;
  disabled: boolean;
  isDanger?: boolean;
}

export const MOCK_USER: UserProfile = {
  name: "Mamatha Choudhary",
  email: "mamatha@example.com",
  role: "Senior Engineer",
};

export const mainMenuItems: UserMenuItem[] = [
  {
    id: "profile",
    label: "Profile",
    icon: User,
    href: "/profile",
    disabled: false,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    href: "/settings",
    disabled: true,
  },
  {
    id: "help",
    label: "Help & Support",
    icon: HelpCircle,
    disabled: true,
  },
];

export const footerMenuItems: UserMenuItem[] = [
  {
    id: "signout",
    label: "Sign Out",
    icon: LogOut,
    disabled: false,
    isDanger: true,
  },
];
