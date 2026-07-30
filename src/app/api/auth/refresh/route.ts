import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "Token refresh API endpoint skeleton. Not implemented yet." },
    { status: 501 }
  );
}
