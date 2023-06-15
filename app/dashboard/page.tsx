'use client';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
const Editor = dynamic(() => import('../../components/dashboard/Editor'), {
  ssr: false,
});
import { client } from '@/utils/client';
import { useAsync } from '@/hooks/useAsync';
import ComponentWrapper from '@/components/common/ComponentWrapper';
import Title from '@/components/dashboard/Title';
import { DangerToast } from '@/components/common/Toast';

interface MetaFormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  description: HTMLInputElement;
  keywords: HTMLInputElement;
}

const Dashboard = () => {
  const [errors, setErrors] = useState({
    title: '',
    coverImg: '',
    metas: '',
    content: '',
    hasError: false,
  });
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

    let hasError = false;

    if (title.length < 25) {
      setErrors({
        ...errors,
        title: 'Title must be 25 or more characters',
      });
      hasError = true;
    }
    if (!coverImg) {
      setErrors({
        ...errors,
        coverImg: 'Cover image is required',
      });
      hasError = true;
    }
    if (content.length < 100) {
      setErrors({
        ...errors,
        content: 'Blog body must be 100 or more characters',
      });
      hasError = true;
    }

    if (hasError) {
      setErrors({
        ...errors,
        hasError: true,
      });
      return;
    }

    run(
      client('/api/blog', {
        method: 'POST',
        data: data,
      })
    );
  };

  return (
    <ComponentWrapper className='pt-10 space-y-8 min-h-[80vh]'>
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
