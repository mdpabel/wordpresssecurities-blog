'use client';
import React, { useState } from 'react';
import {
  BarIcon,
  CrossIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from './icons';
import Link from 'next/link';
import ComponentWrapper from './ComponentWrapper';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className='relative'
      style={{
        background: '#F0F0F0',
      }}
    >
      <ComponentWrapper>
        <nav className='flex items-center justify-between py-5'>
          <Link href='/' className='text-xl font-bold md:text-2xl'>
            WPSecurities.
          </Link>
          <ul className='items-center hidden space-x-8 md:flex'>
            <li>
              <Link className='text-lg font-medium' href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='text-lg font-medium' href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='text-lg font-medium' href='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='text-lg font-medium' href='/'>
                Home
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
            className='block md:hidden'
            onClick={() => setOpen(!open)}
            type='button'
          >
            {open ? (
              <CrossIcon className='w-6 h-6 font-bold text-gray-800' />
            ) : (
              <BarIcon className='w-6 h-6 font-bold text-gray-800' />
            )}
          </button>
        </nav>
        <div
          style={{
            display: open ? 'block' : 'none',
          }}
          className='block w-full md:hidden'
        >
          <ul className='absolute right-0 z-50 flex flex-col w-full px-4 mt-4 bg-gray-100 rounded-lg md:hidden top-10'>
            <li onClick={() => setOpen(false)} className='border-b'>
              <Link
                href='/about'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded '
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li onClick={() => setOpen(false)} className='border-b'>
              <Link
                href='/contact'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 '
              >
                Home
              </Link>
            </li>
            <li onClick={() => setOpen(false)} className='border-b'>
              <Link
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 '
                href='https://drive.google.com/file/d/1A6I4qF3WBwlKskaAT23G5volEAJ-9i4T/view?usp=share_link'
                target='_blank'
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default Navbar;
