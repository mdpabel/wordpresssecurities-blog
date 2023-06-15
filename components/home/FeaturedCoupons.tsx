import React from 'react';
import ComponentWrapper from '../common/ComponentWrapper';
import { Title } from '../common/Title';
import { HostingCard } from './../common/Card';

const FeaturedCoupons = () => {
  return (
    <ComponentWrapper className='pt-10'>
      <Title>WordPress best deals & coupons</Title>
      <div className='grid grid-cols-1 gap-8 pt-10 md:grid-cols-2 lg:grid-cols-3'>
        <HostingCard />
        <HostingCard />
        <HostingCard />
      </div>
    </ComponentWrapper>
  );
};

export default FeaturedCoupons;
