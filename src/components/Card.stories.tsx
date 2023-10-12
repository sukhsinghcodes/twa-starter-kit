import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { Avatar, Box, Heading, Icon, Text } from '@chakra-ui/react';
import { FaEthereum } from 'react-icons/fa';
import { DataDisplayItem } from '.';

const meta = {
  title: 'TWA/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    children: (
      <DataDisplayItem
        StartTextSlot={
          <Heading as="h3" size="sm">
            Card title
          </Heading>
        }
      />
    ),
  },
};

export const TitleAndSub: Story = {
  args: {
    children: (
      <DataDisplayItem
        StartTextSlot={
          <Box>
            <Heading as="h3" size="sm">
              Card title
            </Heading>
            <Text variant="hint">This is a card</Text>
          </Box>
        }
      />
    ),
  },
};

export const SmallTitleAndSub: Story = {
  args: {
    children: (
      <DataDisplayItem
        StartTextSlot={
          <Box>
            <Text variant="hint">Card title</Text>
            <Heading as="h3" size="sm">
              This is a card
            </Heading>
          </Box>
        }
      />
    ),
  },
};

export const TitleWithIcon: Story = {
  args: {
    children: (
      <DataDisplayItem
        StartIconSlot={<Avatar name="Card title" />}
        StartTextSlot={
          <Heading as="h3" size="sm">
            Card title
          </Heading>
        }
      />
    ),
  },
};

export const TitleAndSubWithIcon: Story = {
  args: {
    children: (
      <DataDisplayItem
        StartIconSlot={<Avatar name="Card title" />}
        StartTextSlot={
          <Box>
            <Heading as="h3" size="sm">
              Card title
            </Heading>
            <Text variant="hint">This is a card</Text>
          </Box>
        }
      />
    ),
  },
};

export const SmallTitleAndSubWithIcon: Story = {
  args: {
    children: (
      <DataDisplayItem
        StartIconSlot={<Avatar name="Card title" />}
        StartTextSlot={
          <Box>
            <Text variant="hint">Card title</Text>
            <Heading as="h3" size="sm">
              This is a card
            </Heading>
          </Box>
        }
      />
    ),
  },
};

export const Currency: Story = {
  args: {
    children: (
      <DataDisplayItem
        StartIconSlot={<Avatar icon={<Icon as={FaEthereum} fontSize={28} />} bgColor="#A7117A" />}
        StartTextSlot={
          <Box>
            <Heading as="h3" size="sm">
              Ethereum
            </Heading>
            <Text variant="hint">0.003 ETH</Text>
          </Box>
        }
        EndTextSlot={
          <Heading as="h3" size="sm">
            $4.63
          </Heading>
        }
      />
    ),
  },
};
