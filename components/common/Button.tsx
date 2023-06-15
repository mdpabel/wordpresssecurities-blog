import React, { ReactNode } from 'react';

interface IButton {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ children, onClick, className, type }: IButton) => {
  return (
    <button
      type={type}
      className={`bg-black text-white px-10 py-2 rounded ` + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
