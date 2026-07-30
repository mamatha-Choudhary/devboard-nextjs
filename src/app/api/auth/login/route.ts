import { NextResponse } from "next/server";
import { loginSchema } from "@/features/auth/validation/auth.schema";
import { UserRepository } from "@/features/auth/data/user-repository";
import { comparePassword } from "@/lib/auth/password";
import { createAccessToken, createRefreshToken } from "@/lib/auth/jwt";
import { setAccessTokenCookie, setRefreshTokenCookie } from "@/lib/auth/cookies";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate payload with Zod schema
    const validationResult = loginSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: "Invalid credentials format.",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { email, password } = validationResult.data;

    // 2. Find user by email
    const user = await UserRepository.findByEmail(email);
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    // 3. Compare hashed password
    const isPasswordValid = await comparePassword(password, user.passwordHash);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 }
      );
    }

    // 4. Generate JWT tokens
    const payload = { userId: user.id, email: user.email, role: user.role };
    const accessToken = await createAccessToken(payload);
    const refreshToken = await createRefreshToken(payload);

    // 5. Set HTTP-only cookies
    await setAccessTokenCookie(accessToken);
    await setRefreshTokenCookie(refreshToken);

    // 6. Return user (excluding passwordHash)
    const { passwordHash: _, ...safeUser } = user;

    return NextResponse.json(
      {
        message: "Signed in successfully.",
        user: safeUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
