import { BigCard, SmallCard } from '@/components/Card';
import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';

const NewBlogs = () => {
  return (
    <ComponentWrapper>
      <h2>New on blogs</h2>
      <div className='grid grid-cols-3'>
        <BigCard />
        <BigCard />
        <div>
          <SmallCard />
          <SmallCard />
          <SmallCard />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default NewBlogs;
