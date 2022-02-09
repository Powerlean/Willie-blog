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
<>
            <Button colorScheme='telegram' p={3} borderWidth="1px" rounded="md">
              Send
            </Button>
<Box          mt={6}
              p={3}
>
<Tag size='lg' borderWidth="1px" borderRadius='full' my={2}>
  <Avatar
    src={user.picture}
    size='xs'
    name='Avatar'
    ml={-1}
    mr={2}
  />
  <TagLabel>{user.name}</TagLabel>
</Tag>

            <Button
              fontSize='sm'
              mt={2}
              p={1}
              borderWidth="1px" 
              rounded="md"
              typeof="button"
              onClick={() =>
                logout({ returnTo: process.env.NEXT_PUBLIC_URL + '/blog' })
              }
            >
              x Logout
         </Button>
</Box>
</>
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
