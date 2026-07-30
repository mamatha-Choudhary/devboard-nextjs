import { NextResponse, type NextRequest } from "next/server";
import { AUTH_CONFIG } from "@/lib/auth/auth-config";
import { verifyAccessToken, verifyRefreshToken, createAccessToken } from "@/lib/auth/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get(AUTH_CONFIG.cookies.accessToken.name)?.value;
  const refreshToken = request.cookies.get(AUTH_CONFIG.cookies.refreshToken.name)?.value;

  let isAuthed = false;
  let newAccessToken: string | null = null;

  // 1. Verify Access Token
  if (accessToken) {
    const payload = await verifyAccessToken(accessToken);
    if (payload && payload.userId) {
      isAuthed = true;
    }
  }

  // 2. Auto-refresh if access token expired but valid refresh token exists
  if (!isAuthed && refreshToken) {
    const refreshPayload = await verifyRefreshToken(refreshToken);
    if (refreshPayload && refreshPayload.userId) {
      isAuthed = true;
      newAccessToken = await createAccessToken({
        userId: refreshPayload.userId,
        email: refreshPayload.email,
        role: refreshPayload.role,
      });
    }
  }

  const isProtectedRoute = AUTH_CONFIG.routes.protected.some((route) =>
    pathname.startsWith(route)
  );
  const isAuthRoute = AUTH_CONFIG.routes.auth.some((route) =>
    pathname.startsWith(route)
  );

  // 3. Route Guard: Unauthenticated user accessing protected route
  if (isProtectedRoute && !isAuthed) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    const response = NextResponse.redirect(loginUrl);
    
    // Clear invalid cookies if present
    response.cookies.delete(AUTH_CONFIG.cookies.accessToken.name);
    response.cookies.delete(AUTH_CONFIG.cookies.refreshToken.name);
    return response;
  }

  // 4. Route Guard: Authenticated user accessing auth route (/login, /register, etc.)
  if (isAuthRoute && isAuthed) {
    const response = NextResponse.redirect(
      new URL(AUTH_CONFIG.routes.defaultRedirectAfterLogin, request.url)
    );
    if (newAccessToken) {
      response.cookies.set(AUTH_CONFIG.cookies.accessToken.name, newAccessToken, {
        ...AUTH_CONFIG.cookies.options,
        maxAge: AUTH_CONFIG.tokens.accessToken.expirySeconds,
      });
    }
    return response;
  }

  // 5. Allow request to proceed and attach renewed access token cookie if created
  const response = NextResponse.next();
  if (newAccessToken) {
    response.cookies.set(AUTH_CONFIG.cookies.accessToken.name, newAccessToken, {
      ...AUTH_CONFIG.cookies.options,
      maxAge: AUTH_CONFIG.tokens.accessToken.expirySeconds,
    });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public assets (png, svg, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
