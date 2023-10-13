import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, Box, Heading, Text } from '@chakra-ui/react';
import { DataDisplayItem } from './DataDisplayItem';

const meta = {
  title: 'TWA/DataDisplayItem',
  component: DataDisplayItem,
} satisfies Meta<typeof DataDisplayItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    StartTextSlot: (
      <Heading as="h3" variant="bodyTitle">
        Title
      </Heading>
    ),
  },
};

export const TitleAndSub: Story = {
  args: {
    StartTextSlot: (
      <Box>
        <Heading as="h3" variant="bodyTitle">
          Title
        </Heading>
        <Text variant="hint">This would be information</Text>
      </Box>
    ),
  },
};

export const SmallTitleAndSub: Story = {
  args: {
    StartTextSlot: (
      <Box>
        <Text variant="hint">Small title</Text>
        <Heading as="h3" variant="bodyTitle">
          This looks like the primary
        </Heading>
      </Box>
    ),
  },
};

export const TitleWithIcon: Story = {
  args: {
    StartIconSlot: <Avatar name="Card title" />,
    StartTextSlot: (
      <Heading as="h3" variant="bodyTitle">
        Title
      </Heading>
    ),
  },
};

export const TitleAndSubWithIcon: Story = {
  args: {
    StartIconSlot: <Avatar name="Card title" />,
    StartTextSlot: (
      <Box>
        <Heading as="h3" variant="bodyTitle">
          Title
        </Heading>
        <Text variant="hint">This would be information</Text>
      </Box>
    ),
  },
};

export const SmallTitleAndSubWithIcon: Story = {
  args: {
    StartIconSlot: <Avatar name="Card title" />,
    StartTextSlot: (
      <Box>
        <Text variant="hint">Title</Text>
        <Heading as="h3" variant="bodyTitle">
          This looks like the primary
        </Heading>
      </Box>
    ),
  },
};
