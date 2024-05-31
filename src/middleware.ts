import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  const cookieStore = cookies();
  const userCookie = cookieStore.get("user");
  const user = userCookie ? JSON.parse(userCookie.value) : null;

  const { pathname } = req.nextUrl;

  // Paths to exclude from the middleware
  const excludedPaths = ["/auth", "/api/auth", "/_next", ".", "/favicon.ico"];

  // Check if the request pathname matches any of the excluded paths
  const isExcludedPath = excludedPaths.some(path => pathname.startsWith(path) || pathname.includes(path));

  if (isExcludedPath) {
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