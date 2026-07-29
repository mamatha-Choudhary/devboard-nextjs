export default function SidebarFooter() {
  return (
    <div className="mt-auto border-t border-border/60 pt-3 px-1">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>Version</span>
        <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-mono font-medium text-muted-foreground">
          v0.1.0
        </span>
      </div>
    </div>
  );
}
