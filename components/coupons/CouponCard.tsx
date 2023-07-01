import Link from 'next/link';
import React from 'react';
import Button from '../common/Button';

const CouponCard = () => {
  return (
    <div className='md:max-h-56 rounded p-8 bg-white space-y-3 shadow'>
      <div className='space-y-3 flex md:flex-row flex-col md:space-x-8 md:items-center border-b pb-5'>
        <div className='w-full md:w-4/5 space-y-2'>
          <div className='flex justify-between md:justify-normal space-x-4 items-center'>
            <h2 className='border px-4 py-2 rounded font-bold'>Hostinger</h2>
            <div>
              <span className='font-bold'>84</span>% OFF
            </div>
          </div>
          <p>
            Exclusive Offer: Up To 75% OFF + Extra 9% OFF On Web Hosting + Free
            Domain + 100 Gb Storage
          </p>
        </div>

        <div className='w-full md:flex md:justify-end md:w-1/5'>
          <Button className='px-6'>Get Deal</Button>
        </div>
      </div>

      <div className='flex justify-between'>
        <Link className='hover:underline' href={'/'}>
          Our reviews
        </Link>
        <button>Show Details</button>
      </div>
    </div>
  );
};

export default CouponCard;
