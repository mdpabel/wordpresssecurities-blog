'use client';

import Category from '@/components/dashboard/Category';
const categories = [
  {
    id: 'Domain',
    value: 'Domain',
    label: 'Domain',
  },
  {
    id: 'Hosting',
    value: 'Hosting',
    label: 'Hosting',
  },
  {
    id: 'SSL',
    value: 'SSL',
    label: 'SSL',
  },
  {
    id: 'VPN',
    value: 'VPN',
    label: 'VPN',
  },

  {
    id: 'Namecheap',
    value: 'Namecheap',
    label: 'Namecheap',
  },
  {
    id: 'Hostinger',
    value: 'Hostinger',
    label: 'Hostinger',
  },

  {
    id: 'Bluehost',
    value: 'Bluehost',
    label: 'Bluehost',
  },

  {
    id: 'Siteground',
    value: 'Siteground',
    label: 'Siteground',
  },

  {
    id: 'Godaddy',
    value: 'Godaddy',
    label: 'Godaddy',
  },

  {
    id: 'Hostgator',
    value: 'Hostgator',
    label: 'Hostgator',
  },

  {
    id: 'Digital ocean',
    value: 'Digital ocean',
    label: 'Digital ocean',
  },
];

interface IEditor {
  setCheckedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  checkedCategories: string[];
  setContent: (v: any) => void;
  content: string;
}

const Editor = ({
  setContent,
  content,
  setCheckedCategories,
  checkedCategories,
}: IEditor) => {
  return (
    <div className='space-y-8 editorImg'>
      WILL BE DONE SOON
      <Category
        categories={categories}
        checkedCategories={checkedCategories}
        setCheckedCategories={setCheckedCategories}
      />
    </div>
  );
};

export default Editor;
