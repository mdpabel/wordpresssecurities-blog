import React, { ReactNode } from 'react';

const Title = ({ children }: { children: ReactNode }) => {
  return <h2 className='pb-5 text-lg font-semibold text-center'>{children}</h2>;
};

export default Title;
