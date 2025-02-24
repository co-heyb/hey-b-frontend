'use client';

import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Color from '@tiptap/extension-color';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Image from '@tiptap/extension-image';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import sanitizeHtml from 'sanitize-html';
import { useState } from 'react';
import { editorWrapper, icon, toolbar } from './TiptabEditor.css';
import Button from '../Button';

const TiptapEditor = ({ initialContent }: { initialContent?: string }) => {
  const [content, setContent] = useState(sanitizeHtml(initialContent || undefined)); // ✅ 서버에서 필터링된 HTML

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Color,
      Subscript,
      Superscript,
      Image,
      HorizontalRule,
    ],
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML()); // ✅ 실시간 업데이트
    },
  });

  if (!editor) return null;

  return (
    <div className={editorWrapper}>
      {/* ✅ 툴바 UI */}
      <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
        <div className={toolbar}>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            colorFill={editor.isActive('bold') ? 'mint' : undefined}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <i className={`ri-bold ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            colorFill={editor.isActive('italic') ? 'mint' : undefined}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <i className={`ri-italic ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            colorFill={editor.isActive('underline') ? 'mint' : undefined}
            onClick={() => editor.chain().focus().toggleUnderline().run()}
          >
            <i className={`ri-underline ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            colorFill={editor.isActive('strike') ? 'mint' : undefined}
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            <i className={`ri-strikethrough ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            colorFill={editor.isActive('highlight') ? 'mint' : undefined}
            onClick={() => editor.chain().focus().toggleHighlight().run()}
          >
            <i className={`ri-mark-pen-line ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            colorFill={editor.isActive('blockquote') ? 'mint' : undefined}
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
          >
            <i className={`ri-double-quotes-l ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            colorFill={editor.isActive({ textAlign: 'left' }) ? 'mint' : undefined}
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
          >
            <i className={`ri-align-left ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            colorFill={editor.isActive({ textAlign: 'center' }) ? 'mint' : undefined}
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
          >
            <i className={`ri-align-center ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            colorFill={editor.isActive({ textAlign: 'right' }) ? 'mint' : undefined}
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
          >
            <i className={`ri-align-right ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            colorFill={editor.isActive('orderedList') ? 'mint' : undefined}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          >
            <i className={`ri-list-ordered ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            colorFill={editor.isActive('bulletList') ? 'mint' : undefined}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            <i className={`ri-list-unordered ${icon}`}></i>
          </Button>
          <Button
            style="plain"
            radius="rect"
            size="extraSmall"
            style="plain"
            radius="rect"
            onClick={() => editor.chain().focus().setColor('#ff0000').run()}
          >
            <i className={`ri-font-color ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            onClick={() => editor.chain().focus().setHighlight({ color: '#ffff00' }).run()}
          >
            <i className={`ri-brush-line ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            colorFill={editor.isActive('subscript') ? 'mint' : undefined}
            onClick={() => editor.chain().focus().setSubscript().run()}
          >
            <i className={`ri-subscript ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            colorFill={editor.isActive('superscript') ? 'mint' : undefined}
            onClick={() => editor.chain().focus().setSuperscript().run()}
          >
            <i className={`ri-superscript ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            <i className={`ri-separator ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            onClick={() => editor.chain().focus().setImage({ src: 'https://via.placeholder.com/150' }).run()}
          >
            <i className={`ri-image-line ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            onClick={() => editor.chain().focus().undo().run()}
          >
            <i className={`ri-arrow-go-back-line ${icon}`}></i>
          </Button>
          <Button
            size="extraSmall"
            style="plain"
            radius="rect"
            onClick={() => editor.chain().focus().redo().run()}
          >
            <i className={`ri-arrow-go-forward-line ${icon}`}></i>
          </Button>
        </div>
      </BubbleMenu>
      <EditorContent editor={editor} className={undefined} />
    </div>
  );
};

export default TiptapEditor;
