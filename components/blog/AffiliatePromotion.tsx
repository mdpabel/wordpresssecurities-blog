import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ComponentWrapper from './ComponentWrapper';
import Title from './Title';

const DealAndCoupon = () => {
  return (
    <ComponentWrapper>
      <Title>Exclusive Discounts on Domains and Hosting</Title>
      <Link href='/coupons'>
        <Image
          width={300}
          height={300}
          className='object-cover w-full h-full'
          alt='Exclusive Discounts on Domains and Hosting'
          src='/discount.jpg'
        />
      </Link>
    </ComponentWrapper>
  );
};

export default DealAndCoupon;
