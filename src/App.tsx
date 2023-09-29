import { useEffect } from 'react';
import Twa from '@twa-dev/sdk';
import { css } from '@emotion/react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Container,
  HStack,
  Heading,
  Icon,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from '@chakra-ui/react';
import { MainButton } from '@twa-dev/sdk/react';
import { IoChevronForward } from 'react-icons/io5';

const styles = {
  main: css`
    background-color: ${Twa.themeParams.secondary_bg_color};
    color: ${Twa.themeParams.text_color};
  `,
  // TODO: Move these into theme
  card: css`
    background-color: ${Twa.themeParams.bg_color};
    border-radius: 1rem;
  `,
  button: css`
    background-color: ${Twa.themeParams.button_color};
    color: ${Twa.themeParams.button_text_color};
  `,
  hint: css`
    color: ${Twa.themeParams.hint_color};
  `,
};

function onClick() {
  Twa.showAlert('Hello, world!');
}

function App() {
  useEffect(() => {
    Twa.ready();
  }, []);

  return (
    <main>
      <Container pt={4}>
        <VStack spacing={4} alignItems="stretch">
          <LinkBox>
            <Card css={styles.card} size="sm">
              <CardBody>
                <HStack justifyContent="space-between">
                  <HStack spacing={4}>
                    <Avatar name="Sukh Singh" />
                    <Box>
                      <LinkOverlay href="#">
                        <Heading as="h1" size="sm">
                          TON Space
                        </Heading>
                      </LinkOverlay>
                      <Text css={styles.hint} as="p">
                        This is a card
                      </Text>
                    </Box>
                  </HStack>
                  <Icon as={IoChevronForward} boxSize={8} />
                </HStack>
              </CardBody>
            </Card>
          </LinkBox>
          <Button onClick={onClick} css={styles.button}>
            Click me
          </Button>
        </VStack>
      </Container>
      <MainButton onClick={onClick} text="Click me" />
    </main>
  );
}

export default App;
