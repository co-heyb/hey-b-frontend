// ✅ InputToggle.stories.tsx
'use client';

import type { Meta, StoryObj } from '@storybook/react';
import InputToggle from './';

const meta: Meta<typeof InputToggle> = {
  title: 'components/InputToggle',
  component: InputToggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['error', 'disabled', undefined],
      description: '에러 또는 비활성화 상태를 나타냅니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputToggle>;

export const Checkbox: Story = {
  render: (args) => (
    <InputToggle {...args}>
      <InputToggle.Input type="checkbox" disabled={args.status === 'disabled'}>
        자동 로그인
      </InputToggle.Input>
      <InputToggle.Helper>자동으로 로그인합니다.</InputToggle.Helper>
    </InputToggle>
  ),
};

export const RadioGroup: Story = {
  render: (args) => (
    <InputToggle>
      <InputToggle.Input type="radio" value="A">
        A<InputToggle.Helper>간편하게 로그인하는 방식입니다.</InputToggle.Helper>
      </InputToggle.Input>
      <InputToggle.Input type="radio" value="B">
        B<InputToggle.Helper>보안을 강화한 로그인 방식입니다.</InputToggle.Helper>
      </InputToggle.Input>
      <InputToggle.Input type="radio" value="C">
        C<InputToggle.Helper>기타 옵션입니다. 상황에 맞게 선택하세요.</InputToggle.Helper>
      </InputToggle.Input>
    </InputToggle>
  ),
};
