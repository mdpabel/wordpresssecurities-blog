import ComponentWrapper from '@/components/common/ComponentWrapper';
import CouponCard from '@/components/coupons/CouponCard';
import Sidebar from '@/components/coupons/Sidebar';
import React from 'react';

const Coupons = () => {
  return (
    <ComponentWrapper>
      <div className='flex md:flex-row flex-col space-y-8 md:space-y-0 md:space-x-4 relative'>
        <Sidebar />
        <div className='w-full md:w-3/4 space-y-4'>
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />

          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />

          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
          <CouponCard />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Coupons;
