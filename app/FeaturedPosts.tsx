import { BigCard, SmallCard } from '@/components/Card';
import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';

const FeaturedPosts = () => {
  return (
    <div className='h-[450px]'>
      <ComponentWrapper className='grid grid-cols-3 grid-rows-1 gap-10'>
        <BigCard className='w-full h-[450px] ' />

        <div className='h-[450px] grid grid-rows-3 gap-8'>
          <SmallCard className='h-[128px]' />
          <SmallCard className='h-[128px]' />
          <SmallCard className='h-[128px]' />
        </div>

        <div>HELLO</div>
      </ComponentWrapper>
    </div>
  );
};

export default FeaturedPosts;
