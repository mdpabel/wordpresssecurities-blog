import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useUserByClerkId } from '@/hooks/useUserByClerkId';

function withAuth<T extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<T>,
) {
  const WithAuthComponent = (props: T) => {
    const { data: user, isLoaded } = useUserByClerkId();

    useEffect(() => {
      if (isLoaded && !user) {
        redirect('/new-user');
      }
    }, [user, isLoaded]);

    return (
      <>
        <Component {...props} />
      </>
    );
  };

  WithAuthComponent.displayName = `withAuth(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WithAuthComponent;
}

export default withAuth;
