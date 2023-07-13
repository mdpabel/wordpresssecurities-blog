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
import { usePost } from '@/context/blogContext';
import { useSearchParams } from 'next/navigation';
import withAuth from '@/components/common/withAuth';

interface MetaFormElements extends HTMLFormControlsCollection {
  title: HTMLInputElement;
  description: HTMLInputElement;
  keywords: HTMLInputElement;
}

const getPostById = (id: string, posts: any) =>
  posts.find((post: any) => post.id === id);

const Dashboard = () => {
  const searchParams = useSearchParams();
  const data = usePost();
  const { data: res, status, run, isLoading, isSuccess, isError } = useAsync();
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [coverImg, setCoverImg] = useState('');
  const [metas, setMetas] = useState({
    title: '',
    description: '',
    keywords: '',
  });
  const id = searchParams.get('id') ?? '';

  useEffect(() => {
    const post = getPostById(id, data);

    setContent(post?.content ?? '');
    setTitle(post?.title ?? '');
    setCheckedCategories(post?.categories ?? '');
    setMetas({
      title: post?.metaTitle ?? '',
      description: post?.metaDescription ?? '',
      keywords: post?.metaKeywords ?? '',
    });
    setCoverImg(post?.coverImage ?? '');
  }, [data, id]);

  const handleSavePost = () => {
    const data = {
      title,
      coverImg,
      metas,
      content,
      categories: checkedCategories,
    };

    run(
      client(`/api/blog?id=${id}`, {
        method: 'PUT',
        data: data,
      }),
    );
  };

  useEffect(() => {
    if (isSuccess && res) {
      toast(res?.message, {
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
    }

    if (isError && res) {
      toast.error(res?.message, {
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
  }, [isSuccess, res, isError]);

  return (
    <ComponentWrapper className='pt-10 space-y-8 min-h-[80vh]'>
      <h1 className='text-2xl text-center'>Update post</h1>
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
