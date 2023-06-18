'use client';

import React, { FormEvent } from 'react';
import Input, { Select } from '../common/Input';
import Button from '@/components/common/Button';

const options = [
  {
    label: 'Type..',
    value: '',
  },

  {
    label: 'Portfolio',
    value: 'Portfolio',
  },

  {
    label: 'Fiverr',
    value: 'Fiverr',
  },

  {
    label: 'Upwork',
    value: 'Upwork',
  },

  {
    label: 'Github',
    value: 'Github',
  },

  {
    label: 'Facebook',
    value: 'Facebook',
  },

  {
    label: 'Leetcode',
    value: 'Leetcode',
  },

  {
    label: 'Freelancer',
    value: 'Freelancer',
  },

  {
    label: 'Linkedin',
    value: 'Linkedin',
  },

  {
    label: 'Codeforces',
    value: 'Codeforces',
  },
  {
    label: 'Resume',
    value: 'Resume',
  },
];

interface ILinkComponent {
  links: {
    link: string;
    type: string;
  }[];
  addNewLink: (e: FormEvent<HTMLFormElement>) => void;
  handleLinkChange: (index: number, field: string, value: string) => void;
}

const LinkComponent = ({
  links,
  addNewLink,
  handleLinkChange,
}: ILinkComponent) => {
  return (
    <form onSubmit={addNewLink} className='w-full md:p-10'>
      <h2 className='font-semibold text-gray-600'>How to connect with you?</h2>
      {links.map((obj, index) => (
        <div
          key={index}
          className='flex flex-col w-full space-y-2 md:space-x-4 md:flex-row'
        >
          <input
            required
            className={`w-full py-2 pl-3 mt-2 text-xs leading-none text-gray-900 border rounded font-base md:py-2 md:text-base focus:outline-none `}
            type='text'
            name={`link-${index}`}
            placeholder='Your link here'
            value={obj.link ?? ''}
            onChange={(e) => handleLinkChange(index, 'link', e.target.value)}
            // pattern='(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]'
          />
          <select
            required
            className='w-full py-2 pl-3 mt-2 text-xs leading-none text-gray-900 border rounded font-base md:py-2 md:text-base focus:outline-none'
            name={`type-${index}`}
            value={obj.type ?? ''}
            onChange={(e) => handleLinkChange(index, 'type', e.target.value)}
          >
            {options?.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      ))}

      <button className='p-2 px-4 mt-8 bg-white border rounded' type='submit'>
        + Add Links
      </button>
    </form>
  );
};

export default LinkComponent;
