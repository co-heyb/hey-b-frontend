import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/reset.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={''}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },

    docs: {
      canvas: {
        sourceState: 'shown',
        layout: 'padded',
      },
    },
  },
};

export default preview;
