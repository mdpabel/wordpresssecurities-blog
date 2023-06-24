'use client';
import { SignedIn, SignedOut, useUser, ClerkProvider } from '@clerk/nextjs';
import Link from 'next/link';

const AuthNav = () => {
  const user = useUser();
  return (
    <>
      <SignedOut>
        <li>
          <Link href='/login'>Login</Link>
        </li>
      </SignedOut>
      <SignedIn>
        <li className='cursor-pointer'>
          <Link href='/profile'>
            {user?.user?.firstName ? 'Hello ' + user?.user?.firstName : 'Hello'}
          </Link>
        </li>
      </SignedIn>
    </>
  );
};

export default AuthNav;
