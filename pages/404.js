import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container>
      <Box align="center" mt={4}>
        <Heading as="h1" mt={10}>
          Not found
        </Heading>
        <Text my={5}> 404 </Text>
        <Divider my={6} />
      </Box>
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="gray">Return to Home</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
