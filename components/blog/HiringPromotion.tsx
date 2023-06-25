import prisma from '@/db/mongo';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import ComponentWrapper from './ComponentWrapper';
import {
  SecurityIcon,
  WarningIcon,
  PerformanceIcon,
  VirusIcon,
  SEOIcon,
} from './icons';
import Title from './Title';

const getData = async () => {
  const res = await prisma.user.findFirst();
};

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

const HiringPromotion = ({ postId }: { postId: string }) => {
  return (
    <ComponentWrapper>
      <Title>I need help with …</Title>
      <div className='grid grid-cols-2 gap-5 '>
        <Wrapper href='https://mdpabel.com'>
          <Image width={40} height={40} src='/developer.png' alt='' />
          <p className='text-center'>Develop your site</p>
        </Wrapper>

        <Wrapper
          href={`https://www.wordpresssecurities.com/` + 'users/' + postId}
        >
          <SecurityIcon />
          <p className='text-center'>Secure your site</p>
        </Wrapper>

        <Wrapper href='https://mdpabel.com'>
          <WarningIcon />
          <p className='text-center'>Fix any errors</p>
        </Wrapper>

        <Wrapper href='https://mdpabel.com'>
          <PerformanceIcon />
          <p className='text-center'>Optimize site speed</p>
        </Wrapper>

        <Wrapper
          href={`https://www.wordpresssecurities.com/` + 'users/' + postId}
        >
          <VirusIcon />
          <p className='text-center'>Removed Malware/Virus</p>
        </Wrapper>

        <Wrapper href='https://mdpabel.com'>
          <SEOIcon />
          <p className='text-center'>Optimize search engine</p>
        </Wrapper>
      </div>
    </ComponentWrapper>
  );
};

export default HiringPromotion;
