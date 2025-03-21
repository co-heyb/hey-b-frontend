'use client';

import type { Meta, StoryObj } from '@storybook/react';
import InputBar from './';
import Button from '../Button';
import Icon from '../Icon';
import { useState } from 'react';

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
export const Password: Story = {
  args: {},
  render: (args) => {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState('12345678');

    const togglePassword = () => setShowPassword((prev) => !prev);
    const clearValue = () => setValue('');

    return (
      <InputBar {...args}>
        <InputBar.Label>PW</InputBar.Label>
        <InputBar.Input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          disabled={args.status === 'disabled'}
        >
          <InputBar.Buttons>
            {!!value && (
              <Button size="extraSmall" radius="circle" variant="plain" onClick={() => clearValue()}>
                <Icon src="/icons/cancel.svg" size="small" alt="지우기" />
              </Button>
            )}
            <Button size="extraSmall" radius="circle" variant="plain" onClick={() => togglePassword()}>
              <Icon
                src={showPassword ? '/icons/eye-closed.svg' : '/icons/eye-open.svg'}
                size="small"
                alt="비밀번호 보기"
              />
            </Button>
          </InputBar.Buttons>
        </InputBar.Input>
        <InputBar.Helper>비밀번호를 입력해주세요</InputBar.Helper>
      </InputBar>
    );
  },
};

export const WithButtons: Story = {
  args: {
    status: undefined,
  },
  render: (args) => {
    const [value, setValue] = useState('');
    const clearValue = () => setValue('');

    return (
      <InputBar {...args}>
        <InputBar.Label>Search...</InputBar.Label>
        <InputBar.Input value={value} onChange={(e) => setValue(e.target.value)} disabled={args.status === 'disabled'}>
          <InputBar.Buttons>
            {!!value && (
              <Button size="extraSmall" radius="circle" variant="plain" onClick={() => clearValue()}>
                <Icon src="/icons/cancel.svg" size="small" alt="지우기" />
              </Button>
            )}
            <Button size="extraSmall" radius="circle" variant="plain">
              <Icon src={'/icons/search.svg'} size="small" alt={'검색'} />
            </Button>
          </InputBar.Buttons>
        </InputBar.Input>
      </InputBar>
    );
  },
};

export const Error: Story = {
  args: {
    status: 'error',
  },
  render: (args) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(args.status);

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setEmail(val);
      setStatus(emailRegex.test(val) ? undefined : 'error');
    };

    return (
      <InputBar status={status}>
        <InputBar.Label>Email</InputBar.Label>
        <InputBar.Input type="email" value={email} onChange={(e) => handleChange(e)} required />
        {status === 'error' && <InputBar.Helper>올바른 이메일 형식을 입력해주세요.</InputBar.Helper>}
      </InputBar>
    );
  },
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
