'use client';
import dynamic from 'next/dynamic';

import ComponentWrapper from '@/components/ComponentWrapper';
import React, { useState } from 'react';
import Title from './Title';
const Editor = dynamic(() => import('./Editor'), { ssr: false });

const Dashboard = () => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');

  const handleSavePost = () => {
    console.log(content);
  };

  return (
    <ComponentWrapper className='pt-10 space-y-5 min-h-[80vh]'>
      <Title setTitle={setTitle} title={title} />
      <Editor
        handleSavePost={handleSavePost}
        setContent={setContent}
        content={content}
      />
    </ComponentWrapper>
  );
};

export default Dashboard;
