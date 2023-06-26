import Link from 'next/link';
import React, { ReactNode } from 'react';
import ComponentWrapper from './ComponentWrapper';
import { SucuriIcon } from './icons';
import Title from './Title';

interface IWrapper {
  children: ReactNode;
  href: string;
}

const Wrapper = ({ children, href }: IWrapper) => (
  <Link target='_blank' href={href}>
    <div className='flex flex-col items-center transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 hover:rounded '>
      {children}
    </div>
  </Link>
);

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
