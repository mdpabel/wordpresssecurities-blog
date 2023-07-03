'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';
import '@/styles/sidebar.css';
import Link from 'next/link';
import Button from './Button';
import { SignOutButton } from '@clerk/nextjs';

const sidebarLinks = [
  {
    label: 'Dashboard',
    link: 'dashboard',
    allowed: ['ADMIN', 'GUEST'],
  },
  {
    label: 'Add new post',
    link: 'add-new-post',
    allowed: ['ADMIN', 'GUEST'],
  },
  {
    label: 'All posts',
    link: 'all-posts',
    allowed: ['ADMIN', 'GUEST'],
  },
  {
    label: 'Add New Coupon',
    link: 'add-new-coupon',
    allowed: ['ADMIN'],
  },
  {
    label: 'All coupons',
    link: 'all-coupons',
    allowed: ['ADMIN'],
  },
  {
    label: 'Profile',
    link: 'profile',
    allowed: ['ADMIN', 'GUEST'],
  },
  {
    label: 'Settings',
    link: 'settings',
    allowed: ['ADMIN', 'GUEST'],
  },
];

interface SubItemsType {
  label: string;
  link: string;
}

interface SidebarItemType {
  list: number | null;
  setList?: Dispatch<SetStateAction<null | number>>;
  index: number;
  label: string;
  subItems?: SubItemsType[];
  setToggleSidebar?: Dispatch<SetStateAction<boolean>>;
  toggleSidebar?: boolean;
  link: string;
}

const SidebarItem = ({
  list,
  setList,
  index,
  label,
  link,
}: SidebarItemType) => {
  return (
    <div className={'pt-4'}>
      <div
        onClick={() => (list === index ? setList!(null) : setList!(index))}
        className='flex justify-between w-full pb-3 border-b-2 border-gray-200 cursor-pointer'
      >
        <Link
          prefetch
          href={link}
          className='text-sm leading-tight tracking-tight text-gray-800 capitalize select-none xl:text-lg '
        >
          {label}
        </Link>
      </div>
    </div>
  );
};

function Sidebar() {
  const [list, setList] = useState<number | null>(null);
  const [toggleSidebar, setToggleSidebar] = useState(true);

  return (
    <nav>
      <div
        className={
          (toggleSidebar ? 'sidebar ' : ' ') +
          'overflow-y-scroll fixed left-0 h-79vh h-full w-80 xl:w-64 xl:mr-6 2xl:pr-12 2xl:mr-12 pr-6 border-r-2 border-gray-200  bg-white px-6 xl:pl-0 z-20 top-0 pt-10 transition-transform duration-150 ease-in-out xl:hidden'
        }
      >
        <div>
          <div className='flex items-center justify-between'>
            <Link
              onClick={() => setToggleSidebar(!toggleSidebar)}
              href='/dashboard'
              className='text-2xl font-semibold'
            >
              WPSecurities
            </Link>
            <div
              onClick={() => setToggleSidebar(true)}
              className='pt-8 text-gray-800 '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='icon icon-tabler icon-tabler-x'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </div>
          </div>
          <div>
            {sidebarLinks.map(({ label, link, allowed }, index) => {
              return (
                <SidebarItem
                  link={link}
                  setToggleSidebar={(val) => setToggleSidebar(val)}
                  list={list}
                  setList={setList}
                  label={label}
                  key={label}
                  index={index}
                />
              );
            })}
          </div>

          <div className='absolute bottom-10'>
            <Button>Logout</Button>
          </div>
        </div>
      </div>
      <div
        onClick={() => setToggleSidebar(false)}
        className='fixed top-0 left-0 z-50 flex items-center justify-center w-8 h-8 mt-10 bg-gray-800 rounded-r-lg text-gray-50 xl:hidden'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='icon icon-tabler icon-tabler-chevron-right'
          width={44}
          height={44}
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <polyline points='9 6 15 12 9 18' />
        </svg>
      </div>

      <div className='hidden xl:block'>
        <div className='px-12 mr-12 d-sidebar w-80 xl:w-64 2xl:w-96' />
        <div
          className={
            'd-sidebar  fixed overflow-y-auto h-79vh h-full w-80 xl:w-64 2xl:w-96 xl:mr-6 2xl:pr-12 2xl:mr-12 pr-6 border-r-2 border-gray-200  bg-white px-6 xl:pl-12 z-0 top-0 pt-10 transition-transform duration-150 ease-in-out'
          }
        >
          <div>
            <Link href='/' className='text-2xl font-semibold'>
              WPSecurities
            </Link>
            <div className='pt-8'>
              {sidebarLinks.map(({ label, link, allowed }, index) => {
                return (
                  <SidebarItem
                    link={link}
                    list={list}
                    setList={setList}
                    label={label}
                    key={label}
                    index={index}
                  />
                );
              })}
            </div>
          </div>

          <div className='absolute bottom-10'>
            <div className='px-10 py-2 text-white bg-black rounded'>
              <SignOutButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
