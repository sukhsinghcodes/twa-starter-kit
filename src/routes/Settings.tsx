import { Container, Avatar, Heading, Box, Text } from '@chakra-ui/react';
import { BackButton } from '@twa-dev/sdk/react';
import { useNavigate } from 'react-router-dom';
import { List, ListItem } from '../components';

export function Settings() {
  const navigate = useNavigate();

  return (
    <Container pt={4}>
      <List mode="display">
        <ListItem
          StartIconSlot={<Avatar name="TON Space" />}
          StartTextSlot={
            <Box>
              <Heading as="h3" variant="bodyTitle">
                TON Space
              </Heading>
              <Text variant="hint">This is a card</Text>
            </Box>
          }
          selected
        />
        <ListItem
          StartIconSlot={<Avatar name="TON Space" />}
          StartTextSlot={
            <Box>
              <Heading as="h3" variant="bodyTitle">
                TON Space
              </Heading>
              <Text variant="hint">This is a card</Text>
            </Box>
          }
        />
        <ListItem
          StartIconSlot={<Avatar name="TON Space" />}
          StartTextSlot={
            <Box>
              <Heading as="h3" variant="bodyTitle">
                TON Space
              </Heading>
              <Text variant="hint">This is a card</Text>
            </Box>
          }
        />
      </List>

      <BackButton
        onClick={() => {
          navigate(-1);
        }}
      />
    </Container>
  );
}
