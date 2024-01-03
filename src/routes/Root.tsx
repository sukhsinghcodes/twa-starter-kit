import { useEffect } from 'react';
import Twa from '@twa-dev/sdk';
import { Avatar, Box, Button, Container, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { MainButton } from '@twa-dev/sdk/react';
import { IoChevronForward } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { DataDisplayItem } from '../components';

function onClick() {
  Twa.showAlert('Hello, world!');
}

export function Root() {
  useEffect(() => {
    Twa.ready();
  }, []);

  return (
    <main>
      <Container pt={4}>
        <VStack spacing={4} alignItems="stretch">
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
          <Button variant="primary" onClick={onClick}>
            Click me
          </Button>
        </VStack>
      </Container>
      <MainButton onClick={onClick} text="Click me" />
    </main>
  );
}
