import { Flex, Text,  Link as ChakraLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const UserNotFound = () => {
  return (
    <>
    <Flex flexDirection={"column"} textAlign={"center"} mx={"auto"}>
      <Text fontSize={"2xl"}>User Not Found</Text>
      <ChakraLink
        as={Link}
        to={"/"}
        color={"blue.500"}
        w={"max-content"}
        mx={"auto"}
      >
        Go Home
      </ChakraLink>
    </Flex>
  </>
  )
}
