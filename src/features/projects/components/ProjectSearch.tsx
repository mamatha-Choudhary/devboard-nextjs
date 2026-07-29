"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProjectSearch as SearchInput } from "@/components/ui/project-search";
import { useDebounce } from "@/hooks/useDebounce";

interface ProjectSearchProps {
  placeholder?: string;
  label?: string;
  initialValue?: string;
  resetSignal?: number;
}

/** Renders a search input and updates the URL search parameter after a short pause. */
export const ProjectSearch = ({
  placeholder = "Search projects",
  label = "Search projects",
  initialValue,
  resetSignal = 0,
}: ProjectSearchProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentValue = searchParams.get("search") ?? "";
  const [inputValue, setInputValue] = useState(initialValue ?? currentValue);
  const debouncedValue = useDebounce(inputValue, 300);

  useEffect(() => {
    if (resetSignal > 0) {
      setInputValue("");
    }
  }, [resetSignal]);

  useEffect(() => {
    const nextValue = debouncedValue;
    const urlValue = currentValue;

    if (nextValue === urlValue) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());

    if (nextValue) {
      params.set("search", nextValue);
    } else {
      params.delete("search");
    }

    const query = params.toString();
    const nextUrl = query ? `?${query}` : "?";

    router.replace(`/projects${nextUrl}`);
  }, [currentValue, debouncedValue, router, searchParams]);

  return (
    <SearchInput
      placeholder={placeholder}
      label={label}
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
};
