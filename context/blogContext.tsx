'use client';
import { Post } from '@prisma/client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';

const PostContext = createContext<Post | undefined>(undefined);

type PostContextProviderProps = {
  children: React.ReactNode;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const PostContextProvider = ({ children }: PostContextProviderProps) => {
  const { data }: { data: { data: Post } } = useSWR('/api/blog', fetcher);

  const posts = useMemo(() => data?.data ?? [], [data?.data]);

  return <PostContext.Provider value={posts}>{children}</PostContext.Provider>;
};

export const usePost = () => {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error(
      'useContext must be used inside of a Provider with a value.',
    );
  }
  return context;
};
