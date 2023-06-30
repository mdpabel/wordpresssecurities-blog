'use client';
import React from 'react';

interface IItem {
  id: string;
  value: string;
  label: string;
  handleChecked: (value: string, checked: boolean) => void;
}

const Item = ({ id, value, label, handleChecked }: IItem) => {
  return (
    <li className='w-full border-b border-gray-200 sm:border-b-0 sm:border-r '>
      <div className='flex items-center pl-3'>
        <input
          onChange={(e) => handleChecked(value, e.target.checked)}
          id={id}
          type='checkbox'
          value={value}
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
        />
        <label
          htmlFor={id}
          className='w-full py-3 ml-2 text-sm font-medium text-gray-900 '
        >
          {label}
        </label>
      </div>
    </li>
  );
};

const categories = [
  {
    id: 'blog',
    value: 'blog',
    label: 'Blog',
  },
  {
    id: 'hosting_review',
    value: 'hosting_review',
    label: 'Hosting Review',
  },
  {
    id: 'coupons',
    value: 'coupons',
    label: 'Coupons',
  },
  {
    id: 'vulnerabilities',
    value: 'vulnerabilities',
    label: 'vulnerabilities',
  },
];

interface ICategory {
  setCheckedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  checkedCategories: string[];
}

const Category = ({ setCheckedCategories, checkedCategories }: ICategory) => {
  const handleChecked = (value: string, checked: boolean) => {
    if (checked) {
      setCheckedCategories([...checkedCategories, value]);
    } else {
      setCheckedCategories((prevValues) =>
        prevValues?.filter((val) => val !== value),
      );
    }
  };

  return (
    <div className='pt-8'>
      <h3 className='mb-4 font-semibold text-gray-900 '>Technology</h3>
      <ul className='items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex '>
        {categories.map(({ id, value, label }) => (
          <Item
            id={id}
            value={value}
            label={label}
            key={id}
            handleChecked={handleChecked}
          />
        ))}
      </ul>
    </div>
  );
};

export default Category;
