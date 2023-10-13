import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@chakra-ui/react';
import { StoryWrapper } from '../stories/StoryWrapper';

const meta = {
  title: 'TWA/Input',
  component: StoryWrapper,
} satisfies Meta<typeof StoryWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Typography: Story = {
  args: {
    children: <Input placeholder="Placeholder text..." />,
  },
};
