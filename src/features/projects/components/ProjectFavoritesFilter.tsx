"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectFavoritesFilterProps {
  checked?: boolean;
}

/** Renders an interactive button that toggles the favorites-only query parameter. */
export const ProjectFavoritesFilter = ({ checked = false }: ProjectFavoritesFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleToggle = () => {
    const nextChecked = !checked;
    const params = new URLSearchParams(searchParams.toString());

    if (nextChecked) {
      params.set("favorites", "true");
    } else {
      params.delete("favorites");
    }

    const query = params.toString();
    const nextUrl = query ? `?${query}` : "?";

    router.replace(`/projects${nextUrl}`);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-muted-foreground">Filter</span>
      <Button
        type="button"
        variant={checked ? "secondary" : "outline"}
        onClick={handleToggle}
        className={`h-10 gap-2 border ${
          checked
            ? "border-amber-400/50 bg-amber-500/10 text-amber-600 dark:text-amber-400"
            : "border-border"
        }`}
      >
        <Star
          className={`h-4 w-4 ${
            checked ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
          }`}
        />
        <span className="text-xs">Favorites Only</span>
      </Button>
    </div>
  );
};
