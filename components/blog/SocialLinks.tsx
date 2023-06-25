import React from 'react';
import {
  Facebook,
  LinkedIn,
  Twitter,
} from '@/components/common/socialMediaIcons';
import ComponentWrapper from './ComponentWrapper';
import Link from 'next/link';
import Title from './Title';

const SocialLinks = () => {
  return (
    <ComponentWrapper>
      <Title>Stay in the loop ...</Title>
      <div className='grid grid-cols-3 gap-5'>
        <Link
          href='/'
          style={{
            backgroundColor: '#4460A0',
            color: '#fff',
          }}
          className='flex justify-center px-5 py-1 mr-4 space-x-3 rounded cursor-pointer md:mr-0'
        >
          <Facebook />
        </Link>
        <Link
          href='/'
          style={{
            backgroundColor: '#2795E9',
            color: '#fff',
          }}
          className='flex justify-center px-5 py-1 mr-4 space-x-3 rounded cursor-pointer md:mr-0'
        >
          <Twitter />
        </Link>
        <Link
          href='/'
          style={{
            backgroundColor: '#007EBB',
            color: '#fff',
          }}
          className='flex justify-center px-5 py-1 mr-4 space-x-3 rounded cursor-pointer md:mr-0'
        >
          <LinkedIn />
        </Link>
      </div>
    </ComponentWrapper>
  );
};

export default SocialLinks;
