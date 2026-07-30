import type { AuthState } from "../types/auth";

/**
 * Auth Hook Skeleton
 * Prepares the contract for future client authentication state management.
 */
export function useAuth(): AuthState {
  return {
    user: null,
    isAuthenticated: false,
    isLoading: false,
  };
}
