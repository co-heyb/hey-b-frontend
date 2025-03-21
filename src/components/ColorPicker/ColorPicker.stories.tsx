'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ColorPicker from './';
import Button from '../Button';
import { theme, vars } from '@/styles/theme.css';

const meta: Meta<typeof ColorPicker> = {
  title: 'components/ColorPicker',
  component: ColorPicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        story: '🎨 사용자에게 색상을 선택할 수 있도록 하는 커스텀 ColorPicker 컴포넌트입니다.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    defaultColor: {
      control: 'color',
      defaultValue: theme.colors.mint,
      description: '초기 선택 색상입니다.',
    },
    isOpen: {
      control: 'boolean',
      defaultValue: true,
      description: 'ColorPicker가 열려 있는지 여부입니다.',
    },
    onComplete: { action: '색상 적용됨!' },
    onClose: { action: 'ColorPicker 닫힘!' },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  args: {
    defaultColor: theme.colors.mint,
    isOpen: true,
  },
  render: (args) => {
    const [open, setOpen] = useState(args.isOpen);
    const [selectedColor, setSelectedColor] = useState<string>(args.defaultColor);
    const getContrastText = (hexColor: string): string => {
      const c = hexColor.substring(1); // # 제거
      const rgb = parseInt(c, 16); // 16진수 → 10진수
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = rgb & 0xff;

      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness > 128 ? '#000000' : '#ffffff';
    };

    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {!open && (
          <Button
            colorFill="mint"
            style={{ backgroundColor: selectedColor, color: getContrastText(selectedColor) }}
            onClick={() => setOpen((prev) => !prev)}
          >
            {selectedColor ? `적용된 색상: ${selectedColor}` : '색상 선택하기'}
          </Button>
        )}
        <div style={{ position: 'relative', height: 400 }}>
          <ColorPicker
            {...args}
            isOpen={open}
            onClose={() => {
              setOpen(false);
            }}
            onComplete={(color: string) => {
              args.onComplete?.(color);
              setSelectedColor(color);
            }}
          />
        </div>
      </div>
    );
  },
};
