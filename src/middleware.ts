import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  const cookieStore = cookies();
  const userCookie = cookieStore.get("user");
  let user = null;

  if (userCookie) {
    user = JSON.parse(userCookie.value);
  }

  // Exclude the paths related to auth and public assets
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/auth") || pathname.startsWith("/api/auth") || pathname.startsWith("/_next") ||
  pathname.includes(".")) {
    if (user && pathname === "/auth/login") {
      return NextResponse.redirect(new URL("/", req.url));
    }
    if (!user && pathname === "/auth/logout") {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
    return NextResponse.next();
  }

  if (!user) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/auth/login).*)"],
};
