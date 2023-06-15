import React, { use } from 'react';
import { BigCard, SmallCard } from '../common/Card';
import ComponentWrapper from '../common/ComponentWrapper';
import Newsletter from './Newsletter';
import { getBlogs } from '@/utils/getBlogs';
import { BlogType } from '@/types/models';

interface INewBlogs {
  blogs: BlogType[];
}

const FeaturedPosts = ({ blogs }: INewBlogs) => {
  return (
    <ComponentWrapper className='grid grid-cols-1 grid-rows-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      <BigCard blog={blogs[0]} className='w-full h-[450px] ' />

      <div className='md:h-[450px] grid grid-rows-3 gap-4'>
        <SmallCard blog={blogs[1]} className='md:h-[140px]' />
        <SmallCard blog={blogs[2]} className='md:h-[140px]' />
        <SmallCard blog={blogs[3]} className='md:h-[140px]' />
      </div>

      <Newsletter />
    </ComponentWrapper>
  );
};

export default FeaturedPosts;
