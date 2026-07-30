export const AUTH_ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  DASHBOARD: "/dashboard",
} as const;

export const AUTH_MESSAGES = {
  LOGIN_SUCCESS: "Successfully signed in.",
  REGISTER_SUCCESS: "Account created successfully.",
  LOGOUT_SUCCESS: "Signed out successfully.",
  SESSION_EXPIRED: "Session expired. Please sign in again.",
} as const;
