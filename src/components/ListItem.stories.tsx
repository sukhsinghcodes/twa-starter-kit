import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, Box, Heading, Icon, Text } from '@chakra-ui/react';
import { StoryWrapper } from '../stories/StoryWrapper';
import { FaEthereum } from 'react-icons/fa';
import { BiDollarCircle } from 'react-icons/bi';
import { LuBitcoin } from 'react-icons/lu';
import { ListItem } from './ListItem';
import { List } from './List';

const meta = {
  title: 'TWA/ListItem',
  component: StoryWrapper,
} satisfies Meta<typeof StoryWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Assets: Story = {
  args: {
    children: (
      <List mode="display">
        <ListItem
          StartIconSlot={<Avatar icon={<Icon as={FaEthereum} fontSize={28} />} bgColor="#A7117A" />}
          StartTextSlot={
            <Box>
              <Heading as="h3" variant="bodyTitle">
                Ethereum
              </Heading>
              <Text variant="hint">0.003 ETH</Text>
            </Box>
          }
          selected
        />
        <ListItem
          StartIconSlot={
            <Avatar icon={<Icon as={BiDollarCircle} fontSize={32} />} bgColor="#2775CA" />
          }
          StartTextSlot={
            <Box>
              <Heading as="h3" variant="bodyTitle">
                USD Coin
              </Heading>
              <Text variant="hint">5 USDC</Text>
            </Box>
          }
        />
        <ListItem
          StartIconSlot={<Avatar icon={<Icon as={LuBitcoin} fontSize={28} />} bgColor="#f2a900" />}
          StartTextSlot={
            <Box>
              <Heading as="h3" variant="bodyTitle">
                Bitcoin
              </Heading>
              <Text variant="hint">0.00003 BTC</Text>
            </Box>
          }
        />
      </List>
    ),
  },
};

export const Transactions: Story = {
  args: {
    children: (
      <List mode="select">
        <Box p={3}>
          <Text variant="hint">TRANSACTION HISTORY</Text>
        </Box>
        <ListItem
          StartIconSlot={
            <Avatar src="https://pbs.twimg.com/profile_images/1601531707072675841/TmRVWuA0_400x400.jpg" />
          }
          StartTextSlot={
            <Box>
              <Heading as="h3" variant="bodyTitle">
                Sukh
              </Heading>
              <Text variant="hint">October 12 at 2:05 PM</Text>
            </Box>
          }
          EndTextSlot={
            <Box style={{ textAlign: 'right' }}>
              <Heading as="h3" variant="bodyTitle">
                0.5 MATIC
              </Heading>
              <Text variant="hint">Sent</Text>
            </Box>
          }
        />
        <ListItem
          StartIconSlot={
            <Avatar src="https://pbs.twimg.com/profile_images/1601531707072675841/TmRVWuA0_400x400.jpg" />
          }
          StartTextSlot={
            <Box>
              <Heading as="h3" variant="bodyTitle">
                Sukh
              </Heading>
              <Text variant="hint">October 12 at 2:01 PM</Text>
            </Box>
          }
          EndTextSlot={
            <Box style={{ color: 'green', textAlign: 'right' }}>
              <Heading as="h3" variant="bodyTitle">
                +0.15 MATIC
              </Heading>
              <Text as="small">Received</Text>
            </Box>
          }
        />
      </List>
    ),
  },
};
