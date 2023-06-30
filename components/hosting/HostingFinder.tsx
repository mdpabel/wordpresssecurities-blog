'use client';
import React, { useState } from 'react';
import ComponentWrapper from '../blog/ComponentWrapper';
import { InputWrapper, Label, Select } from '../common/Input';
import Image from 'next/image';
import Button from '../common/Button';
import Link from 'next/link';

const options = [
  {
    label: 'Type for Your Online Venture',
    value: '',
  },
  {
    label: 'A WordPress blog',
    value: 'Siteground, Bluehost, Hostinger',
  },
  {
    label: 'A Personal/Portfolio site',
    value: 'Namecheap*, Godaddy, Hostgator',
  },
  {
    label: 'An Ecommerce site',
    value: 'DigitalOcean*, vultr*, SiteGround',
  },
];

interface ISiteGround {
  images: string[];
  hostings: string[];
  coupons: string[];
}

const Footer = ({ images, hostings, coupons }: ISiteGround) => {
  return (
    <div className='flex flex-col items-center space-y-10'>
      <div className='flex space-x-4'>
        {images.map((image, index) => (
          <Link key={index} href='/'>
            <Image width={100} height={100} src={image} alt={hostings[index]} />
          </Link>
        ))}
      </div>
      <div className='flex space-x-4'>
        {hostings.map((hosting, index) => (
          <Link className='border px-4 py-2 rounded' href='/' key={index}>
            {hosting}
          </Link>
        ))}
      </div>

      <div className='flex space-x-4'>
        {coupons.map((hosting, index) => (
          <Link className='border px-4 py-2 rounded' href='/' key={index}>
            {hosting}
          </Link>
        ))}
      </div>
    </div>
  );
};

const generateUrl = (hostings: string) => {
  if (hostings == '') return [];
  const parsedHostings = hostings
    .split(',')
    .map((hosting) => '/hostings/' + hosting.trim().replace('*', '') + '.png');

  return parsedHostings;
};

const genHostings = (hostings: string) => {
  if (hostings == '') return [];
  const parsedHostings = hostings
    .split(',')
    .map(
      (hosting) => 'Check our ' + hosting.trim().replace('*', '') + ' reviews',
    );

  return parsedHostings;
};

const genCoupons = (hostings: string) => {
  if (hostings == '') return [];
  const parsedHostings = hostings
    .split(',')
    .map((hosting) => 'Check ' + hosting.trim().replace('*', '') + ' offers');

  return parsedHostings;
};

const HostingFinder = () => {
  const [hostings, setHostings] = useState('');

  return (
    <ComponentWrapper className='space-y-5 py-5'>
      <h2 className='text-lg font-medium border-b pb-3'>
        Web Hosting Finder:{' '}
        <span className='bg-gray-700 text-white py-1 px-3 rounded'>
          Expert recommendation
        </span>
      </h2>
      <div className='flex items-center space-x-5'>
        <h2 className='w-1/3 text-lg'>I need to host:</h2>
        <Select
          className='w-2/3'
          onChange={(val) => setHostings(val)}
          options={options}
        />
      </div>
      <div className='text-center space-y-5'>
        <div>
          We recommend:{' '}
          {hostings ? hostings : 'Please select type of your site'}
        </div>
        {hostings === '' ? null : (
          <Footer
            images={generateUrl(hostings)}
            hostings={genHostings(hostings)}
            coupons={genCoupons(hostings)}
          />
        )}
      </div>
    </ComponentWrapper>
  );
};

export default HostingFinder;
