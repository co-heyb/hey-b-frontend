import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import Icon from '../Icon';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼의 크기를 설정합니다. 기본값은 `small`입니다.',
    },
    wide: { control: 'select', options: ['true'], description: '버튼이 너비 100%로 확장할 수 있습니다.' },
    radius: {
      control: 'select',
      options: ['rect', 'circle'],
      description: '버튼의 모양을 결정합니다. `rect`는 일반 사각형, `circle`은 원형 버튼입니다.',
    },
    style: {
      control: 'select',
      options: ['filled', 'outline', 'plain', 'plainRect', 'underline'],
      description: '버튼의 스타일을 설정합니다. 기본값은 `filled`입니다.',
    },
    colorFill: {
      control: 'select',
      options: ['mint', 'coral'],
      description: 'style이 filled인 버튼의 색상을 설정합니다. `mint` 또는 `coral` 중 선택할 수 있습니다.',
    },
    disabled: { control: 'radio', options: [true, false], description: '버튼을 비활성화할지 여부를 설정합니다.' },

    children: {
      control: { type: 'radio' },
      options: ['text', 'icon'],
      mapping: {
        text: 'Button',
        icon: <Icon src={'/icons/share.svg'} alt={'image.alt'} />,
      },
      description: 'icon만 있는 버튼의 경우<Icon />으로 아이콘을 렌더링합니다.',
    },
    onClick: { action: 'clicked' },
  },
};
export default meta;

export const Default: StoryObj<typeof Button> = {
  parameters: {
    docs: {
      description: {
        story: 'Button 기본 속성은 size: small, style: filled',
      },
    },
  },
  args: {
    children: 'text',
  },
};

export const Size: StoryObj<typeof Button> = {
  args: {
    style: 'filled',
    children: 'text',
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <Button {...args} size="extraSmall"></Button>
        <Button {...args} size="small"></Button>
        <Button {...args} size="medium"></Button>
        <Button {...args} size="large"></Button>
        <Button {...args} size="extraLarge"></Button>

        <Button {...args} size="small" wide={true}></Button>
      </div>
    );
  },
};

export const Style: StoryObj<typeof Button> = {
  args: {
    size: 'small',
    children: 'text',
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <Button {...args} style="filled"></Button>
        <Button {...args} style="outline"></Button>
        <Button {...args} style="underline"></Button>
        <Button {...args} style="plain"></Button>
        <Button {...args} style="plainRect"></Button>
      </div>
    );
  },
};

export const ColorFill: StoryObj<typeof Button> = {
  args: {
    size: 'small',
    children: 'text',
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <Button {...args}></Button>
        <Button {...args} colorFill="mint"></Button>
        <Button {...args} colorFill="coral"></Button>
      </div>
    );
  },
};

export const StyleDisabled: StoryObj<typeof Button> = {
  args: {
    size: 'small',
    children: 'text',
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <Button {...args} style="filled" disabled></Button>
        <Button {...args} style="outline" disabled></Button>
        <Button {...args} style="underline" disabled></Button>
        <Button {...args} style="plain" disabled></Button>
        <Button {...args} style="plainRect" disabled></Button>
      </div>
    );
  },
};

export const IconButton: StoryObj<typeof Button> = {
  args: {
    size: 'extraSmall',
    radius: 'circle',
    children: 'icon',
  },
  render: (args) => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <Button {...args} style="filled">
          <Icon src={'/icons/share.svg'} alt={'image.alt'} colorFill="white" />
        </Button>
        <Button {...args} style="outline"></Button>
        <Button {...args} style="plain"></Button>
        <Button {...args} style="plainRect"></Button>
      </div>
    );
  },
};
