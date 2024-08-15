import { NextResponse } from 'next/server';

export function middleware(request) {
  const cookies = request.cookies.getAll();
  const authToken = cookies.find((cookie) => cookie.name === 'authToken');
  const expires = cookies.find((cookie) => cookie.name === 'expires');
  if (request.nextUrl.pathname === '/authentication/login') {
    if (authToken) {
      const expiryDate = new Date(expires.value);
      if (expiryDate > new Date()) {
        return NextResponse.redirect(new URL('/', request.url));
      }
    }
  } else {
    // #UNDO
    // if (!authToken) {
    //   return NextResponse.redirect(new URL('/authentication/login', request.url));
    // }
    // const expiryDate = new Date(expires);
    // if (expiryDate < new Date()) {
    //   return NextResponse.redirect(new URL('/authentication/login', request.url));
    // }
  }
  return NextResponse.next();
}

// Define the paths where the middleware should not be applied
export const config = {
  matcher: ['/', '/authentication/login', '/((?!_next/|static/|public/|favicon.ico|api).*)'],
};
