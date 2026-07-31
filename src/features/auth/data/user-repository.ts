import type { User } from "../types/auth";
import { hashPassword } from "@/lib/auth/password";

export interface StoredUser extends User {
  passwordHash: string;
}

// In-memory user database initialized with a pre-hashed demo user
const usersStore: Map<string, StoredUser> = new Map();

let isSeeded = false;

async function seedDemoUser() {
  if (isSeeded) return;
  const demoPasswordHash = await hashPassword("password123");
  const demoUser: StoredUser = {
    id: "user-1",
    name: "Mamatha Choudhary",
    email: "mamatha@example.com",
    role: "Senior Engineer",
    passwordHash: demoPasswordHash,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  usersStore.set(demoUser.email.toLowerCase(), demoUser);
  isSeeded = true;
}

export class UserRepository {
  static async findByEmail(email: string): Promise<StoredUser | null> {
    await seedDemoUser();
    const normalizedEmail = email.toLowerCase().trim();
    return usersStore.get(normalizedEmail) || null;
  }

  static async findById(id: string): Promise<StoredUser | null> {
    await seedDemoUser();
    for (const user of usersStore.values()) {
      if (user.id === id) return user;
    }
    if (id === "user-1") {
      return usersStore.get("mamatha@example.com") || null;
    }
    return null;
  }

  static async createUser(data: {
    name: string;
    email: string;
    passwordHash: string;
    role?: string;
  }): Promise<StoredUser> {
    await seedDemoUser();
    const normalizedEmail = data.email.toLowerCase().trim();

    const newUser: StoredUser = {
      id: `user-${Date.now()}`,
      name: data.name,
      email: normalizedEmail,
      role: data.role || "Developer",
      passwordHash: data.passwordHash,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    usersStore.set(normalizedEmail, newUser);
    return newUser;
  }
}
