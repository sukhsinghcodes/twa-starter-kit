import type { Meta, StoryObj } from '@storybook/react';

import { IconButtonWithLabel } from './IconButtonWithLabel';
import { BiSolidDownArrowCircle } from 'react-icons/bi';

const meta = {
  title: 'TWA/IconButtonWithLabel',
  component: IconButtonWithLabel,
} satisfies Meta<typeof IconButtonWithLabel>;

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
