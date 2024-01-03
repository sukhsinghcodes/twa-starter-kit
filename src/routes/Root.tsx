import { useEffect } from 'react';
import Twa from '@twa-dev/sdk';
import { Avatar, Box, Button, Container, Heading, Icon, Text } from '@chakra-ui/react';
import { MainButton } from '@twa-dev/sdk/react';
import { IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { DataDisplayItem, List } from '../components';
import { isTwa } from '../utils';

function onClick() {
  Twa.showAlert('Hello, world!');
}

export function Root() {
  useEffect(() => {
    Twa.ready();
  }, []);

  return (
    <Container pt={4} as="main">
      <List mode="display">
        <Link to="/settings">
          <Card>
            <DataDisplayItem
              StartTextSlot={
                <Box>
                  <Heading as="h3" variant="bodyTitle">
                    TON Space
                  </Heading>
                  <Text variant="hint">This would be information</Text>
                </Box>
              }
              StartIconSlot={<Avatar name="C C" />}
              EndIconSlot={<Icon as={IoChevronForward} />}
            />
          </Card>
        </Link>
        <Link to="/settings">
          <Card>
            <DataDisplayItem
              StartTextSlot={
                <Box>
                  <Heading as="h3" variant="bodyTitle">
                    Card Title
                  </Heading>
                </Box>
              }
              StartIconSlot={<Avatar name="Sukh Singh" />}
              EndIconSlot={<Icon as={IoChevronForward} />}
            />
          </Card>
        </Link>
      </List>

      {isTwa ? (
        <MainButton onClick={onClick} text="Click me" />
      ) : (
        <Button variant="primary" onClick={onClick} mt={4}>
          Click me
        </Button>
      )}
    </Container>
  );
}
