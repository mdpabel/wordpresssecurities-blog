'use client';
import dynamic from 'next/dynamic';
import ComponentWrapper from '@/components/ComponentWrapper';
import React, { useState } from 'react';
import Title from './Title';
const Editor = dynamic(() => import('./Editor'), { ssr: false });
import SEO from './SEO';
import { client } from '@/utils/client';
import { useAsync } from '@/hooks/useAsync';

interface MetaFormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  description: HTMLInputElement;
  keywords: HTMLInputElement;
}

const Dashboard = () => {
  const { data, status, run, isLoading, isSuccess, isError } = useAsync();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [coverImg, setCoverImg] = useState('');
  const [metas, setMetas] = useState({
    title: '',
    description: '',
    keywords: '',
  });

  const handleSavePost = () => {
    const data = {
      title,
      coverImg,
      metas,
      content,
    };
    run(
      client('/api/blog', {
        method: 'POST',
        data: data,
      })
    );
  };

  console.log(status);

  return (
    <ComponentWrapper className='pt-10 space-y-5 min-h-[80vh]'>
      <Title setTitle={setTitle} title={title} />
      <Editor
        isLoading={isLoading}
        handleSavePost={handleSavePost}
        setContent={setContent}
        content={content}
        coverImg={coverImg}
        setCoverImg={setCoverImg}
        metas={metas}
        setMetas={setMetas}
      />
    </ComponentWrapper>
  );
};

export default Dashboard;
