import Link from 'next/link';
import React, { ReactNode } from 'react';
import ComponentWrapper from './ComponentWrapper';
import { SucuriIcon } from './icons';
import Title from './Title';

const Scan = () => {
  return (
    <ComponentWrapper>
      <Title>Scan your site free …</Title>
      <div className=''>
        <SucuriIcon />
        <p className='text-center'>Website Development</p>
      </div>
    </ComponentWrapper>
  );
};

export default Scan;
