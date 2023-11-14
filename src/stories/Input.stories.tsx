import type { Meta, StoryObj } from '@storybook/react';

import { Input as Comp } from '@chakra-ui/react';
import { StoryWrapper } from '../stories/StoryWrapper';

const meta = {
  title: 'TWA/Input',
  component: StoryWrapper,
} satisfies Meta<typeof StoryWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    children: <Comp placeholder="Placeholder text..." />,
    bgColor: 'bg_color',
  },
};
