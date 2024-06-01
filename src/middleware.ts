import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  const cookieStore = cookies();
  const tokenCookie = cookieStore.get("accessToken");
  const token = tokenCookie ? tokenCookie.value : null;

  const { pathname } = req.nextUrl;

  const excludedPaths = ["/auth", "/api/auth", "/_next", ".", "/favicon.ico"];

  const isExcludedPath = excludedPaths.some(path => pathname.startsWith(path) || pathname.includes(path));

  if (isExcludedPath) {
    if (token && pathname === "/auth/login") {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api/auth/login).*)"],
};