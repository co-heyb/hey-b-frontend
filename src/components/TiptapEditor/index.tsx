'use client';

import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Image from '@tiptap/extension-image';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import sanitizeHtml from 'sanitize-html';
import { useState, useCallback } from 'react';
import { editorLoading, editorWrapper, spinner, toolbar } from './TiptabEditor.css';
import Button from '../Button';
import ColorPicker from '../ColorPicker';
import { vars } from '@/styles/theme.css';
import { editorType } from '@/types';

const TiptapEditor = ({ initialContent = '' }: { initialContent?: string }) => {
  const [content, setContent] = useState(sanitizeHtml(initialContent));
  const [selectedColor, setSelectedColor] = useState<string>(vars.colors.darkCharcoal);
  const [isColorPickerOpen, setColorPickerOpen] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({ openOnClick: false }),
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      TextStyle,
      Color,
      Subscript,
      Superscript,
      Image,
    ],
    content,
    editorProps: {
      attributes: {
        class: editorWrapper,
      },
    },
    immediatelyRender: false,
    onUpdate({ editor }) {
      setContent(editor.getHTML());
    },
  });

  const handleColorChange = useCallback(
    (color: string) => {
      setSelectedColor(color);
      if (editor) {
        editor.chain().focus().setColor(color).run();
      }
      setColorPickerOpen(false);
    },
    [editor],
  );

  const TOOLBAR_BUTTONS: editorType.ToolbarButtonType[] = [
    {
      command: 'toggleBold',
      checkKey: 'bold',
      icon: 'ri-bold',
      onClick: (e) => e.chain().focus().toggleBold().run(),
    },
    {
      command: 'toggleItalic',
      checkKey: 'italic',
      icon: 'ri-italic',
      onClick: (e) => e.chain().focus().toggleItalic().run(),
    },
    {
      command: 'toggleUnderline',
      checkKey: 'underline',
      icon: 'ri-underline',
      onClick: (e) => e.chain().focus().toggleUnderline().run(),
    },
    {
      command: 'toggleStrike',
      checkKey: 'strike',
      icon: 'ri-strikethrough',
      onClick: (e) => e.chain().focus().toggleStrike().run(),
    },
    {
      command: 'toggleHighlight',
      checkKey: 'highlight',
      icon: 'ri-mark-pen-line',
      onClick: (e) => e.chain().focus().toggleHighlight().run(),
    },
    {
      command: 'toggleBlockquote',
      checkKey: 'blockquote',
      icon: 'ri-double-quotes-l',
      onClick: (e) => e.chain().focus().toggleBlockquote().run(),
    },
    {
      command: 'toggleHeading',
      checkKey: 'heading',
      icon: 'ri-h-1',
      activeCheck: { level: 3 },
      onClick: (e) => e.chain().focus().toggleHeading({ level: 3 }).run(),
    },
    {
      command: 'toggleHeading',
      checkKey: 'heading',
      icon: 'ri-h-2',
      activeCheck: { level: 4 },
      onClick: (e) => e.chain().focus().toggleHeading({ level: 4 }).run(),
    },
    {
      command: 'toggleHeading',
      checkKey: 'heading',
      icon: 'ri-h-3',
      activeCheck: { level: 5 },
      onClick: (e) => e.chain().focus().toggleHeading({ level: 5 }).run(),
    },
    {
      command: 'setTextAlign',
      checkKey: 'textAlign',
      icon: 'ri-align-left',
      activeCheck: { textAlign: 'left' },
      onClick: (e) => e.chain().focus().setTextAlign('left').run(),
    },
    {
      command: 'setTextAlign',
      checkKey: 'textAlign',
      icon: 'ri-align-center',
      activeCheck: { textAlign: 'center' },
      onClick: (e) => e.chain().focus().setTextAlign('center').run(),
    },
    {
      command: 'setTextAlign',
      checkKey: 'textAlign',
      icon: 'ri-align-right',
      activeCheck: { textAlign: 'right' },
      onClick: (e) => e.chain().focus().setTextAlign('right').run(),
    },
    {
      command: 'toggleOrderedList',
      checkKey: 'orderedList',
      icon: 'ri-list-ordered',
      onClick: (e) => e.chain().focus().toggleOrderedList().run(),
    },
    {
      command: 'toggleBulletList',
      checkKey: 'bulletList',
      icon: 'ri-list-unordered',
      onClick: (e) => e.chain().focus().toggleBulletList().run(),
    },
    {
      command: 'toggleColorPicker',
      checkKey: 'textStyle',
      icon: 'ri-palette-line',
      activeCheck: { color: selectedColor },
      onClick: () => setColorPickerOpen((prev) => !prev),
    },
    {
      command: 'setImage',
      icon: 'ri-image-line',
      onClick: (e) => e.chain().focus().setImage({ src: 'https://via.placeholder.com/150' }).run(),
    },
    {
      command: 'undo',
      icon: 'ri-arrow-go-back-line',
      canCheck: 'undo',
      onClick: (e) => e.chain().focus().undo().run(),
    },
    {
      command: 'redo',
      icon: 'ri-arrow-go-forward-line',
      canCheck: 'redo',
      onClick: (e) => e.chain().focus().redo().run(),
    },
  ];

  return (
    <div>
      {editor ? (
        <>
          <BubbleMenu editor={editor} tippyOptions={{ duration: 100, maxWidth: '100%', placement: 'top-start' }}>
            <div className={toolbar}>
              {TOOLBAR_BUTTONS.map(({ command, checkKey, icon, activeCheck, onClick, canCheck }, index) => {
                let isActive = false;

                if (checkKey) {
                  isActive = activeCheck ? editor.isActive(checkKey, activeCheck) : editor.isActive(checkKey);
                }

                // For undo/redo buttons
                const isDisabled = canCheck ? !editor.can()[canCheck]() : false;

                return (
                  <Button
                    key={`${command}-${index}`}
                    size="extraSmall"
                    style="plain"
                    radius="rect"
                    colorFill={isActive ? 'mint' : undefined}
                    onClick={() => onClick(editor)}
                    disabled={isDisabled}
                  >
                    <i className={icon}></i>
                  </Button>
                );
              })}
            </div>
          </BubbleMenu>

          <EditorContent editor={editor} className={editorWrapper} />

          {isColorPickerOpen && (
            <ColorPicker
              isOpen={isColorPickerOpen}
              defaultColor={selectedColor}
              onComplete={handleColorChange}
              onClose={() => setColorPickerOpen(false)}
            />
          )}
        </>
      ) : (
        <div className={editorLoading}>
          <span className={spinner} />
        </div>
      )}
    </div>
  );
};

export default TiptapEditor;
