import React from 'react';
import Link from 'next/link';

const Title = () => {
  return (
    <div className='space-y-4'>
      <input
        type='text'
        name=''
        placeholder='Add title'
        className='w-full px-5 py-2 rounded'
      />
      <div className='flex space-x-1'>
        <h4 className='font-semibold'>Permalink:</h4>
        <Link target='_blank' href='https://www.wordpresssecurities.com/gddd'>
          https://www.wordpresssecurities.com/gddd
        </Link>
      </div>
    </div>
  );
};

export default Title;
