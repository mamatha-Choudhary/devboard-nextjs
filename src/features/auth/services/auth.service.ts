import type { User, LoginCredentials, RegisterCredentials } from "../types/auth";

export class AuthService {
  static async login(credentials: LoginCredentials): Promise<{ user: User }> {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to sign in.");
    }

    return data;
  }

  static async register(credentials: RegisterCredentials): Promise<{ user: User }> {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create account.");
    }

    return data;
  }

  static async logout(): Promise<void> {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      throw new Error(data.message || "Failed to sign out.");
    }
  }

  static async getCurrentUser(): Promise<User | null> {
    const response = await fetch("/api/auth/me");

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.user;
  }
}
