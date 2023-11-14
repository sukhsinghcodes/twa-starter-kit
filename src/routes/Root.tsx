import { useEffect } from 'react';
import Twa from '@twa-dev/sdk';
import {
  Avatar,
  Box,
  Button,
  Card as ChakraCard,
  CardBody,
  Container,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
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
                    <Text variant="h3">Card title</Text>
                    <Text variant="hint">This is a card.</Text>
                  </Box>
                }
                StartIconSlot={<Avatar name="C C" />}
              />
            </Card>
          </Link>
          <Link to="/settings">
            <ChakraCard size="sm">
              <CardBody>
                <HStack justifyContent="space-between">
                  <HStack spacing={4}>
                    <Avatar name="Sukh Singh" />
                    <Box>
                      <Heading as="h1" size="sm">
                        TON Space
                      </Heading>
                      <Text as="p">This is a card</Text>
                    </Box>
                  </HStack>
                  <Icon as={IoChevronForward} boxSize={8} />
                </HStack>
              </CardBody>
            </ChakraCard>
          </Link>
          <Button onClick={onClick}>Click me</Button>
        </VStack>
      </Container>
      <MainButton onClick={onClick} text="Click me" />
    </main>
  );
}
