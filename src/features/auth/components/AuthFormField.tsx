import type { ReactNode } from "react";

interface AuthFormFieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

export const AuthFormField = ({ id, label, error, children }: AuthFormFieldProps) => {
  return (
    <div className="space-y-1.5 text-left">
      <label htmlFor={id} className="text-xs font-semibold text-foreground">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
};
