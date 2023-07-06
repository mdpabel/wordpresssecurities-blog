'use client';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
// const Editor = dynamic(() => import('@/components/dashboard/Editor'), {
//   ssr: false,
// });
import Editor from '@/components/dashboard/Editor';
import { client } from '@/utils/client';
import { useAsync } from '@/hooks/useAsync';
import ComponentWrapper from '@/components/common/ComponentWrapper';
import Title from '@/components/dashboard/Title';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserByClerkId } from '@/hooks/useUserByClerkId';
import { useNewUser } from '@/hooks/useNewUser';
import withAuth from '@/components/common/withAuth';

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
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [coverImg, setCoverImg] = useState('');
  const [metas, setMetas] = useState({
    title: '',
    description: '',
    keywords: '',
  });

  useEffect(() => {
    setContent(window.localStorage.getItem('content') ?? '');
    setTitle(window.localStorage.getItem('title') ?? '');
    setCoverImg(window.localStorage.getItem('coverImg') ?? '');
    setMetas(
      JSON.parse(
        window.localStorage.getItem('metas') ??
          JSON.stringify({
            title: '',
            description: '',
            keywords: '',
          }),
      ),
    );
  }, []);

  useEffect(() => {
    window.localStorage.setItem('content', content);
    window.localStorage.setItem('title', title);
    window.localStorage.setItem('coverImg', coverImg);
    window.localStorage.setItem('metas', JSON.stringify(metas));
  }, [content, coverImg, metas, title]);

  const handleSavePost = () => {
    const data = {
      title,
      coverImg,
      metas,
      content,
      categories: checkedCategories,
    };

    run(
      client('/api/blog', {
        method: 'POST',
        data: data,
      }),
    );
  };

  useEffect(() => {
    if (isSuccess && data) {
      toast(data?.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      setContent('');
      setTitle('');
      setCoverImg('');
      setMetas({
        title: '',
        description: '',
        keywords: '',
      });

      window.localStorage.removeItem('content');
      window.localStorage.removeItem('title');
      window.localStorage.removeItem('coverImg');
      window.localStorage.removeItem('metas');
    }

    if (isError && data) {
      toast.error(data.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }, [isSuccess, data, isError]);

  return (
    <ComponentWrapper className='pt-10 space-y-8 min-h-[80vh]'>
      <h1 className='text-2xl text-center'>Add new post</h1>
      <Title setTitle={setTitle} title={title} />
      <Editor
        checkedCategories={checkedCategories}
        setCheckedCategories={setCheckedCategories}
        isLoading={isLoading}
        handleSavePost={handleSavePost}
        setContent={setContent}
        content={content}
        coverImg={coverImg}
        setCoverImg={setCoverImg}
        metas={metas}
        setMetas={setMetas}
      />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </ComponentWrapper>
  );
};

export default withAuth(Dashboard);
