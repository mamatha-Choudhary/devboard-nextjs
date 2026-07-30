/**
 * Authentication Configuration (Single Source of Truth)
 * Centralizes all authentication settings, token lifespans, cookie options, and JWT rules.
 */

const IS_PRODUCTION = process.env.NODE_ENV === "production";

export const AUTH_CONFIG = {
  // Token Expiration Rules
  tokens: {
    accessToken: {
      expiryString: "15m", // 15 minutes
      expirySeconds: 15 * 60,
    },
    refreshToken: {
      expiryString: "7d", // 7 days
      expirySeconds: 7 * 24 * 60 * 60,
    },
    algorithm: "HS256" as const,
  },

  // Cookie Configuration
  cookies: {
    accessToken: {
      name: "devboard_access_token",
    },
    refreshToken: {
      name: "devboard_refresh_token",
    },
    options: {
      httpOnly: true,
      secure: IS_PRODUCTION,
      sameSite: "lax" as const,
      path: "/",
    },
  },

  // Environment Secret Keys (Reads from process.env with fallback for development safety)
  secrets: {
    jwtSecret: process.env.JWT_SECRET || "devboard_default_jwt_secret_key_change_in_prod",
    refreshSecret: process.env.JWT_REFRESH_SECRET || "devboard_default_refresh_secret_key_change_in_prod",
  },
} as const;
