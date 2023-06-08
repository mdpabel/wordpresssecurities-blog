'use client';
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import Button from '@/components/Button';

const EditorJodit = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: 'Start typings...',
      enableDragAndDropFileToEditor: true,
      uploader: {
        insertImageAsBase64URI: true,
      },
      spellcheck: true,
      height: '550px',
    }),
    []
  );

  const handleSavePost = () => {};

  return (
    <div className='space-y-8'>
      <JoditEditor
        className='prose'
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
      />

      <Button className='justify-end' onClick={handleSavePost}>
        Save post
      </Button>
    </div>
  );
};

export default EditorJodit;
