'use client';
import React, { useState, useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {
  const [content, setContent] = useState('');
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
      const file = input.files[0];

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

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        console.log

        // if (response.ok) {
        //   const data = await response.json();
        //   const imageUrl = data.url;

        //   const range = editor.getSelection(true);
        //   editor.insertEmbed(range.index, 'image', imageUrl);
        //   editor.setSelection(range.index + 1);
        // } else {
        //   console.error('Image upload failed');
        // }
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
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['image', 'link'],
          [
            {
              color: [
                '#000000',
                '#e60000',
                '#ff9900',
                '#ffff00',
                '#008a00',
                '#0066cc',
                '#9933ff',
                '#ffffff',
                '#facccc',
                '#ffebcc',
                '#ffffcc',
                '#cce8cc',
                '#cce0f5',
                '#ebd6ff',
                '#bbbbbb',
                '#f06666',
                '#ffc266',
                '#ffff66',
                '#66b966',
                '#66a3e0',
                '#c285ff',
                '#888888',
                '#a10000',
                '#b26b00',
                '#b2b200',
                '#006100',
                '#0047b2',
                '#6b24b2',
                '#444444',
                '#5c0000',
                '#663d00',
                '#666600',
                '#003700',
                '#002966',
                '#3d1466',
              ],
            },
          ],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  return (
    <div>
      <h2>React Quill</h2>
      <ReactQuill
        ref={quillRef}
        value={content}
        onChange={handleEditorChange}
        modules={modules}
      />
    </div>
  );
};

export default Editor;
