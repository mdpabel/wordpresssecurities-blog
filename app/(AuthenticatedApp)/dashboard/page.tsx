'use client';
import React from 'react';
import withAuth from '@/components/common/withAuth';
import Chart from './Chart';
import ComponentWrapper from '@/components/common/ComponentWrapper';
import Link from 'next/link';
import TotalViews from './TotalViews';
import LikesChart from './LikesChart';
import ChatBotCard from './ChatBotCard';

const Dashboard = () => {
  return (
    <div className='px-8 py-8 space-y-8 mx-auto'>
      <h2 className='text-lg md:text-xl font-semibold'>
        Good Morning MD Pabel!
      </h2>
      <div className='flex flex-col md:flex-row md:space-x-8 space-x-0 md:space-y-0 space-y-8 '>
        <Chart />
        <div className='w-full md:w-1/3 space-y-8 '>
          <TotalViews />
          <LikesChart />
        </div>
      </div>
      <div className='flex md:space-x-4 space-x-0 md:space-y-0 space-y-4'>
        <div className='w-full md:w-1/3'>
          <ChatBotCard />
        </div>
        <div className='w-full md:w-1/3'></div>
        <div className='w-full md:w-1/3'></div>
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
