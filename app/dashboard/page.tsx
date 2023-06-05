import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';
import TextEditor from './Tiptap';
import Title from './Title';

const Dashboard = () => {
  return (
    <ComponentWrapper className='pt-10 space-y-5'>
      <Title />
      <TextEditor />
    </ComponentWrapper>
  );
};

export default Dashboard;
