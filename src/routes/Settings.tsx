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
import { BackButton } from '@twa-dev/sdk/react';
import { useNavigate } from 'react-router-dom';

export function Settings() {
  const navigate = useNavigate();

  return (
    <Container pt={4}>
      <VStack spacing={4} alignItems="stretch">
        <LinkBox>
          <Card size="sm">
            <CardBody>
              <HStack spacing={4}>
                <Avatar name="TON Space" />
                <Box>
                  <LinkOverlay href="#">
                    <Heading as="h1" size="sm">
                      TON Space
                    </Heading>
                  </LinkOverlay>
                  <Text variant="hint" as="p">
                    This is a card
                  </Text>
                </Box>
              </HStack>
            </CardBody>
          </Card>
        </LinkBox>
        <LinkBox>
          <Card size="sm">
            <CardBody>
              <HStack spacing={4}>
                <Avatar name="TON Space" />
                <Box>
                  <LinkOverlay href="#">
                    <Heading as="h1" size="sm">
                      TON Space
                    </Heading>
                  </LinkOverlay>
                  <Text variant="hint" as="p">
                    This is a card
                  </Text>
                </Box>
              </HStack>
            </CardBody>
          </Card>
        </LinkBox>
        <LinkBox>
          <Card size="sm">
            <CardBody>
              <HStack spacing={4}>
                <Avatar name="TON Space" />
                <Box>
                  <LinkOverlay href="#">
                    <Heading as="h1" size="sm">
                      TON Space
                    </Heading>
                  </LinkOverlay>
                  <Text variant="hint" as="p">
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
