// @ts-nocheck
'use client';
import React, { useState, useMemo, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import hljs from 'highlight.js';
import 'react-quill/dist/quill.snow.css';
// import 'highlight.js/styles/darcula.css';
import 'highlight.js/styles/default.css';
import Button from '@/components/Button';

interface IEditor {
  handleSavePost: () => void;
  setContent: (v) => void;
  content: string;
}

const Editor = ({ handleSavePost, setContent, content }: IEditor) => {
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
        console.log(response);

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
        className='bg-white h-96'
        ref={quillRef}
        value={content}
        onChange={handleEditorChange}
        modules={modules}
      />
      <Button onClick={handleSavePost}>Save post</Button>
    </div>
  );
};

export default Editor;
