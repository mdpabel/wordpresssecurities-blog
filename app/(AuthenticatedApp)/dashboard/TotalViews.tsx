import Link from 'next/link';
import React from 'react';

const TotalViews = () => {
  return (
    <div className='bg-white p-4 space-y-4 rounded shadow'>
      <div className='flex justify-between'>
        <h2 className='font-semibold'>Total views</h2>
        <Link
          className='text-orange-500 border-b border-orange-500'
          href='/all-posts'
        >
          View Details
        </Link>
      </div>
      <div className='text-center font-bold text-3xl'>1,000 🔥</div>
      <p className='font-semibold text-center '>views across all posts.</p>
    </div>
  );
};

export default TotalViews;
