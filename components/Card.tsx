import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';

export const BigCard = ({ className = '' }: { className?: string }) => {
  return (
    <div className={className}>
      <div
        className={`flex flex-col w-full h-full bg-white p-8 rounded-md shadow `}
      >
        <img
          width='400'
          height='400'
          className='w-full max-h-[50%]'
          src='https://www.elegantthemes.com/blog/wp-content/uploads/2021/12/wordpress-hacked-featured-image-1.jpg'
          alt=''
        />
        <div className='space-y-4 h-1/2'>
          <div className='space-y-1'>
            <span className='font-medium text-gray-700'>11 December 2022</span>
            <h2 className='text-lg font-semibold tracking-wide'>
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h2>
            <p className='text-sm tracking-wide'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              aperiam adipisicing elit. Rem, aperiam.
            </p>
          </div>
          <div className='flex items-center space-x-4'>
            <img
              width='40'
              height='40'
              className='w-10 h-10 rounded-full'
              src='https://avatars.githubusercontent.com/u/64641522?s=400&v=4'
              alt=''
            />
            <div>
              <h4 className='text-sm font-semibold'>MD Pabel</h4>
              <h6 className='text-sm text-gray-700'>Software engineer</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SmallCard = ({ className = '' }: { className?: string }) => {
  return (
    <div
      className={`flex px-3 md:px-2 py-4 bg-white rounded shadow ` + className}
    >
      <img
        width='60'
        height='60'
        className='w-2/5'
        src='https://www.elegantthemes.com/blog/wp-content/uploads/2021/12/wordpress-hacked-featured-image-1.jpg'
        alt=''
      />
      <div className='w-3/5 space-y-3'>
        <div>
          <span className='text-sm font-medium text-gray-700'>
            11 December 2022
          </span>
          <h2 className='text-sm font-medium'>
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </h2>
        </div>
        <div className='flex space-x-2 md:space-x-4'>
          <img
            width='30'
            height='30'
            className='w-8 h-8 rounded-full'
            src='https://avatars.githubusercontent.com/u/64641522?s=400&v=4'
            alt=''
          />
          <div>
            <h4 className='text-xs font-semibold'>MD Pabel</h4>
            <h6 className='text-xs text-gray-700'>Software engineer</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HostingCard = () => {
  return (
    <div className='flex flex-col h-56 p-5 space-y-6 bg-white rounded shadow'>
      <div className='flex items-center space-x-4 h-1/2'>
        <img
          width={100}
          height={100}
          src='https://www.wpbeginner.com/wp-content/uploads/2014/01/sitegroudcoupon.png'
          alt=''
        />
        <h2 className='text-xl font-semibold'>Siteground</h2>
      </div>
      <p className='h-1/2'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
        laudantium{' '}
        <Link
          style={{
            color: '#FF6200',
          }}
          href='/'
        >
          Learn more...
        </Link>
      </p>
    </div>
  );
};

// 73
