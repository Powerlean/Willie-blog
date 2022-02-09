import { useAuth0 } from '@auth0/auth0-react'
import {
  Textarea,
  Box,
  Image,
  Button,
  FormHelperText,
  FormControl,
  Flex,
  Code,
  Tag,
  Avatar,
  TagLabel
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
        placeholder='Comment here!'
      />

      <Box mt={2} mb={6} colorScheme='gray'>
        {isAuthenticated ? (
<div className="flex items-center space-x-2">
            <button className="bg-blue-600 text-white px-2 py-1 rounded">
              Send
            </button>
            <img src={user.picture} width={30} className="rounded-full" />
            <span>{user.name}</span>
            <button
              typeof="button"
              onClick={() =>
                logout({ returnTo: process.env.NEXT_PUBLIC_URL + '/blog' })
              }
            >
              x
            </button>
          </div>
        ) : (
          <Button
            p={1} 
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
