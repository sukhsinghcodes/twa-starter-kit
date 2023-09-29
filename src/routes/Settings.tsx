import {
  Container,
  VStack,
  LinkBox,
  Card,
  CardBody,
  HStack,
  Avatar,
  LinkOverlay,
  Heading,
  Box,
  Text,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import Twa from '@twa-dev/sdk';
import { BackButton } from '@twa-dev/sdk/react';
import { useNavigate } from 'react-router-dom';

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

export function Settings() {
  const navigate = useNavigate();

  return (
    <Container pt={4}>
      <VStack spacing={4} alignItems="stretch">
        <LinkBox>
          <Card css={styles.card} size="sm">
            <CardBody>
              <HStack spacing={4}>
                <Avatar name="TON Space" />
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
            </CardBody>
          </Card>
        </LinkBox>
        <LinkBox>
          <Card css={styles.card} size="sm">
            <CardBody>
              <HStack spacing={4}>
                <Avatar name="TON Space" />
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
            </CardBody>
          </Card>
        </LinkBox>
        <LinkBox>
          <Card css={styles.card} size="sm">
            <CardBody>
              <HStack spacing={4}>
                <Avatar name="TON Space" />
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
            </CardBody>
          </Card>
        </LinkBox>
      </VStack>
      <BackButton
        onClick={() => {
          navigate(-1);
        }}
      />
    </Container>
  );
}
