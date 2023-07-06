'use client';
import dynamic from 'next/dynamic';
import ComponentWrapper from '@/components/common/ComponentWrapper';
import Input, {
  InputWrapper,
  Label,
  TextArea,
} from '@/components/common/Input';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from '@/components/common/Button';
import { useAsync } from '@/hooks/useAsync';
import { client } from '@/utils/client';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from '@/components/common/Spinner';
import withAuth from '@/components/common/withAuth';
// import Editor from './Editor';
const Editor = dynamic(() => import('./Editor'), {
  ssr: false,
});

const Page = () => {
  const { data, isLoading, isSuccess, error, run, isError } = useAsync();
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [content, setContent] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [discount, setDiscount] = useState('');
  const [description, setDescription] = useState('');
  const [review, setReview] = useState('');
  const [link, setLink] = useState('');

  const handleSavePost = (e: FormEvent) => {
    e.preventDefault();

    const data = {
      categories: checkedCategories,
      name: companyName,
      discount: discount,
      description: description,
      details: content,
      review: review,
    };

    run(
      client('/api/coupon', {
        data: data,
        method: 'POST',
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
    <ComponentWrapper className='pt-10 space-y-8 min-h-[80vh] pb-10'>
      <h1 className='text-2xl text-center'>Add new coupon</h1>
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
      <form onSubmit={handleSavePost}>
        <Input
          type='string'
          onChange={(e) => setCompanyName(e.target.value)}
          value={companyName}
          required
          placeholder='Company Name'
        />
        <Input
          type='string'
          onChange={(e) => setLink(e.target.value)}
          value={link}
          required
          placeholder='Link'
        />
        <Input
          type='number'
          onChange={(e) => setDiscount(e.target.value)}
          value={discount}
          required
          placeholder='90% OFF'
        />
        <Input
          type='text'
          onChange={(e) => setReview(e.target.value)}
          value={review}
          required
          placeholder='Review link'
        />
        <TextArea
          type='text'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
          placeholder='Description'
        />
        <div className='pt-4 pb-8'>
          <label>Details</label>
          <Editor
            checkedCategories={checkedCategories}
            content={content}
            setCheckedCategories={setCheckedCategories}
            setContent={setContent}
          />
        </div>

        <Button className='flex space-x-4' type='submit'>
          Add new coupon {isLoading && <Spinner />}
        </Button>
      </form>
    </ComponentWrapper>
  );
};

export default withAuth(Page);
