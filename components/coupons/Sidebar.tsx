import React from 'react';
import CheckBox from './Checkbox';

const categories = [
  {
    label: 'Domain',
  },
  {
    label: 'Hosting',
  },
  {
    label: 'SSL',
  },
  {
    label: 'VPN',
  },
];

const companies = [
  {
    label: 'Namecheap',
  },
  {
    label: 'Hostinger',
  },
  {
    label: 'Bluehost',
  },
  {
    label: 'Siteground',
  },
  {
    label: 'Godaddy',
  },
  {
    label: 'Hostgator',
  },
  {
    label: 'Digital ocean',
  },
];

const Sidebar = () => {
  return (
    <div className='w-full bg-white shadow-sm md:w-1/4 p-8 space-y-4 md:sticky md:top-0 md:h-[650px]'>
      <div className='flex justify-between border-b'>
        <span>Filter</span>
        <span className='text-sky-500'>Clear All</span>
      </div>

      <div className='border-b space-y-4'>
        <h3 className='text-center hidden md:block'>Categories</h3>
        <div className='flex md:flex-col md:space-x-0 flex-wrap'>
          {categories.map(({ label }) => (
            <CheckBox key={label} label={label} />
          ))}
        </div>
      </div>

      <div className='border-b space-y-4'>
        <h3 className='text-center hidden md:block'>Companies</h3>
        <div className='flex md:flex-col md:space-x-0 flex-wrap'>
          {companies.map(({ label }) => (
            <CheckBox key={label} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
