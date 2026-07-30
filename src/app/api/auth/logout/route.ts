import { NextResponse } from "next/server";
import { clearAuthCookies } from "@/lib/auth/cookies";

export async function POST() {
  try {
    await clearAuthCookies();
    return NextResponse.json(
      { message: "Signed out successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Logout API error:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
