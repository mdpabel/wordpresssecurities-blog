import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';
import TextEditor from './Tiptap';
import Title from './Title';
import EditorJodit from './EditorJodit';

const Dashboard = () => {
  return (
    <ComponentWrapper className='pt-10 space-y-5'>
      <Title />
      {/* <TextEditor /> */}
      <EditorJodit />
    </ComponentWrapper>
  );
};

export default Dashboard;
