import { Title } from '@/components/Title';
import React from 'react';
import ComponentWrapper from '@/components/ComponentWrapper';
import { HostingCard } from '@/components/Card';

const TopSecurityPlugins = () => {
  return (
    <ComponentWrapper className='pt-10'>
      <Title>Top Security Plugins You Need</Title>
      <div className='grid grid-cols-1 gap-8 pt-10 md:grid-cols-2 lg:grid-cols-3'>
        <HostingCard />
        <HostingCard />
        <HostingCard />
      </div>
    </ComponentWrapper>
  );
};

export default TopSecurityPlugins;
