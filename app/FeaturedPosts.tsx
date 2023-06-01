import { BigCard, SmallCard } from '@/components/Card';
import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';

const FeaturedPosts = () => {
  return (
    <ComponentWrapper className='flex space-x-8'>
      <div className='w-1/3'>
        <BigCard className='w-full' />
      </div>

      <div className='w-1/3 space-y-4'>
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </ComponentWrapper>
  );
};

export default FeaturedPosts;
