import type { Meta, StoryObj } from '@storybook/react';
import InputBar from '.';
import Icon from '../Icon';
import Button from '../Button';

const meta: Meta<typeof InputBar> = {
  title: 'components/InputBar',
  component: InputBar,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['', 'error', 'disabled'],
      description: 'InputBar 상태 설정',
    },
    disabled: {
      control: 'boolean',
      description: '입력 필드 비활성화 여부',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'InputBar 컴포넌트는 `error`, `disabled` 상태를 지원하며, `Label`, `Input`, `Helper`를 포함할 수 있습니다.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof InputBar>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <InputBar {...args}>
      <InputBar.Label>ID</InputBar.Label>
      <InputBar.Input disabled={args.status === 'disabled'} />
      <InputBar.Helper></InputBar.Helper>
    </InputBar>
  ),
};

export const Error: Story = {
  args: {
    status: 'error',
  },
  render: (args) => (
    <InputBar {...args}>
      <InputBar.Label>ID</InputBar.Label>
      <InputBar.Input />
      <InputBar.Helper>아이디를 입력해주세요.</InputBar.Helper>
    </InputBar>
  ),
};

export const Disabled: Story = {
  args: {
    status: 'disabled',
    disabled: true,
  },
  render: (args) => (
    <InputBar {...args}>
      <InputBar.Label>ID</InputBar.Label>
      <InputBar.Input disabled />
    </InputBar>
  ),
};

export const WithButtons: Story = {
  args: {},
  render: (args) => (
    <InputBar {...args}>
      <InputBar.Label>ID</InputBar.Label>
      <div>
        <InputBar.Input>
          <InputBar.Buttons>
            <Button size="small">검색</Button>
          </InputBar.Buttons>
        </InputBar.Input>
      </div>
    </InputBar>
  ),
};

export const WithIcons: Story = {
  args: {},
  render: (args) => (
    <InputBar {...args}>
      <InputBar.Label>ID</InputBar.Label>
      <InputBar.Input>
        <InputBar.Buttons>
          <Button size="extraSmall" radius="circle" style="plain">
            <Icon src={'/icons/cancel.svg'} size="small" alt={'지우기'} />
          </Button>
          <Button size="extraSmall" radius="circle" style="plain">
            <Icon src={'/icons/search.svg'} size="small" alt={'검색'} />
          </Button>
        </InputBar.Buttons>
      </InputBar.Input>
    </InputBar>
  ),
};
