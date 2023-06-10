'use client';

import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import Button from '@/components/Button';

const EditorJodit = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = {
    zIndex: 0,
    readonly: false,
    enableDragAndDropFileToEditor: true,
    saveModeInCookie: false,
    spellcheck: true,
    triggerChangeEvent: true,
    height: 450,
    disablePlugins: ['paste', 'stat'],
    events: {},
    textIcons: false,
    uploader: {
      insertImageAsBase64URI: false,
    },
    filebrowser: {},

    placeholder: '',
    showXPathInStatusbar: false,
  };

  const handleSavePost = () => {};

  // const fileBrowser = (callback) => {
  //   // Make an AJAX request to the API endpoint
  //   fetch('/api/upload')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Pass the retrieved image URLs to the callback
  //       console.log(data);
  //       callback(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  return (
    <div className='space-y-8'>
      <JoditEditor
        className='prose'
        ref={editor}
        value={content}
        config={{
          zIndex: 0,
          readonly: false,
          enableDragAndDropFileToEditor: true,
          triggerChangeEvent: true,
          height: 450,
          uploader: {
            insertImageAsBase64URI: false,
            url: '/api/upload',
            filesVariableName: function () {
              return 'img';
            },
          },
          filebrowser: {
            ajax: {
              url: '/api/upload',
              // process: fileBrowser,
            },
            // create: {
            //   url: '/api/upload',
            // },
          },
        }}
        onBlur={(newContent) => setContent(newContent)}
      />

      <Button className='justify-end' onClick={handleSavePost}>
        Save post
      </Button>
    </div>
  );
};

export default EditorJodit;
