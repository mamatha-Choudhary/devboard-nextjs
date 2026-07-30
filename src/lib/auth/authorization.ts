import type { User } from "@/features/auth/types/auth";
import type { UserRole } from "./auth-config";

/**
 * Checks if a user possesses a specific role.
 */
export function hasRole(user: User | null | undefined, role: UserRole): boolean {
  if (!user || !user.role) return false;
  return user.role.toUpperCase() === role.toUpperCase();
}

/**
 * Checks if a user possesses any of the specified roles.
 */
export function hasAnyRole(user: User | null | undefined, roles: UserRole[]): boolean {
  if (!user || !user.role) return false;
  const userRole = user.role.toUpperCase();
  return roles.some((r) => r.toUpperCase() === userRole);
}
