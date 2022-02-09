import { useAuth0 } from '@auth0/auth0-react'
import {
  Textarea,
  Box,
  Image,
  Button,
  FormHelperText,
  FormControl,
  Flex,
} from '@chakra-ui/react';


export default function Form({ onSubmit, text, textSet }) {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

  return (
    <Box mt={10}>
    <FormControl p={3} onSubmit={onSubmit}>
      <Textarea
        rows="2"
        p={3} 
        borderWidth="1px" 
        rounded="md"
        onChange={(e) => textSet(e.target.value)}
        value={text}
      />

      <Box mt={3} mb={6}>
        {isAuthenticated ? (
          <Flex align="center" >
            <Button colorScheme='teal' p={3} borderWidth="1px" rounded="md">
              Send
            </Button>
<Box mt={10}>
            <Image src={user.picture} alt="logo" width="30px" my={3} mr={5} rounded="full" />
            <span ml={5}>{user.name}</span>
</Box>
            <Button
              colorScheme="red"
              p="1px" 
              borderWidth="1px" 
              rounded="full"
              typeof="button"
              onClick={() =>
                logout({ returnTo: process.env.NEXT_PUBLIC_URL + '/blog' })
              }
            >
              x
            </Button>
          </Flex>
        ) : (
          <Button
            colorScheme='gray'
            p={3} 
            borderWidth="1px" 
            rounded="md"
            typeof="button"
            onClick={() => loginWithRedirect()}
          >
            Login
          </Button>
        )}
      </Box>
    </FormControl>
</Box>
  )
}
