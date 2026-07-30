import { NextResponse, type NextRequest } from "next/server";

/**
 * Next.js Middleware Skeleton
 * Prepared for future authentication route protection and token verification.
 */
export function middleware(_request: NextRequest) {
  // Passthrough response until authentication rules are configured in Phase 2
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public assets
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
