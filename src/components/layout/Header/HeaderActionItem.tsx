import { type ReactNode } from "react";

type HeaderActionItemProps = Readonly<{
  icon: ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
  children?: ReactNode;
}>;

export default function HeaderActionItem({
  icon,
  ariaLabel,
  onClick,
  children,
}: HeaderActionItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
    >
      {icon}
      {children}
    </button>
  );
}
