import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_CONFIG } from "./auth-config";
import { verifyAccessToken } from "./jwt";
import { UserRepository } from "@/features/auth/data/user-repository";
import type { User } from "@/features/auth/types/auth";
import { UnauthorizedError } from "./errors";

export interface SessionInfo {
  user: User | null;
  isAuthenticated: boolean;
}

/**
 * Resolves the currently authenticated User from request cookies.
 */
export async function getCurrentUser(): Promise<User | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTH_CONFIG.cookies.accessToken.name)?.value;

    if (!token) return null;

    const payload = await verifyAccessToken(token);
    if (!payload || !payload.userId) return null;

    const user = await UserRepository.findById(payload.userId);
    if (!user) return null;

    const { passwordHash: _, ...safeUser } = user;
    return safeUser;
  } catch {
    return null;
  }
}

/**
 * Returns session metadata containing current user and authentication status.
 */
export async function getSession(): Promise<SessionInfo> {
  const user = await getCurrentUser();
  return {
    user,
    isAuthenticated: Boolean(user),
  };
}

/**
 * Checks if the request is from an authenticated user.
 */
export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser();
  return Boolean(user);
}

/**
 * Guards Server Components or Server Actions, enforcing authentication.
 * Throws UnauthorizedError or redirects to /login.
 */
export async function requireAuth(shouldRedirect = true): Promise<User> {
  const user = await getCurrentUser();

  if (!user) {
    if (shouldRedirect) {
      redirect(AUTH_CONFIG.routes.defaultRedirectAfterLogout);
    }
    throw new UnauthorizedError();
  }

  return user;
}
