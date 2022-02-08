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
    <Formcontrol as="form" mt={10} onSubmit={onSubmit}>
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
            <Image src={user.picture} alt="logo" width={30} rounded="full" />
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
          <button
            className="bg-blue-600 text-white px-2 py-1 rounded"
            typeof="button"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
      </Box>
    </FormControl>
  )
}
