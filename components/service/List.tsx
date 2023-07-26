import { ReactNode } from 'react';

const List = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <p className='mb-1 text-base leading-loose text-body-color'>
        ✔️ {children}
      </p>
    </>
  );
};

export default List;
