"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface ProjectFavoritesFilterProps {
  checked?: boolean;
}

/** Renders a checkbox that toggles the favorites-only query parameter. */
export const ProjectFavoritesFilter = ({ checked = false }: ProjectFavoritesFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (nextChecked: boolean) => {
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
    <label className="flex items-center gap-2 text-sm text-gray-700">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => handleChange(event.target.checked)}
      />
      <span>Favorites Only</span>
    </label>
  );
};
