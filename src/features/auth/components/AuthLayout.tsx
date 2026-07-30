import type { ReactNode } from "react";
import Link from "next/link";
import { LayoutDashboard } from "lucide-react";
import { Card } from "@/components/ui/card";

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 bg-background text-foreground">
      {/* Brand Header */}
      <Link href="/" className="flex items-center gap-2 mb-6 group">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md transition-transform group-hover:scale-105">
          <LayoutDashboard className="h-5 w-5" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-foreground leading-none">
            DevBoard
          </span>
          <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
            Workspace
          </span>
        </div>
      </Link>

      {/* Main Auth Card Container */}
      <Card className="w-full max-w-md p-6 sm:p-8 shadow-lg border-border bg-card">
        {children}
      </Card>
    </div>
  );
};
