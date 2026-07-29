import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CardPreview() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>Neutral surface for grouped content.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            This card keeps the layout simple and reusable for settings or summary blocks.
          </p>
        </CardContent>
      </Card>

      <Card interactive>
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>Hover states are enabled for clickable surfaces.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Use the interactive prop when the card should feel like an action surface.
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            View details
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
