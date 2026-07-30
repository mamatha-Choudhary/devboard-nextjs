import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { AUTH_CONFIG } from "@/lib/auth/auth-config";
import { verifyAccessToken } from "@/lib/auth/jwt";
import { UserRepository } from "@/features/auth/data/user-repository";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(AUTH_CONFIG.cookies.accessToken.name)?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthenticated." },
        { status: 401 }
      );
    }

    const payload = await verifyAccessToken(token);
    if (!payload || !payload.userId) {
      return NextResponse.json(
        { message: "Invalid or expired access token." },
        { status: 401 }
      );
    }

    const user = await UserRepository.findById(payload.userId);
    if (!user) {
      return NextResponse.json(
        { message: "User not found." },
        { status: 404 }
      );
    }

    const { passwordHash: _, ...safeUser } = user;

    return NextResponse.json(
      { user: safeUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/auth/me error:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
