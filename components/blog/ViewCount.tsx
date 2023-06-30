'use client';
import { useState, useEffect } from 'react';
import { client } from '@/utils/client';
import { useAsync } from '@/hooks/useAsync';

const ViewCount = ({ id }: { id: string }) => {
  const { isLoading, isError, isSuccess, data, error, run } = useAsync();

  const api = '/api/views/' + id;

  useEffect(() => {
    client(api, {
      method: 'POST',
    });
  }, [api]);

  useEffect(() => {
    run(client(api));
  }, [api, run]);

  return (
    <div className='px-5 py-1 font-semibold border rounded shadow-sm'>
      {isLoading && 'Loading...'}
      {isSuccess && data?.data + ' Views'}
      {isError && 0}
    </div>
  );
};

export default ViewCount;
