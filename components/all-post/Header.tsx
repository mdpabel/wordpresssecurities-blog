import React from 'react';

interface IHeader {
  text: string;
}

const Header = ({ text }: IHeader) => {
  return <div className='flex items-center cursor-pointer'>{text}</div>;
};

export default Header;
