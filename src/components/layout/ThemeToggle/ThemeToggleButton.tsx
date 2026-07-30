import { Sun, Moon } from "lucide-react";

type ThemeToggleButtonProps = Readonly<{
  resolvedTheme?: string;
  onToggle: () => void;
  mounted: boolean;
}>;

export default function ThemeToggleButton({
  resolvedTheme,
  onToggle,
  mounted,
}: ThemeToggleButtonProps) {
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} theme`
          : "Toggle theme"
      }
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
    >
      {mounted ? (
        isDark ? (
          <Moon className="h-4.5 w-4.5 transition-transform duration-200" />
        ) : (
          <Sun className="h-4.5 w-4.5 transition-transform duration-200" />
        )
      ) : (
        <span className="h-4.5 w-4.5 rounded-full border border-current opacity-20" />
      )}
    </button>
  );
}
