'use client';
import { useState, useEffect, cache, useMemo } from 'react';
import { Link, User } from '@prisma/client';
import useSWR from 'swr';

type Data = User & {
  links: Link[];
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useUserByClerkId = () => {
  const { data, isLoading } = useSWR('/api/profile', fetcher, {});

  const user = useMemo(() => data?.data ?? null, [data?.data]);

  return { isLoading, isLoaded: isLoading === false, data: user as Data };
};
