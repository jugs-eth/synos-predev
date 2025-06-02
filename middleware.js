import { NextResponse } from 'next/server';

export function middleware(request) {
  // This middleware doesn't modify the request
  // It's just here to ensure Next.js doesn't try to bundle MongoDB for the client
  return NextResponse.next();
}

// Only run this middleware for API routes
export const config = {
  matcher: '/api/:path*',
}; 