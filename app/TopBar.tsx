import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';

const TopBar = () => {
  return (
    <div className='py-2 text-white bg-black'>
      <ComponentWrapper>
        <div className='flex justify-between text-sm font-semibold'>
          <div>Discover how to protect your WordPress site from threats</div>
          <nav className='hidden md:block'>
            <ul className='flex justify-between space-x-6'>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Login</li>
            </ul>
          </nav>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default TopBar;
