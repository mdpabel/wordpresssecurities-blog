import { authMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { getCurrentUser } from './utils/getCurrentUser';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/login',
    '/signup',
    '/about-us',
    '/blog',
    '/blog/:path*',
    '/api/blog/:path*',
    '/hosting-reviews',
    '/api/views',
    '/api/views/:path*',
    '/coupons',
  ],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
