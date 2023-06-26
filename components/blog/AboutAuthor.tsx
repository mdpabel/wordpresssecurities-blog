import { Link as L, User } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ComponentWrapper from './ComponentWrapper';
import Title from './Title';

interface IAboutAuthor {
  author: User;
  links: L[];
}

const AboutAuthor = ({ author, links }: IAboutAuthor) => {
  return (
    <ComponentWrapper>
      <div className='flex flex-col gap-5 md:flex-row md:gap-10'>
        <div className='w-full md:w-1/2'>
          <Image
            className='object-cover'
            src={author?.profilePic}
            width={400}
            height={400}
            alt={author?.firstName}
          />
        </div>
        <div className='w-full md:w-1/2'>
          <h2 className='pb-5 text-lg font-semibold'>About the Blogger</h2>

          <div className='pb-5'>
            <h2 className='text-lg font-semibold'>
              {author?.firstName + ' ' + author?.lastName}
            </h2>
            <h3 className='text-sm font-semibold'>{author?.occupation}</h3>
          </div>
          <ul>
            {links?.map((link) => (
              <li className='flex space-x-2' key={link?.id}>
                <h3 className='font-semibold'>{link?.type}</h3>:{' '}
                <Link href={link?.url} className='hover:underline'>
                  {link?.url}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default AboutAuthor;
