import About from '@/components/common/About';
import ComponentWrapper from '@/components/common/ComponentWrapper';
import React from 'react';

const page = () => {
  return (
    <ComponentWrapper className='min-h-[80vh] flex justify-center items-center'>
      <About />
    </ComponentWrapper>
  );
};

export default page;
