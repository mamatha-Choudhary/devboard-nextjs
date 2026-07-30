"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AuthLayout,
  AuthHeader,
  AuthFooter,
  AuthFormField,
  PasswordInput,
} from "@/features/auth/components";
import {
  resetPasswordSchema,
  type ResetPasswordSchema,
} from "@/features/auth/validation/auth.schema";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (_data: ResetPasswordSchema) => {
    // Simulate password reset API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSuccess(true);
    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };

  return (
    <AuthLayout>
      <AuthHeader
        title="Reset Password"
        subtitle="Create a new secure password for your DevBoard workspace."
      />

      {isSuccess ? (
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <p className="text-sm font-medium text-foreground">
            Password reset successfully!
          </p>
          <p className="text-xs text-muted-foreground">
            Redirecting to sign in page...
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          <AuthFormField id="password" label="New Password" error={errors.password?.message}>
            <PasswordInput
              id="password"
              placeholder="At least 8 characters"
              autoComplete="new-password"
              disabled={isSubmitting}
              {...register("password")}
            />
          </AuthFormField>

          <AuthFormField id="confirmPassword" label="Confirm New Password" error={errors.confirmPassword?.message}>
            <PasswordInput
              id="confirmPassword"
              placeholder="Re-enter new password"
              autoComplete="new-password"
              disabled={isSubmitting}
              {...register("confirmPassword")}
            />
          </AuthFormField>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-10 mt-2 font-medium"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Resetting password...</span>
              </div>
            ) : (
              "Reset Password"
            )}
          </Button>
        </form>
      )}

      <AuthFooter
        promptText="Back to"
        linkText="Sign in page"
        linkHref="/login"
      />
    </AuthLayout>
  );
}
