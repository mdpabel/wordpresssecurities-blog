import { BigCard, SmallCard } from '@/components/Card';
import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';
import Newsletter from './Newsletter';

const FeaturedPosts = () => {
  return (
    <div>
      <ComponentWrapper className='grid grid-cols-1 grid-rows-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        <BigCard className='w-full h-[450px] ' />

        <div className='md:h-[450px] grid grid-rows-3 gap-4'>
          <SmallCard className='md:h-[140px]' />
          <SmallCard className='md:h-[140px]' />
          <SmallCard className='md:h-[140px]' />
        </div>

        <Newsletter />
      </ComponentWrapper>
    </div>
  );
};

export default FeaturedPosts;
