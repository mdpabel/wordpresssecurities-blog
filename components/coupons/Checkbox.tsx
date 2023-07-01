import React from 'react';

interface ICheckBox {
  label: string;
}

const CheckBox = ({ label }: ICheckBox) => (
  <div className='flex items-center mb-4 mr-5'>
    <input
      id={label}
      type='checkbox'
      value=''
      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
    />
    <label htmlFor={label} className='ml-2 text-sm font-medium text-gray-900 '>
      {label}
    </label>
  </div>
);

export default CheckBox;
