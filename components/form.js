import { useAuth0 } from '@auth0/auth0-react'
import {
  Textarea,
  Box,
  Image,
  Button,
  FormHelperText,
  FormControl,
  Flex,
  Code
} from '@chakra-ui/react';


export default function Form({ onSubmit, text, textSet }) {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

  return (
    <FormControl p={3} mt={10} onSubmit={onSubmit}>
      <Textarea
        rows="2"
        p={3} 
        borderWidth="1px" 
        rounded="md"
        onChange={(e) => textSet(e.target.value)}
        value={text}
      />

        {isAuthenticated ? (
            <Button colorScheme='teal' p={3} borderWidth="1px" rounded="md">
              Send
            </Button>
          <Flex>
            <Image src={user.picture} alt="logo" width="30px" my={3} mr={5} rounded="full" />
            <Code mt={2}>{user.name}</Code>
            <Button
              colorScheme="gray"
              my={3}
              p={3} 
              borderWidth="1px" 
              rounded="md"
              typeof="button"
              onClick={() =>
                logout({ returnTo: process.env.NEXT_PUBLIC_URL + '/blog' })
              }
            >
              x LogOut
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
    </FormControl>
  )
}
