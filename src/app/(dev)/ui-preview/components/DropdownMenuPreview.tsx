"use client";

import {
  User,
  Settings,
  CreditCard,
  Building,
  HelpCircle,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuPreview() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Interactive Dropdown Showcase */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <span>Options Menu</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="h-4 w-4 text-muted-foreground" />
              <span>Profile</span>
            </DropdownMenuItem>
            
            <DropdownMenuItem>
              <Settings className="h-4 w-4 text-muted-foreground" />
              <span>Settings</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
              <span>Billing</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuLabel>Workspace</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem disabled>
              <Building className="h-4 w-4 text-muted-foreground" />
              <span>DevBoard Enterprise (Disabled)</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
            <span>Help & Support</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem disabled className="text-destructive focus:text-destructive">
            <LogOut className="h-4 w-4" />
            <span>Log Out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
