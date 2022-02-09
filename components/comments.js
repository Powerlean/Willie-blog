import { DateTime } from 'luxon'
import { Box, Flex, Text, Avatar, Badge } from '@chakra-ui/react'

export default function Comments({ comments }) {
  return (
  <Box p={3} my={4}>
      {comments.map(({ id, createdAt, text, user }) => {
        return (
<>
<Flex key={id} my={2}>
  <Avatar src={user.picture}
              alt={user.name} />
  <Box ml='3'>
    <Text fontWeight='bold'>
      {user.name}
      <Badge ml='1' colorScheme='gray' fontSize='xs'>
     {DateTime.fromMillis(createdAt).toRelative()}
      </Badge>
<Text my={1} fontSize='xs' colorScheme='gray'>
     • Commented
    </Text>
    <Text fontSize='sm'>{text}</Text>
  </Box>
</Flex>
</>

        )
      })}
    </Box>
  )
}
