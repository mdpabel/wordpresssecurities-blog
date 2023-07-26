import ComponentWrapper from '@/components/common/ComponentWrapper';
import PricingTable from '@/components/service/PricingTable';
import React from 'react';

const page = () => {
  return (
    <ComponentWrapper className='space-y-10'>
      <div>
        <h1 className='text-xl font-bold'>Http 500 internal serve error</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <PricingTable />

      <div>
        <h2>Why choose us?</h2>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </ComponentWrapper>
  );
};

export default page;
