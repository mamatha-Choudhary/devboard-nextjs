"use client";

import UserMenuAvatar from "./UserMenuAvatar";
import {
  MOCK_USER,
  mainMenuItems,
  footerMenuItems,
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

export default function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="User menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-105 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
        >
          <UserMenuAvatar name={MOCK_USER.name} avatarUrl={MOCK_USER.avatarUrl} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64">
        {/* User Profile Header Label */}
        <DropdownMenuLabel className="font-normal p-0 pb-1">
          <div className="flex items-center gap-3 rounded-lg bg-muted/40 p-2.5 border border-border/40">
            <UserMenuAvatar
              name={MOCK_USER.name}
              avatarUrl={MOCK_USER.avatarUrl}
              className="h-9 w-9 text-xs"
            />
            <div className="flex flex-col min-w-0">
              <span className="truncate text-xs font-semibold text-foreground">
                {MOCK_USER.name}
              </span>
              <span className="truncate text-[11px] text-muted-foreground">
                {MOCK_USER.email}
              </span>
              <span className="mt-1 w-fit rounded-md bg-secondary px-1.5 py-0.5 text-[10px] font-medium text-secondary-foreground">
                {MOCK_USER.role}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* Main Feature Menu Items */}
        <DropdownMenuGroup>
          {mainMenuItems.map((item) => {
            const Icon = item.icon;
            return (
              <DropdownMenuItem key={item.id} disabled={item.disabled}>
                <Icon className="h-4 w-4 text-muted-foreground" />
                <span>{item.label}</span>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* Footer Menu Items (e.g. Sign Out) */}
        {footerMenuItems.map((item) => {
          const Icon = item.icon;
          return (
            <DropdownMenuItem
              key={item.id}
              disabled={item.disabled}
              className={item.isDanger ? "text-muted-foreground" : undefined}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
