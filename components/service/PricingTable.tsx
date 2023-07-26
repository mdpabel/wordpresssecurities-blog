import React from 'react';
import PricingCard from './PricingCard';
import List from './List';
import PricingTableHeader from './PricingTableHeader';
import ComponentWrapper from '../common/ComponentWrapper';

const PricingTable = () => {
  return (
    <ComponentWrapper className='relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]'>
      <PricingTableHeader />
      <div className='flex flex-wrap justify-center -mx-4'>
        <div className='flex flex-wrap -mx-4'>
          <PricingCard
            type='Personal'
            price='$59'
            subscription='year'
            description='Perfect for using in a personal website or a client project.'
            buttonText='Choose Personal'
          >
            <List>1 User</List>
            <List>All UI components</List>
            <List>Lifetime access</List>
            <List>Free updates</List>
            <List>Use on 1 (one) project</List>
            <List>3 Months support</List>
          </PricingCard>
          <PricingCard
            type='Business'
            price='$199'
            subscription='year'
            description='Perfect for using in a personal website or a client project.'
            buttonText='Choose Business'
            active={true}
          >
            <List>5 User</List>
            <List>All UI components</List>
            <List>Lifetime access</List>
            <List>Free updates</List>
            <List>Use on31 (Three) project</List>
            <List>4 Months support</List>
          </PricingCard>
          <PricingCard
            type='Professional'
            price='$256'
            subscription='year'
            description='Perfect for using in a personal website or a client project.'
            buttonText='Choose Professional'
          >
            <List>Unlimited User</List>
            <List>All UI components</List>
            <List>Lifetime access</List>
            <List>Free updates</List>
            <List>Unlimited project</List>
            <List>12 Months support</List>
          </PricingCard>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default PricingTable;
