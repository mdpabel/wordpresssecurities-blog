import React from 'react';
import Link from 'next/link';
import { BlogType } from '@/types/models';
import Image from 'next/image';
import ResponsiveImage from './ResponsiveImage';

interface ICard {
  className?: string;
  blog: BlogType;
  hasBody?: boolean;
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
            className='object-cover object-center w-full h-full'
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
                {blog?.title?.slice(0, 45)}{' '}
                {blog?.title.length > 45 ? '...' : ''}
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
              className='object-cover object-center w-10 h-10 rounded-full'
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

interface ISmallCard {
  className?: string;
  blog: BlogType;
  hasBody?: boolean;
  title?: number;
  body?: number;
  titleClass?: string;
}

export const SmallCard = ({
  className = '',
  blog,
  hasBody,
  title = 50,
  body = 100,
  titleClass = '',
}: ISmallCard) => {
  return (
    <div
      className={`flex px-3 md:px-2 py-4 bg-white rounded shadow ` + className}
    >
      <Link className='w-2/5 mr-2' href={'/blog/' + blog?.slug}>
        <Image
          className='object-cover object-center w-full h-full'
          width={300}
          height={300}
          src={blog?.coverImage}
          alt={blog?.title}
        />
      </Link>
      <div className='w-3/5 space-y-3'>
        <Link href={'/blog/' + blog?.slug}>
          <div>
            <span className='text-sm font-medium text-gray-700'>
              11 December 2022
            </span>
            <h2 className={`text-sm font-medium ` + titleClass}>
              {blog?.title?.slice(0, title)}{' '}
              {blog?.title.length > title ? '...' : ''}
            </h2>
            {hasBody && (
              <p className='text-sm tracking-wide'>
                {blog?.metaDescription?.slice(0, body)}...
              </p>
            )}
          </div>
        </Link>
        <div className='flex space-x-2 md:space-x-4'>
          <Image
            width='30'
            height='30'
            className='object-cover object-center w-8 h-8 rounded-full'
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

interface IHostingCard {
  imgUrl: string;
  text: string;
  title: string;
  alt: string;
}

export const HostingCard = ({
  imgUrl,
  text = '',
  alt,
  title,
}: IHostingCard) => {
  return (
    <div className='flex flex-col h-56 p-5 space-y-6 bg-white rounded shadow'>
      <div className='flex items-center space-x-4 h-1/2'>
        <Image
          className='w-28 h-28 object-fill'
          width={250}
          height={250}
          src={imgUrl}
          alt={alt}
        />
        <h2 className='text-xl font-semibold'>{title}</h2>
      </div>
      <p className='h-1/2'>
        {text.slice(0, 75)}{' '}
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
