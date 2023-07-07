'use client';
import { useEffect } from 'react';
import { useUserByClerkId } from './useUserByClerkId';
import { redirect } from 'next/navigation';

export const useNewUser = () => {
  const { data: user, isLoaded } = useUserByClerkId();

  useEffect(() => {
    if (isLoaded && !user) {
      redirect('/new-user');
    }
  }, [user, isLoaded]);
};
