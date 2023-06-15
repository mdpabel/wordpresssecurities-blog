// @ts-nocheck
'use client';
import React, { useState, useMemo, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import hljs from 'highlight.js';
import 'react-quill/dist/quill.snow.css';
// import 'highlight.js/styles/darcula.css';
import 'highlight.js/styles/default.css';
import Button from '@/components/common/Button';
import { UploadIcon } from '@/components/icons';
import SEO from './SEO';
import CoverImg from './CoverImg';
import Spinner from '@/components/common/Spinner';

interface IEditor {
  handleSavePost: () => void;
  setContent: (v) => void;
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

const Editor = ({
  handleSavePost,
  setContent,
  content,
  coverImg,
  setCoverImg,
  metas,
  setMetas,
  isLoading,
}: IEditor) => {
  const quillRef = useRef();
  const imageHandler = async () => {
    const editor = quillRef.current?.getEditor();

    if (!editor) {
      console.log('Editor instance not found');
      return;
    }

    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
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

      const range = editor.getSelection(true);
      editor.insertEmbed(range.index, 'image', `/images/placeholder.png`);
      editor.setSelection(range.index + 1);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          const imageUrl = data.secure_url;

          editor.deleteText(range.index, 1);
          editor.insertEmbed(range.index, 'image', imageUrl);
          editor.setSelection(range.index + 1);
        } else {
          console.error('Image upload failed');
        }
      } catch (error) {
        console.error('Image upload failed', error);
      }
    };
  };

  const handleEditorChange = (value: any) => {
    setContent(value);
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ align: [] }],
          ['blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ direction: 'rtl' }],
          [{ color: [] }, { background: [] }],
          ['link', 'image', 'video'],
          ['clean'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      syntax: {
        highlight: (text) => hljs.highlightAuto(text).value,
      },
    }),
    []
  );

  return (
    <div className='space-y-14'>
      <ReactQuill
        placeholder='Hello world....'
        className='bg-white h-80'
        ref={quillRef}
        value={content}
        onChange={handleEditorChange}
        modules={modules}
      />
      <div className='flex flex-col space-x-8 space-y-8 md:justify-between md:flex-row md:items-center'>
        <SEO metas={metas} setMetas={setMetas} />
        <CoverImg setCoverImg={setCoverImg} coverImg={coverImg} />
      </div>
      <Button className='flex' onClick={handleSavePost}>
        Save post {isLoading ? <Spinner /> : null}
      </Button>
    </div>
  );
};

export default Editor;
