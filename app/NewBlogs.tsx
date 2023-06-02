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
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        <BigCard />
        <BigCard />
        <div className='space-y-4'>
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default NewBlogs;
