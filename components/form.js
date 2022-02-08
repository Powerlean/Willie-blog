import { useAuth0 } from '@auth0/auth0-react'
import {
  Textarea,
  Box,
  Image,
  FormControl
} from '@chakra-ui/react';


export default function Form({ onSubmit, text, textSet }) {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

  return (
    <Box mt={10}>
    <FormControl bg="gray.200" onSubmit={onSubmit}>
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
          <div className="flex items-center space-x-2">
            <button p={3} borderWidth="1px" rounded="md">
              Send
            </button>
<Box mt={10}>
            <Image src={user.picture} alt="logo" width="30px" my={5} mr={5} rounded="md" />
            <span>{user.name}</span>
</Box>
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
          <button
            typeof="button"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
      </Box>
    </FormControl>
</Box>
  )
}
