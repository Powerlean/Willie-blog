import { useAuth0 } from '@auth0/auth0-react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Box,
  Image,
  Button
} from '@chakra-ui/react';


export default function Form({ onSubmit, text, textSet }) {


  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

  return (

    
    <FormControl mt={10} p={3} borderWidth="1px" rounded="md" onSubmit={onSubmit}>
      <Textarea
        rows="2"
        p={3}
        borderWidth="1px"
        rounded="md"
        onChange={(e) => textSet(e.target.value)}
        value={text}
      />

      <Box mt={4}>
        {isAuthenticated ? (
          <Box mt={2}>
                   <Button
            colorScheme='teal'
            variant='solid'>
              Send
            </Button>
            <Image src={user.picture} width="30px" rounded="full" />
            <span>{user.name}</span>
            <Button
            colorScheme='teal'
            variant='solid
              typeof="button"
              onClick={() =>
                logout({ returnTo: process.env.NEXT_PUBLIC_URL + '/blog' })
              }
            >
              x
            </Button>
          </Box>
        ) : (
          <Button
            colorScheme='teal'
            variant='solid
            typeof="button"
            onClick={() => loginWithRedirect()}
          >
            Login
          </Button>
  <FormHelperText>Please try again</FormHelperText>
        )}
      </Box>
    </FromControl>
  )
}
