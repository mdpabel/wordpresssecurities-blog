import React from 'react';

const PricingTableHeader = () => {
  return (
    <div className='w-full px-4'>
      <div className='mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20'>
        <span className='block mb-2 text-lg font-semibold text-primary'>
          Pricing Table
        </span>
        <h2 className='mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]'>
          Our Pricing Plan
        </h2>
        <p className='text-base text-body-color'>
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>
    </div>
  );
};

export default PricingTableHeader;
