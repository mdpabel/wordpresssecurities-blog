import Link from 'next/link';
import React from 'react';
import Button from '../common/Button';
import { TCoupon } from '@/app/api/coupon/route';
import ShowReviews from './ShowReviews';

const CouponCard = ({
  categories,
  description,
  details,
  discount,
  name,
  review,
  link,
}: TCoupon) => {
  return (
    <div className=' rounded p-8 bg-white space-y-3 shadow'>
      <div className='space-y-3 flex md:flex-row flex-col md:space-x-8 md:items-center border-b pb-5'>
        <div className='w-full md:w-4/5 space-y-2'>
          <div className='flex justify-between md:justify-normal space-x-4 items-center'>
            <h2 className='border px-4 py-2 rounded font-bold'>{name}</h2>
            <div>
              <span className='font-bold'>{discount}</span>% OFF
            </div>
          </div>
          <p>{description}</p>
        </div>

        <div className='w-full md:flex md:justify-end md:w-1/5'>
          <Link
            className='px-6 bg-black text-white py-2 rounded'
            target='_blank'
            href={link}
          >
            Get Deal
          </Link>
        </div>
      </div>

      <div className='flex justify-between'>
        <Link className='hover:underline' href={review}>
          Our reviews
        </Link>
        <ShowReviews content={details} />
      </div>
    </div>
  );
};

export default CouponCard;
