import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900",
        secondary:
          "border-transparent bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
        outline:
          "border-slate-300 bg-transparent text-slate-700 dark:border-slate-700 dark:text-slate-200",
        success:
          "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300",
        warning:
          "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/60 dark:bg-amber-950/40 dark:text-amber-300",
        destructive:
          "border-red-200 bg-red-50 text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300",
      },
      size: {
        sm: "px-2 py-0.5 text-[11px]",
        default: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

/** Shared status indicator for metadata and labels. */
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(badgeVariants({ variant, size, className }))} {...props} />
    );
  },
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
