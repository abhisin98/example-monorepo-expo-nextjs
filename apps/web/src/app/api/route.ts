import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return new NextResponse(JSON.stringify({ name: "John Doe" }), { status: 200 });
}
