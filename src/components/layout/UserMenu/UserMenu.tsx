"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LogOut } from "lucide-react";
import UserMenuAvatar from "./UserMenuAvatar";
import {
  MOCK_USER,
  mainMenuItems,
  type UserProfile,
} from "./user-menu-items";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { AuthService } from "@/features/auth/services/auth.service";

export default function UserMenu() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<UserProfile>(MOCK_USER);

  useEffect(() => {
    let isMounted = true;
    AuthService.getCurrentUser()
      .then((user) => {
        if (isMounted && user) {
          setCurrentUser({
            name: user.name,
            email: user.email,
            role: user.role || "USER",
            avatarUrl: user.avatarUrl,
          });
        }
      })
      .catch(() => {
        // Fallback to default state
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await AuthService.logout();
      router.replace("/login");
      router.refresh();
    } catch (error) {
      console.error("Sign out error:", error);
      router.replace("/login");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="User menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-105 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
        >
          <UserMenuAvatar name={currentUser.name} avatarUrl={currentUser.avatarUrl} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64">
        {/* User Profile Header Label */}
        <DropdownMenuLabel className="font-normal p-0 pb-1">
          <div className="flex items-center gap-3 rounded-lg bg-muted/40 p-2.5 border border-border/40">
            <UserMenuAvatar
              name={currentUser.name}
              avatarUrl={currentUser.avatarUrl}
              className="h-9 w-9 text-xs"
            />
            <div className="flex flex-col min-w-0">
              <span className="truncate text-xs font-semibold text-foreground">
                {currentUser.name}
              </span>
              <span className="truncate text-[11px] text-muted-foreground">
                {currentUser.email}
              </span>
              <span className="mt-1 w-fit rounded-md bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-secondary-foreground">
                {currentUser.role}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Main Feature Menu Items */}
        <DropdownMenuGroup>
          {mainMenuItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <>
                <Icon className="h-4 w-4 text-muted-foreground" />
                <span>{item.label}</span>
              </>
            );

            if (!item.disabled && item.href) {
              return (
                <DropdownMenuItem key={item.id} asChild>
                  <Link href={item.href} className="w-full cursor-pointer">
                    {content}
                  </Link>
                </DropdownMenuItem>
              );
            }

            return (
              <DropdownMenuItem key={item.id} disabled={item.disabled}>
                {content}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Sign Out Action */}
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-destructive focus:text-destructive cursor-pointer"
        >
          <LogOut className="h-4 w-4" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
