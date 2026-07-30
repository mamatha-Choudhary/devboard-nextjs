"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeToggleButton from "./ThemeToggleButton";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeToggleButton
      resolvedTheme={resolvedTheme}
      onToggle={handleToggle}
      mounted={mounted}
    />
  );
}
