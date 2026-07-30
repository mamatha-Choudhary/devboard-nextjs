import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { AUTH_CONFIG } from "@/lib/auth/auth-config";
import { verifyRefreshToken, createAccessToken } from "@/lib/auth/jwt";
import { setAccessTokenCookie, clearAuthCookies } from "@/lib/auth/cookies";

export async function POST() {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get(AUTH_CONFIG.cookies.refreshToken.name)?.value;

    if (!refreshToken) {
      await clearAuthCookies();
      return NextResponse.json(
        { message: "Refresh token missing." },
        { status: 401 }
      );
    }

    const payload = await verifyRefreshToken(refreshToken);
    if (!payload || !payload.userId) {
      await clearAuthCookies();
      return NextResponse.json(
        { message: "Invalid or expired refresh token." },
        { status: 401 }
      );
    }

    // Issue new access token
    const newAccessToken = await createAccessToken({
      userId: payload.userId,
      email: payload.email,
      role: payload.role,
    });

    await setAccessTokenCookie(newAccessToken);

    return NextResponse.json(
      { success: true, message: "Token refreshed successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/auth/refresh error:", error);
    await clearAuthCookies();
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
