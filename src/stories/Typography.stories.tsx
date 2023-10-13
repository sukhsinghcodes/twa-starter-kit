import type { Meta, StoryObj } from '@storybook/react';

import { VStack, Heading, Divider, Text } from '@chakra-ui/react';
import { StoryWrapper } from '../stories/StoryWrapper';

const meta = {
  title: 'TWA/Typography',
  component: StoryWrapper,
} satisfies Meta<typeof StoryWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Typography: Story = {
  args: {
    children: (
      <VStack spacing={4} alignItems="flex-start">
        <Heading as="h1" size="xl">
          Heading 1
        </Heading>
        <Heading as="h2" size="lg">
          Heading 2
        </Heading>
        <Heading as="h3" size="sm">
          Heading 3
        </Heading>
        <Divider bgColor="black" />
        <Heading as="h3" variant="bodyTitle">
          Body Title
        </Heading>
        <Text>This is body text.</Text>
        <Text>
          Lorem ipsum dolor sit amet, <Text as="b">consectetur</Text> adipiscing elit. Donec vel
          libero sit amet <Text as="i">sapien varius interdum</Text> non at dolor.
        </Text>
        <Text variant="hint">This is hint text.</Text>
      </VStack>
    ),
  },
};
