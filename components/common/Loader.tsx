import React from 'react';
import ComponentWrapper from './ComponentWrapper';

const Loader = () => {
  return (
    <ComponentWrapper className='w-full min-h-[80vh] flex items-center justify-center'>
      <span className='loader'></span>
    </ComponentWrapper>
  );
};

export default Loader;
