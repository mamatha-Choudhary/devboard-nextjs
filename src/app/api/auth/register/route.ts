import { NextResponse } from "next/server";
import { registerSchema } from "@/features/auth/validation/auth.schema";
import { UserRepository } from "@/features/auth/data/user-repository";
import { hashPassword } from "@/lib/auth/password";
import { createAccessToken, createRefreshToken } from "@/lib/auth/jwt";
import { setAccessTokenCookie, setRefreshTokenCookie } from "@/lib/auth/cookies";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate payload with Zod schema
    const validationResult = registerSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          message: "Validation failed.",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, password } = validationResult.data;

    // 2. Check if user already exists
    const existingUser = await UserRepository.findByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { message: "An account with this email already exists." },
        { status: 409 }
      );
    }

    // 3. Hash password
    const passwordHash = await hashPassword(password);

    // 4. Create user in database
    const user = await UserRepository.createUser({
      name,
      email,
      passwordHash,
    });

    // 5. Generate JWT tokens
    const payload = { userId: user.id, email: user.email, role: user.role };
    const accessToken = await createAccessToken(payload);
    const refreshToken = await createRefreshToken(payload);

    // 6. Set HTTP-only cookies
    await setAccessTokenCookie(accessToken);
    await setRefreshTokenCookie(refreshToken);

    // 7. Return user (excluding passwordHash)
    const { passwordHash: _, ...safeUser } = user;

    return NextResponse.json(
      {
        message: "Account created successfully.",
        user: safeUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register API error:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
