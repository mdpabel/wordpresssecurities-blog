'use client';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TipTapLink from '@tiptap/extension-link';
import {
  FaBold,
  FaItalic,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaLink,
  FaUndoAlt,
  FaUndo,
  FaUnderline,
  FaRedo,
} from 'react-icons/fa';
import { BiCodeBlock } from 'react-icons/bi';
import { AiOutlineFontColors } from 'react-icons/ai';
import { useState, useCallback, FormEvent } from 'react';

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  const [show, setShow] = useState(false);
  const [activeHeading, setActiveHeading] = useState('');
  const [url, setUrl] = useState('');
  const [linkOpen, setLinkOpen] = useState(false);

  if (!editor) {
    return null;
  }

  const handleHeadingSelect = (level: any) => {
    editor.chain().focus().toggleHeading({ level }).run();
    setActiveHeading('Heading ' + level);
    setShow(false);
  };

  const setLink = () => {
    // cancelled
    if (!url) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  if (!editor) {
    return null;
  }

  return (
    <div className='flex items-center px-10 py-2 space-x-4 bg-gray-200'>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active-editor-btn' : ''}
      >
        <FaBold />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active-editor-btn' : ''}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active-editor-btn' : ''}
      >
        <s>S</s>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active-editor-btn' : ''}
      >
        <BiCodeBlock />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
      >
        <FaAlignLeft />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
      >
        <FaAlignCenter />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
      >
        <FaAlignRight />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
      >
        <FaAlignJustify />
      </button>

      <div className='relative inline-block text-left'>
        <button
          onClick={() => setLinkOpen(!linkOpen)}
          className={editor.isActive('link') ? 'is-active-editor-btn' : ''}
        >
          <FaLink />
        </button>
        <div
          style={{
            display: linkOpen ? 'block' : 'none',
          }}
          className='absolute left-[-150px] z-50  mt-2 origin-top-right'
        >
          <form
            className='px-10 py-4 space-y-4 border'
            onSubmit={(e: any) => {
              e.preventDefault();
              setUrl(e.target['url'].value);
              setLinkOpen(false);
              setLink();
            }}
          >
            <input
              className='px-4 py-2 border border-black rounded'
              type='url'
              name=''
              id='url'
              placeholder='https://wordpresssecurities.com'
            />
            <button
              className='px-4 py-1 text-white bg-black rounded'
              type='submit'
            >
              Add Link
            </button>
          </form>
        </div>
      </div>

      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        <AiOutlineFontColors />
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button>
      <div className='relative inline-block text-left'>
        <div>
          <button
            onClick={() => setShow(!show)}
            type='button'
            className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            id='heading-options'
            aria-haspopup='true'
            aria-expanded='true'
          >
            {activeHeading ? activeHeading : 'Heading'}
            <svg
              className='w-5 h-5 ml-2 -mr-1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M10 3a1 1 0 00-1 1v5.586L6.707 8.293a1 1 0 10-1.414 1.414l3.586 3.586a1 1 0 001.414 0l3.586-3.586a1 1 0 
                  00-1.414-1.414L11 9.586V4a1 1 0 00-1-1zM6 10.414L10 14.414 14 10.414V5a1 1 0 00-1-1H7a1 1 0 00-1 1v5.414z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
        <div
          style={{
            display: show ? 'block' : 'none',
          }}
          className='absolute right-0 z-50 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='heading-options'
        >
          <div className='py-1' role='none'>
            {[1, 2, 3, 4, 5, 6].map((level) => (
              <button
                key={level}
                onClick={() => handleHeadingSelect(level)}
                className={
                  editor.isActive('heading', { level })
                    ? 'is-active-editor-btn block  border-b w-full'
                    : 'block border-b w-full'
                }
                role='menuitem'
              >
                Heading {level}
              </button>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active-editor-btn' : ''}
      >
        <FaListUl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active-editor-btn' : ''}
      >
        <FaListOl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active-editor-btn' : ''}
      >
        <BiCodeBlock />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active-editor-btn' : ''}
      >
        <FaQuoteLeft />
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        hr
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        br
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        <FaUndoAlt />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        <FaRedo />
      </button>
    </div>
  );
};

export default MenuBar;
