'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TipTapLink from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';

import Menubar from './Menubar';

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder.configure({
        placeholder: 'Write something …',
      }),
      TipTapLink.configure({
        openOnClick: false,
        autolink: false,
        linkOnPaste: false,
        HTMLAttributes: {
          target: '',
        },
      }),
    ],

    editorProps: {
      attributes: {
        class: 'prose w-full',
      },
    },
  });

  return (
    <div>
      <Menubar editor={editor} />
      <EditorContent
        className='w-full px-10 py-6 overflow-auto bg-white h-96'
        editor={editor}
      />
    </div>
  );
};

export default TextEditor;
