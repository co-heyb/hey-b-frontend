import { ButtonProps } from '@/components/Button';
import { Editor } from '@tiptap/react';

export interface ToolbarButtonType extends ButtonProps {
  command: string;
  icon: string;
  checkKey?: string;
  activeCheck?: string | Record<string, any>;
  canCheck?: 'undo' | 'redo';
  args?: any;
  onClick: (editor: Editor) => void;
}
