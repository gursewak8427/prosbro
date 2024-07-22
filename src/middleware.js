// src/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const cookies = request.cookies.getAll();
  const authToken = cookies.find((cookie) => cookie.name === 'authToken');
  if (!authToken) {
    // Redirect to login if no authToken cookie found
    return NextResponse.redirect(new URL('/authentication/login', request.url));
  }

  // Check if the cookie is expired
  const expiryDate = new Date(authToken.expires);
  if (expiryDate < new Date()) {
    // Redirect to login if the cookie is expired
    return NextResponse.redirect(new URL('/authentication/login', request.url));
  }

  // Allow the request to continue if cookie is valid
  return NextResponse.next();
}

// Define the paths where the middleware should be applied
export const config = {
  matcher: ['/((?!_next/|static/|public/|favicon.ico|authentication|api).*)'],
};
