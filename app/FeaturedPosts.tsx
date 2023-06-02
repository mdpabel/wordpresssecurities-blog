import { BigCard, SmallCard } from '@/components/Card';
import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';

const FeaturedPosts = () => {
  return (
    <div className='h-[450px]'>
      <ComponentWrapper className='grid grid-cols-1 grid-rows-1 gap-10 md:grid-cols-3'>
        <BigCard className='w-full h-[450px] ' />

        <div className='md:h-[450px] grid grid-rows-3 gap-4'>
          <SmallCard className='md:h-[140px]' />
          <SmallCard className='md:h-[140px]' />
          <SmallCard className='md:h-[140px]' />
        </div>

        <div>HELLO</div>
      </ComponentWrapper>
    </div>
  );
};

export default FeaturedPosts;
