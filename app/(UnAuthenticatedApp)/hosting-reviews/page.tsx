import DealAndCoupon from '@/components/blog/AffiliatePromotion';
import HiringPromotion from '@/components/blog/HiringPromotion';
import Scan from '@/components/blog/Scan';
import { BigCard, HostingCard, SmallCard } from '@/components/common/Card';
import ComponentWrapper from '@/components/common/ComponentWrapper';
import HostingFinder from '@/components/hosting/HostingFinder';
import prisma from '@/db/mongo';
import React, { use } from 'react';

export const dynamic = 'force-static';
export const revalidate = 86400;

const getData = async () => {
  const res = await prisma.post.findMany({
    where: {
      categories: {
        has: 'hosting_review',
      },
    },
    include: {
      View: true,
      author: true,
    },
    orderBy: {
      View: {
        count: 'desc',
      },
    },
  });

  return res;
};

const page = () => {
  const data = use(getData());

  return (
    <ComponentWrapper className='flex md:flex-row flex-col pt-10 space-y-8 md:space-y-0 md:space-x-8'>
      <div className='w-full md:w-2/3 space-y-8'>
        <HostingFinder />
        <div className='space-y-8'>
          {data.map((hosting) => (
            <>
              <div className='hidden md:block '>
                <SmallCard
                  hasBody={true}
                  className='md:max-h-[220px] p-8 space-x-8'
                  blog={hosting}
                  key={hosting.id}
                  title={70}
                  body={150}
                  titleClass='font-semibold text-base py-4'
                />
              </div>
              <div className='block md:hidden'>
                <BigCard blog={hosting} key={hosting.id} />
              </div>
            </>
          ))}
        </div>
      </div>
      <div className='w-full md:w-1/3 space-y-8'>
        <HiringPromotion />

        <DealAndCoupon />

        <HostingCard
          title='WordPress best deals & coupons'
          alt='wordfence'
          imgUrl='/images/wordfence.png'
          text="In the vast world of WordPress security plugins, one name stands out as a fortress protecting websites against malicious attacks - Wordfence Security Plugin. With the ever-growing online threats and cyberattacks, safeguarding your website is crucial. In this blog, we'll delve into why Wordfence is considered the best security plugin for WordPress and explore its powerful internal mechanisms that shield your website from potential harm."
        />
        <HostingCard
          title='WordPress best deals & coupons'
          alt='wordfence'
          imgUrl='/images/wordfence.png'
          text="In the vast world of WordPress security plugins, one name stands out as a fortress protecting websites against malicious attacks - Wordfence Security Plugin. With the ever-growing online threats and cyberattacks, safeguarding your website is crucial. In this blog, we'll delve into why Wordfence is considered the best security plugin for WordPress and explore its powerful internal mechanisms that shield your website from potential harm."
        />
      </div>
    </ComponentWrapper>
  );
};

export default page;
