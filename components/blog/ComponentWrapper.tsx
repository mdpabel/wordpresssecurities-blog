import React, { ReactNode } from 'react';

const ComponentWrapper = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`p-4 bg-white rounded shadow ` + className}>{children}</div>
  );
};

export default ComponentWrapper;
