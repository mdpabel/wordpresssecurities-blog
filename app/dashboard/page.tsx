import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';
import Title from './Title';
import EditorJodit from './EditorJodit';

const Dashboard = () => {
  return (
    <ComponentWrapper className='pt-10 space-y-5'>
      <Title />
      <EditorJodit />
    </ComponentWrapper>
  );
};

export default Dashboard;
