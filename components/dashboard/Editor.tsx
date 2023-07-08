'use client';
import { useEffect, useCallback } from 'react';
import { useQuill } from 'react-quilljs';
import BlotFormatter from 'quill-blot-formatter';
import 'quill/dist/quill.snow.css';
import SEO from './SEO';
import CoverImg from './CoverImg';
import Spinner from '@/components/common/Spinner';
import Category from './Category';
import Button from '@/components/common/Button';
import upload from '../../uploading.gif';

interface IEditor {
  setCheckedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  checkedCategories: string[];
  handleSavePost: () => void;
  setContent: (v: any) => void;
  content: string;
  setCoverImg: React.Dispatch<React.SetStateAction<string>>;
  coverImg: string;
  isLoading: boolean;
  metas: {
    title: string;
    description: string;
    keywords: string;
  };
  setMetas: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      keywords: string;
    }>
  >;
}

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

const Editor = ({
  handleSavePost,
  setContent,
  content,
  coverImg,
  setCoverImg,
  metas,
  setMetas,
  setCheckedCategories,
  checkedCategories,
  isLoading,
}: IEditor) => {
  const { quill, quillRef, Quill } = useQuill({
    modules: {
      blotFormatter: {},
      magicUrl: true,
    },
    placeholder: 'Write something...',
  });

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(content ?? '');
    }
  }, [content, quill]);

  if (Quill && !quill) {
    Quill.register('modules/blotFormatter', BlotFormatter);
    const MagicUrl = require('quill-magic-url').default; // Install with 'yarn add quill-magic-url'
    Quill.register('modules/magicUrl', MagicUrl);
  }

  // Insert Image(selected by user) to quill
  const insertToEditor = useCallback(
    (url: string) => {
      const range = quill?.getSelection();
      if (!range) {
        console.log('ERROR on dashboard/EDITOR.jsx ', range);
        return;
      }
      quill?.insertEmbed(range.index, 'image', url);
      quill?.setSelection(range?.index + 1, 1);
    },
    [quill],
  );

  // Open Dialog to select Image File
  const selectLocalImage = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      // @ts-ignore
      const file = input?.files[0];

      if (!file) {
        console.log('No file selected');
        return;
      }

      if (!/^image\//.test(file.type)) {
        console.log('You can only upload images.');
        return;
      }

      const formData = new FormData();
      formData.append('image', file);

      // placeholder image
      const range = quill?.getSelection();
      insertToEditor(
        'https://res.cloudinary.com/divg4kqqk/image/upload/v1688755486/uploading_nyjqtx.gif',
      );
      if (!range) {
        console.log('ERROR on dashboard/EDITOR.jsx ', range);
        return;
      }

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        if (!data || !data?.secure_url) {
          alert('Failed to upload image');
          console.log('ERROR on dashboard/EDITOR.jsx ', data);
          return;
        }
        const imageUrl = data?.secure_url;
        quill?.deleteText(range?.index, 1);
        quill?.setSelection(range?.index + 1, 1);
        insertToEditor(imageUrl);
      } catch (error) {
        console.error('Image upload failed', error);
      }
    };
  }, [insertToEditor, quill]);

  useEffect(() => {
    if (quill) {
      quill.getModule('toolbar').addHandler('image', selectLocalImage);
      quill.on('text-change', (delta, oldDelta, source) => {
        setContent(quill.root.innerHTML);
      });
    }
  }, [quill, selectLocalImage, setContent]);

  return (
    <div className='space-y-8 editorImg'>
      <div className='h-80 '>
        <div ref={quillRef} />
      </div>

      <Category
        categories={categories}
        checkedCategories={checkedCategories}
        setCheckedCategories={setCheckedCategories}
      />
      <div className='flex flex-col space-x-8  md:justify-between md:flex-row md:items-center'>
        <SEO metas={metas} setMetas={setMetas} />
        <CoverImg setCoverImg={setCoverImg} coverImg={coverImg} />
      </div>
      <Button className='flex space-x-3' onClick={handleSavePost}>
        Save post {isLoading ? <Spinner /> : null}
      </Button>
    </div>
  );
};

export default Editor;
