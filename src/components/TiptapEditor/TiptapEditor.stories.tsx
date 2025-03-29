'use client';

import type { Meta, StoryObj } from '@storybook/react';
import dynamic from 'next/dynamic';

const TiptapEditor = dynamic(() => import('./'), {
  ssr: false,
});
TiptapEditor.displayName = 'TiptapEditor';

const meta: Meta<typeof TiptapEditor> = {
  title: 'components/TiptapEditor',
  component: TiptapEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code',
      },
      description: {
        story: 'Tiptap 기반 커스텀 에디터입니다. Bold, Italic, Heading, Color 등 다양한 툴을 제공합니다.',
      },
    },
  },
  argTypes: {
    initialContent: {
      control: 'text',
      defaultValue: '<p>Hello, HeyB! 👋</p>',
      description: '초기 HTML 콘텐츠를 입력합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TiptapEditor>;

export const Default: Story = {
  args: {
    initialContent: '<p>Hello, HeyB! 👋</p>',
  },
};
