'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TipTapLink from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import Image from '@tiptap/extension-image';

import Menubar from './Menubar';
import Button from '@/components/Button';

const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      Image,
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

  const handleSavePost = () => {
    const html = editor?.getHTML();
    console.log(html);
  };

  return (
    <div>
      <Menubar editor={editor} />
      <EditorContent
        className='w-full px-10 py-6 overflow-auto bg-white h-96'
        editor={editor}
      />
      <Button onClick={handleSavePost}>Save Post</Button>
    </div>
  );
};

export default TextEditor;
