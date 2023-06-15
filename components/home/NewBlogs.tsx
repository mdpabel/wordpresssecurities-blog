import prisma from '@/db/mongo';
import { BlogType } from '@/types/models';
import React, { Suspense, use } from 'react';
import ComponentWrapper from './../common/ComponentWrapper';
import { Title } from './../common/Title';
import { BigCard, SmallCard } from './../common/Card';
import { getBlogs } from '@/utils/getBlogs';

interface INewBlogs {
  blogs: BlogType[];
}

const NewBlogs = ({ blogs }: INewBlogs) => {
  return (
    <ComponentWrapper>
      <div className='py-10'>
        <Title>New on blogs</Title>
      </div>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        <BigCard blog={blogs[0]} className='w-full h-[450px] ' />
        <BigCard blog={blogs[1]} className='w-full h-[450px] ' />
        <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-1 lg:col-span-1 md:col-span-2'>
          <SmallCard blog={blogs[2]} className='col-span-1' />
          <SmallCard blog={blogs[3]} className='col-span-1' />
          <SmallCard blog={blogs[4]} className='col-span-1' />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default NewBlogs;
