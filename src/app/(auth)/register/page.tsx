"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AuthLayout,
  AuthHeader,
  AuthFooter,
  AuthFormField,
  PasswordInput,
} from "@/features/auth/components";
import { registerSchema, type RegisterSchema } from "@/features/auth/validation/auth.schema";
import { AuthService } from "@/features/auth/services/auth.service";

export default function RegisterPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterSchema) => {
    try {
      setErrorMessage(null);
      await AuthService.register(data);
      router.push("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Failed to create account. Please try again.");
      }
    }
  };

  return (
    <AuthLayout>
      <AuthHeader
        title="Create Account"
        subtitle="Sign up for a DevBoard workspace account to get started."
      />

      {errorMessage && (
        <div className="mb-4 flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <AuthFormField id="name" label="Full Name" error={errors.name?.message}>
          <Input
            id="name"
            type="text"
            placeholder="Mamatha Choudhary"
            autoComplete="name"
            disabled={isSubmitting}
            {...register("name")}
          />
        </AuthFormField>

        <AuthFormField id="email" label="Email Address" error={errors.email?.message}>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            autoComplete="email"
            disabled={isSubmitting}
            {...register("email")}
          />
        </AuthFormField>

        <AuthFormField id="password" label="Password" error={errors.password?.message}>
          <PasswordInput
            id="password"
            placeholder="At least 8 characters"
            autoComplete="new-password"
            disabled={isSubmitting}
            {...register("password")}
          />
        </AuthFormField>

        <AuthFormField id="confirmPassword" label="Confirm Password" error={errors.confirmPassword?.message}>
          <PasswordInput
            id="confirmPassword"
            placeholder="Re-enter password"
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
              <span>Creating account...</span>
            </div>
          ) : (
            "Create Account"
          )}
        </Button>
      </form>

      <AuthFooter
        promptText="Already have an account?"
        linkText="Sign in here"
        linkHref="/login"
      />
    </AuthLayout>
  );
}
