import { ProjectSearch } from "@/components/ui/project-search";

export function InputPreview() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <p className="mb-3 text-sm font-medium text-foreground">Default</p>
        <input
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
          placeholder="Email"
        />
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <p className="mb-3 text-sm font-medium text-foreground">Search</p>
        <ProjectSearch placeholder="Search projects" label="" />
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <p className="mb-3 text-sm font-medium text-foreground">Disabled</p>
        <input
          disabled
          className="w-full rounded-lg border border-border bg-muted px-3 py-2 text-sm text-muted-foreground outline-none"
          placeholder="Unavailable"
        />
      </div>
    </div>
  );
}
