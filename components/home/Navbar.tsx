'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  BarIcon,
  CrossIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from '@/components/common/icons';
import Link from 'next/link';
import ComponentWrapper from '../common/ComponentWrapper';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const event = (e: any) => {
      if (ref.current && !ref.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', event, true);

    return () => document.removeEventListener('click', event, true);
  }, []);

  return (
    <div
      className='relative'
      style={{
        background: '#F0F0F0',
      }}
    >
      <ComponentWrapper>
        <nav ref={ref} className='flex items-center justify-between py-5'>
          <Link href='/' className='text-xl font-bold md:text-2xl'>
            WPSecurities.
          </Link>
          <ul className='items-center hidden space-x-8 lg:flex'>
            <li>
              <Link className='text-lg font-medium' href='/'>
                Blog
              </Link>
            </li>
            <li>
              <Link className='text-lg font-medium' href='/'>
                Hosting Reviews
              </Link>
            </li>
            <li>
              <Link className='text-lg font-medium' href='/'>
                Vulnerabilities
              </Link>
            </li>
            <li>
              <Link className='text-lg font-medium' href='/'>
                Coupons
              </Link>
            </li>
            <li>
              <Link className='text-lg font-medium' href='/'>
                Security Providers
              </Link>
            </li>
            <li>
              <Link className='text-lg font-medium' href='/dashboard'>
                Dashboard
              </Link>
            </li>
          </ul>

          <ul className='hidden space-x-4 md:flex'>
            <li>
              <Link href='/'>
                <FacebookIcon />
              </Link>
            </li>
            <li>
              <Link href='/'>
                <TwitterIcon />
              </Link>
            </li>
            <li>
              <Link href='/'>
                <LinkedinIcon />
              </Link>
            </li>
          </ul>

          <button
            className='block lg:hidden'
            onClick={() => setOpen(!open)}
            type='button'
          >
            {open ? (
              <CrossIcon className='w-6 h-6 font-bold text-gray-800' />
            ) : (
              // @ts-ignore
              <div>
                <BarIcon className='w-6 h-6 font-bold text-gray-800' />
              </div>
            )}
          </button>
        </nav>
        <div
          style={{
            display: open ? 'block' : 'none',
          }}
          className='block w-full md:hidden'
        >
          <ul className='md:w-[90%] mx-auto  lg:px-0 absolute right-0 z-50 flex flex-col w-full px-4 mt-4 bg-gray-100 rounded-lg lg:hidden top-10'>
            <li onClick={() => setOpen(false)} className='border-b'>
              <Link
                href='/contact'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 '
              >
                Blog
              </Link>
            </li>
            <li onClick={() => setOpen(false)} className='border-b'>
              <Link
                href='/contact'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 '
              >
                Hosting Reviews
              </Link>
            </li>
            <li onClick={() => setOpen(false)} className='border-b'>
              <Link
                href='/contact'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 '
              >
                Vulnerabilities
              </Link>
            </li>
            <li onClick={() => setOpen(false)} className='border-b'>
              <Link
                href='/contact'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 '
              >
                Coupons
              </Link>
            </li>
            <li onClick={() => setOpen(false)} className='border-b'>
              <Link
                href='/contact'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 '
              >
                Security Providers
              </Link>
            </li>
            <li onClick={() => setOpen(false)} className='border-b'>
              <Link
                href='/dashboard'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 '
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default Navbar;
