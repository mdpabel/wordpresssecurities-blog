import { BigCard, SmallCard } from '@/components/Card';
import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';

const FeaturedPosts = () => {
  return (
    <div className='h-[450px]'>
      <ComponentWrapper className='grid grid-cols-3 grid-rows-1 gap-10'>
        <div className=''>
          <BigCard className='w-full h-full' />
        </div>

        <div className='h-[450px] space-y-10'>
          <SmallCard className='h-[30%]' />
          <SmallCard className='h-[30%]' />
          <SmallCard className='h-[30%]' />
        </div>

        <div>HELLO</div>
      </ComponentWrapper>
    </div>
  );
};

export default FeaturedPosts;
