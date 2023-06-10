import dynamic from 'next/dynamic';

import ComponentWrapper from '@/components/ComponentWrapper';
import React from 'react';
import Title from './Title';
// import Editor from './Editor';
const EditorJodit = dynamic(() => import('./EditorJodit'), { ssr: false });
const Editor = dynamic(() => import('./Editor'), { ssr: false });

const Dashboard = () => {
  return (
    <ComponentWrapper className='pt-10 space-y-5'>
      <Title />
      {/* <EditorJodit /> */}
      <Editor />
    </ComponentWrapper>
  );
};

export default Dashboard;
