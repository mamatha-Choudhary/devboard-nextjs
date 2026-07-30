import { cookies } from "next/headers";
import { AUTH_CONFIG } from "./auth-config";

/**
 * Sets the access token HTTP-only cookie.
 */
export async function setAccessTokenCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_CONFIG.cookies.accessToken.name, token, {
    ...AUTH_CONFIG.cookies.options,
    maxAge: AUTH_CONFIG.tokens.accessToken.expirySeconds,
  });
}

/**
 * Sets the refresh token HTTP-only cookie.
 */
export async function setRefreshTokenCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set(AUTH_CONFIG.cookies.refreshToken.name, token, {
    ...AUTH_CONFIG.cookies.options,
    maxAge: AUTH_CONFIG.tokens.refreshToken.expirySeconds,
  });
}

/**
 * Clears both access and refresh authentication cookies.
 */
export async function clearAuthCookies(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(AUTH_CONFIG.cookies.accessToken.name);
  cookieStore.delete(AUTH_CONFIG.cookies.refreshToken.name);
}
