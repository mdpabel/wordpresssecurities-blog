import { BigCard, SmallCard } from '@/components/Card';
import ComponentWrapper from '@/components/ComponentWrapper';
import { Title } from '@/components/Title';

import React from 'react';

const NewBlogs = () => {
  return (
    <ComponentWrapper>
      <div className='py-10'>
        <Title>New on blogs</Title>
      </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        <BigCard className='w-full h-[450px] ' />
        <BigCard className='w-full h-[450px] ' />
        <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-1 lg:col-span-1 md:col-span-2'>
          <SmallCard className='col-span-1' />
          <SmallCard className='col-span-1' />
          <SmallCard className='col-span-1' />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default NewBlogs;
