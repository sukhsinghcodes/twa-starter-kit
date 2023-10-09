import Twa from '@twa-dev/sdk';
import { css } from '@emotion/react';
import {
  CardBody,
  HStack,
  Avatar,
  Heading,
  Icon,
  Card as ChakraCard,
  Box,
  Text,
} from '@chakra-ui/react';
import { IoChevronForward } from 'react-icons/io5';

const styles = {
  // TODO: Move these into theme
  card: css`
    background-color: ${Twa.themeParams.bg_color};
    border-radius: 1rem;
  `,
  hint: css`
    color: ${Twa.themeParams.hint_color};
  `,
};

export function Card() {
  return (
    <ChakraCard css={styles.card} size="sm">
      <CardBody>
        <HStack justifyContent="space-between">
          <HStack spacing={4}>
            <Avatar name="Sukh Singh" />
            <Box>
              <Heading as="h1" size="sm">
                TON Space
              </Heading>
              <Text css={styles.hint} as="p">
                This is a card
              </Text>
            </Box>
          </HStack>
          <Icon as={IoChevronForward} boxSize={8} />
        </HStack>
      </CardBody>
    </ChakraCard>
  );
}
