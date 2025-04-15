import React from 'react';
import Button from '../Button';
import { Tabs } from '.';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'round', 'capsule', 'rectangle'],
      description:
        'Tabs의 타입을 결정합니다. Tabs 컴포넌트는 `underline`, `round`, `capsule`, `rectangle` 네 가지 형태를 지원합니다.',
    },
  },
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Tabs 기본 속성은 variant: underline',
      },
    },
  },
  render: () => (
    <>
      <div style={{ display: 'none' }}>
        <Button>test</Button>
      </div>
      <Tabs variant="underline">
        <Tabs.Tab>
          <Tabs.TabTitle>Tab 1</Tabs.TabTitle>
          <Tabs.Contents>
            <p>This is the content for tab 1</p>
          </Tabs.Contents>
        </Tabs.Tab>
        <Tabs.Tab>
          <Tabs.TabTitle>Tab 2</Tabs.TabTitle>
          <Tabs.Contents>
            <p>This is the content for tab 2</p>
          </Tabs.Contents>
        </Tabs.Tab>
        <Tabs.Tab>
          <Tabs.TabTitle>Tab 3</Tabs.TabTitle>
          <Tabs.Contents>
            <p>This is the content for tab 3</p>
          </Tabs.Contents>
        </Tabs.Tab>
      </Tabs>
    </>
  ),
};

export const UnderlineStyle: Story = {
  args: {
    variant: 'underline',
  },
  render: (args) => {
    return (
      <Tabs {...args}>
        <Tabs.Tab>
          <Tabs.TabTitle>Tab 1</Tabs.TabTitle>
          <Tabs.Contents>
            <p>This is the content for tab 1</p>
          </Tabs.Contents>
        </Tabs.Tab>
        <Tabs.Tab>
          <Tabs.TabTitle>Tab 2</Tabs.TabTitle>
          <Tabs.Contents>
            <p>This is the content for tab 2</p>
          </Tabs.Contents>
        </Tabs.Tab>
        <Tabs.Tab>
          <Tabs.TabTitle>Tab 3</Tabs.TabTitle>
          <Tabs.Contents>
            <p>This is the content for tab 3</p>
          </Tabs.Contents>
        </Tabs.Tab>
      </Tabs>
    );
  },
};
export const RoundStyle: Story = {
  args: {
    variant: 'round',
  },
  render: (args) => {
    return (
      <Tabs {...args}>
        <Tabs.Tab>
          <Tabs.TabTitle>Tab 1</Tabs.TabTitle>
          <Tabs.Contents>
            <p>This is the content for tab 1</p>
          </Tabs.Contents>
        </Tabs.Tab>
        <Tabs.Tab>
          <Tabs.TabTitle>Tab 2</Tabs.TabTitle>
          <Tabs.Contents>
            <p>This is the content for tab 2</p>
          </Tabs.Contents>
        </Tabs.Tab>
        <Tabs.Tab>
          <Tabs.TabTitle>Tab 3</Tabs.TabTitle>
          <Tabs.Contents>
            <p>This is the content for tab 3</p>
          </Tabs.Contents>
        </Tabs.Tab>
      </Tabs>
    );
  },
};
export const CapsuleStyle: Story = {
  args: {
    variant: 'capsule',
  },
  render: (args) => {
    return (
      <Tabs {...args}>
        <Tabs.Tab>
          <Tabs.TabTitle>Tab 1</Tabs.TabTitle>
          <Tabs.Contents>
            <p>This is the content for tab 1</p>
          </Tabs.Contents>
        </Tabs.Tab>
        <Tabs.Tab>
          <Tabs.TabTitle>Tab 2</Tabs.TabTitle>
          <Tabs.Contents>
            <p>This is the content for tab 2</p>
          </Tabs.Contents>
        </Tabs.Tab>
        <Tabs.Tab>
          <Tabs.TabTitle>Tab 3</Tabs.TabTitle>
          <Tabs.Contents>
            <p>This is the content for tab 3</p>
          </Tabs.Contents>
        </Tabs.Tab>
      </Tabs>
    );
  },
};
export const RectStyle: Story = {
  args: {
    variant: 'rect',
  },
  render: (args) => {
    return (
      <>
        <Tabs {...args}>
          <Tabs.Tab>
            <Tabs.TabTitle>Tab 1</Tabs.TabTitle>
            <Tabs.Contents>
              <p>This is the content for tab 1</p>
            </Tabs.Contents>
          </Tabs.Tab>
          <Tabs.Tab>
            <Tabs.TabTitle>Tab 2</Tabs.TabTitle>
            <Tabs.Contents>
              <p>This is the content for tab 2</p>
            </Tabs.Contents>
          </Tabs.Tab>
          <Tabs.Tab>
            <Tabs.TabTitle>Tab 3</Tabs.TabTitle>
            <Tabs.Contents>
              <p>This is the content for tab 3</p>
            </Tabs.Contents>
          </Tabs.Tab>
        </Tabs>
      </>
    );
  },
};
