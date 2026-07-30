import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to DevBoard — Manage your engineering workspace and team projects effectively.",
};

export default function HomePage() {
  return <h1>Home Page</h1>;
}
