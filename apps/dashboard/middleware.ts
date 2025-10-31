export { auth as middleware } from 'next-auth';

export const config = {
  matcher: ['/dashboard/:path*', '/templates/:path*', '/settings/:path*', '/meetings/:path*', '/actions/:path*'],
};
