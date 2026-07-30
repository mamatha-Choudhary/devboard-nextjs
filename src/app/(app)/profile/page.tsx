import type { Metadata } from "next";
import { getCurrentUser } from "@/lib/auth/session";
import { Card } from "@/components/ui/card";
import { User, Mail, Shield, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Profile",
  description: "View and manage your DevBoard user profile details.",
};

export default async function ProfilePage() {
  const user = await getCurrentUser();

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto w-full space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          User Profile
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage your personal information and workspace account details.
        </p>
      </div>

      <Card className="p-6 space-y-6 border-border bg-card">
        <div className="flex items-center gap-4 pb-6 border-b border-border/60">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-bold">
            {user?.name ? user.name.substring(0, 2).toUpperCase() : "U"}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              {user?.name || "Workspace User"}
            </h2>
            <p className="text-xs text-muted-foreground">{user?.email}</p>
            <span className="mt-1.5 inline-flex items-center rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
              {user?.role || "USER"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 rounded-lg border border-border/40 p-3 bg-muted/20">
            <User className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="text-[11px] font-medium text-muted-foreground">Full Name</span>
              <span className="text-xs font-semibold text-foreground">{user?.name || "N/A"}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-border/40 p-3 bg-muted/20">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="text-[11px] font-medium text-muted-foreground">Email Address</span>
              <span className="text-xs font-semibold text-foreground">{user?.email || "N/A"}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-border/40 p-3 bg-muted/20">
            <Shield className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="text-[11px] font-medium text-muted-foreground">Role Permission</span>
              <span className="text-xs font-semibold text-foreground">{user?.role || "USER"}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-border/40 p-3 bg-muted/20">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="text-[11px] font-medium text-muted-foreground">Account Created</span>
              <span className="text-xs font-semibold text-foreground">
                {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Active"}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
