'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Input, { Label, InputWrapper } from '../common/Input';
import ComponentWrapper from './ComponentWrapper';
import Title from './Title';

const Scan = () => {
  const [url, setUrl] = useState('');

  return (
    <ComponentWrapper>
      <Title>Scan your site free …</Title>
      <div className=''>
        <InputWrapper>
          <Label htmlFor='url'>Your site url</Label>
          <Input
            value={url}
            id='url'
            type='url'
            placeholder='https://www.wordpresssecurities.com/'
            onChange={(e) => setUrl(e.target.value)}
          />
          <div className='flex justify-between pt-3'>
            <Link
              target='_blank'
              style={{
                cursor: url ? 'pointer' : 'not-allowed',
                pointerEvents: url ? 'auto' : 'none',
              }}
              className='px-4 py-2 text-white bg-black rounded md:px-10 '
              href={`https://sitecheck.sucuri.net/results/${url}`}
            >
              Scan site
            </Link>

            <Link
              className='px-4 py-2 text-white bg-gray-700 rounded md:px-10 '
              href='/'
            >
              Detected Malware?
            </Link>
          </div>
        </InputWrapper>
      </div>
    </ComponentWrapper>
  );
};

export default Scan;
