import { authMiddleware } from '@clerk/nextjs/server';
import { redirectToSignIn } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

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
  afterAuth(auth, req, evt) {
    // const apiUrl = process.env.SITE_URL + 'api/profile';
    // fetch(apiUrl)
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    const apiUrl = process.env.SITE_URL + 'api/views';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => console.log(json));
  },
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
