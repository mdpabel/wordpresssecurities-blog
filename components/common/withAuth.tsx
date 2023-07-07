'use client';
import { useEffect } from 'react';
import { useUserByClerkId } from '@/hooks/useUserByClerkId';
import Loader from './Loader';
import { useRouter } from 'next/navigation';

function withAuth<T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>,
) {
  const WithAuthComponent = (props: T) => {
    const rouer = useRouter();
    const { data: user, isLoaded, isLoading } = useUserByClerkId();

    console.log(user, isLoaded);

    useEffect(() => {
      if (isLoaded && !user) {
        rouer.replace('/new-user');
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
