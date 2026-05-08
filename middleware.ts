import { NextResponse, type NextRequest } from "next/server";

// Propagates the request pathname into a header so the root server layout
// can pick the right `<html lang>` per locale. Without this, Next.js's single
// root layout would render `lang="en"` for every URL — including /fr and /nl
// — and Googlebot would index translated pages as English content.
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

// Skip Next internals and any path with a file extension (assets, OG images,
// favicon, sitemap.xml, robots.txt). Keeps middleware overhead near zero.
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.).*)"],
};
