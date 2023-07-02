import ComponentWrapper from '@/components/common/ComponentWrapper';
import CouponCard from '@/components/coupons/CouponCard';
import Sidebar from '@/components/coupons/Sidebar';
import prisma from '@/db/mongo';
import { Metadata } from 'next';
import React, { use } from 'react';

export const dynamic = 'force-static';
export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Best Hosting and Domain Deals | Coupons, Discounts, Offers',
  description:
    'Discover the best hosting and domain deals on the web. Save money with exclusive coupons, discounts, and offers for top hosting providers and domain registrars. Start your website or online business with maximum savings.',
  keywords:
    'hosting deals, domain deals, hosting coupons, domain coupons, hosting discounts, domain discounts, hosting offers, domain offers',
  robots: 'index, follow',
  authors: [{ name: 'MD Pabel', url: 'https://mdpabel.com' }],
  category: 'Technology',
  abstract:
    'Find the best hosting and domain deals all in one place. Explore exclusive coupons, discounts, and offers from top hosting providers and domain registrars. Save money while launching your website or online business.',
  applicationName: 'Your Website',
  creator: 'MD Pabel',
  publisher: 'MD Pabel',
  verification: {
    google: 'your-google-verification-code',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  classification: 'Hosting and Domain Deals',
  generator: 'next.js',
};

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
