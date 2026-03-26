import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access")?.value;
  const { pathname } = request.nextUrl;

  console.log("TOKEN:", token);


  if (!token && pathname.startsWith("/home")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  
  if (token && (pathname === "/" || pathname === "/login")) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/home/:path*"],
};