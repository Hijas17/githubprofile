import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const redirectUrl = new URL("/", req.url);
  const response = NextResponse.redirect(redirectUrl.toString());
  response.cookies.set("accessToken", "", {
    httpOnly: true,
    // path: "/",
    expires: new Date(0),
  });

  return response;
}
