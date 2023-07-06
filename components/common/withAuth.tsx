'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useUserByClerkId } from '@/hooks/useUserByClerkId';
import Loader from './Loader';

function withAuth<T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>,
) {
  const WithAuthComponent = (props: T) => {
    const { data: user, isLoaded, isLoading } = useUserByClerkId();

    useEffect(() => {
      if (isLoaded && !user) {
        redirect('/new-user');
      }
    }, [user, isLoaded]);

    return (
      <>
        {isLoading ? <Loader /> : null}
        {isLoaded ? <Component {...props} /> : null}
      </>
    );
  };

  WithAuthComponent.displayName = `withAuth(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WithAuthComponent;
}

export default withAuth;
