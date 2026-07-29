import { LayoutGrid } from "lucide-react";

export default function SidebarBrand() {
  return (
    <div className="flex items-center gap-3 border-b border-border/60 pb-3.5 mb-3 px-1">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-xs">
        <LayoutGrid className="h-4.5 w-4.5" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-sm font-semibold tracking-tight text-foreground">
          DevBoard
        </h2>
        <span className="text-xs text-muted-foreground font-normal">
          Manage your workspace
        </span>
      </div>
    </div>
  );
}
