import ComponentWrapper from '@/components/common/ComponentWrapper';
import CouponCard from '@/components/coupons/CouponCard';
import Sidebar from '@/components/coupons/Sidebar';
import prisma from '@/db/mongo';
import React, { use } from 'react';

export const dynamic = 'force-static';
export const revalidate = 86400;

const getData = async () => {
  const res = await prisma.coupon.findMany();

  return res;
};

const Coupons = () => {
  const data = use(getData());

  return (
    <ComponentWrapper>
      <div className='flex md:flex-row flex-col space-y-8 md:space-y-0 md:space-x-4 relative'>
        <Sidebar />
        <div className='w-full md:w-3/4 space-y-4'>
          {data.map((coupon) => (
            <CouponCard
              link={coupon.link}
              key={coupon.id}
              name={coupon.name}
              categories={coupon.categories}
              discount={'' + coupon.discount}
              description={coupon.description}
              details={coupon.details ?? ''}
              review={coupon.reviews ?? ''}
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Coupons;
