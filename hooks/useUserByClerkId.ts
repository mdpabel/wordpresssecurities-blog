import { useState, useEffect, cache } from 'react';
import { Link, User } from '@prisma/client';
import useSWR from 'swr';

type Data = User & {
  links: Link[];
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useUserByClerkId = () => {
  const { data, isLoading } = useSWR('/api/profile', fetcher);

  console.log('data ', data);

  return { isLoaded: isLoading === false, data: data?.data as Data };
};
