import { Card } from "@/components/ui/card";

export default function ProfileLoading() {
  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto w-full space-y-6 animate-pulse">
      <div className="space-y-2">
        <div className="h-8 w-48 rounded-md bg-muted" />
        <div className="h-4 w-72 rounded-md bg-muted/60" />
      </div>

      <Card className="p-6 space-y-6 border-border bg-card">
        <div className="flex items-center gap-4 pb-6 border-b border-border/60">
          <div className="h-16 w-16 rounded-full bg-muted" />
          <div className="space-y-2">
            <div className="h-5 w-40 rounded-md bg-muted" />
            <div className="h-3 w-56 rounded-md bg-muted/60" />
            <div className="h-4 w-24 rounded-md bg-muted/80" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-lg border border-border/40 p-3 bg-muted/20"
            >
              <div className="h-4 w-4 rounded bg-muted" />
              <div className="space-y-1.5 flex-1">
                <div className="h-3 w-20 rounded bg-muted/60" />
                <div className="h-4 w-32 rounded bg-muted" />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
