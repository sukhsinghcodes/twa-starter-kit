import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from './IconButton';
import { BiSolidDownArrowCircle } from 'react-icons/bi';

const meta = {
  title: 'TWA/IconButton',
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    Icon: BiSolidDownArrowCircle,
    label: 'Deposit',
    onClick: () => {
      console.log('clicked');
    },
  },
};
