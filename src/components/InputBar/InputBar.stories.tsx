'use client';

import type { Meta, StoryObj } from '@storybook/react';
import InputBar from './';
import Button from '../Button';
import Icon from '../Icon';

const meta: Meta<typeof InputBar> = {
  title: 'components/InputBar',
  component: InputBar,
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
type Story = StoryObj<typeof InputBar>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Compound Component 패턴으로 구성된 InputBar입니다. 라벨, 인풋, 헬퍼, 버튼 등을 조합할 수 있습니다.',
      },
    },
  },
  args: {},
  render: (args) => (
    <InputBar {...args}>
      <InputBar.Label>ID</InputBar.Label>
      <InputBar.Input disabled={args.status === 'disabled'} />
      <InputBar.Helper>helper text</InputBar.Helper>
    </InputBar>
  ),
};

export const WithButtons: Story = {
  args: {
    status: undefined,
  },
  render: (args) => (
    <InputBar {...args}>
      <InputBar.Label>Search...</InputBar.Label>
      <InputBar.Input disabled={args.status === 'disabled'}>
        <InputBar.Buttons>
          <Button size="extraSmall" radius="circle" variant="plain">
            <Icon src={'/icons/cancel.svg'} size="small" alt={'지우기'} />
          </Button>
          <Button size="extraSmall" radius="circle" variant="plain">
            <Icon src={'/icons/search.svg'} size="small" alt={'검색'} />
          </Button>
        </InputBar.Buttons>
      </InputBar.Input>
    </InputBar>
  ),
};

export const Error: Story = {
  args: {
    status: 'error',
  },
  render: (args) => (
    <InputBar {...args}>
      <InputBar.Label>이메일</InputBar.Label>
      <InputBar.Input disabled={args.status === 'disabled'} />
      <InputBar.Helper>올바른 이메일 형식이 아닙니다.</InputBar.Helper>
    </InputBar>
  ),
};

export const Disabled: Story = {
  args: {
    status: 'disabled',
  },
  render: (args) => (
    <InputBar {...args}>
      <InputBar.Label>ID</InputBar.Label>
      <InputBar.Input disabled={args.status === 'disabled'} />
    </InputBar>
  ),
};
