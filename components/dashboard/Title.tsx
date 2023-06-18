'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useOrigin } from '@/hooks/useOrigin';
import { generateSlug } from '@/utils/generateSlug';

interface ITitle {
  setTitle: (e: string) => void;
  title: string;
}

const Title = ({ setTitle, title }: ITitle) => {
  const origin = useOrigin();
  const slug = generateSlug(title);

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
        <Link target='_blank' href={origin + '/' + title.toLowerCase()}>
          {origin + '/' + slug}
        </Link>
      </div>
    </div>
  );
};

export default Title;
