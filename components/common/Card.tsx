import React from 'react';
import Link from 'next/link';
import { BlogType } from '@/types/models';
import Image from 'next/image';
import ResponsiveImage from './ResponsiveImage';

interface ICard {
  className?: string;
  blog: BlogType;
}

export const BigCard = ({ className = '', blog }: ICard) => {
  return (
    <div className={className}>
      <div
        className={`flex flex-col justify-between w-full h-full bg-white p-8 rounded-md shadow `}
      >
        <Link className='block w-full max-h-[50%]' href={'/blog/' + blog?.slug}>
          <Image
            width={400}
            height={400}
            className='w-full h-full'
            src={blog?.coverImage}
            alt={blog?.title}
          />
        </Link>
        <div className='flex flex-col justify-between space-y-4 h-1/2'>
          <Link href={'/blog/' + blog?.slug}>
            <div className='space-y-1'>
              <span className='font-medium text-gray-700'>
                11 December 2022
              </span>
              <h2 className='text-lg font-semibold tracking-wide'>
                {blog?.title?.slice(0, 45)}...
              </h2>
              <p className='text-sm tracking-wide'>
                {blog?.metaDescription?.slice(0, 100)}
              </p>
            </div>
          </Link>
          <div className='flex items-center space-x-4'>
            <Image
              width='40'
              height='40'
              className='w-10 h-10 rounded-full'
              src={blog?.author?.profilePic}
              alt={blog?.author?.firstName + ' ' + blog?.author?.lastName}
            />
            <div>
              <h4 className='text-sm font-semibold'>
                {blog?.author?.firstName + ' ' + blog?.author?.lastName}
              </h4>
              <h6 className='text-sm text-gray-700'>
                {' '}
                {blog?.author?.occupation}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SmallCard = ({ className = '', blog }: ICard) => {
  return (
    <div
      className={`flex px-3 md:px-2 py-4 bg-white rounded shadow ` + className}
    >
      <Image
        width={100}
        height={100}
        className='w-2/5 mr-2'
        src={blog?.coverImage}
        alt={blog?.title}
      />
      <div className='w-3/5 space-y-3'>
        <div>
          <span className='text-sm font-medium text-gray-700'>
            11 December 2022
          </span>
          <h2 className='text-sm font-medium'>
            {blog?.title?.slice(0, 50)}...
          </h2>
        </div>
        <div className='flex space-x-2 md:space-x-4'>
          <Image
            width='30'
            height='30'
            className='w-8 h-8 rounded-full'
            src={blog?.author?.profilePic}
            alt={blog?.author?.firstName + ' ' + blog?.author?.lastName}
          />
          <div>
            <h4 className='text-xs font-semibold'>
              {blog?.author?.firstName + ' ' + blog?.author?.lastName}
            </h4>
            <h6 className='text-xs text-gray-700'>
              {blog?.author?.occupation}
            </h6>
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
