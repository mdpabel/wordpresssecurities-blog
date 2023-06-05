import React, { ReactNode } from 'react';

interface IButton {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

const Button = ({ children, onClick, className }: IButton) => {
  return (
    <button
      className={`bg-black text-white px-10 py-2 rounded ` + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
