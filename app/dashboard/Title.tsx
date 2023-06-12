'use client';
import React from 'react';
import Link from 'next/link';

interface ITitle {
  setTitle: (e: string) => void;
  title: string;
}

const Title = ({ setTitle, title }: ITitle) => {
  return (
    <div className='space-y-4'>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type='text'
        value={title}
        placeholder='Add title'
        className='w-full px-5 py-2 rounded'
      />
      <div className='flex space-x-1'>
        <h4 className='font-semibold'>Permalink:</h4>
        <Link
          target='_blank'
          href={window.location.origin + '/' + title.toLowerCase()}
        >
          {window.location.origin + '/' + title.toLowerCase()}
        </Link>
      </div>
    </div>
  );
};

export default Title;
