import { updateUser } from "@/actions/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    const result = await updateUser(data);
    return NextResponse.json(result);
  } catch (error) {
    console.error("API error:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
