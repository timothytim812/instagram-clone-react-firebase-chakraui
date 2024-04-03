import { Avatar, Flex, Text } from "@chakra-ui/react"
import { useProfileStore } from "../../store/store"

const Caption = ({post}) => {

  const userProfile = useProfileStore(state => state.userProfile)

  return (
    <Flex gap={4}>
        <Avatar src={userProfile.profilePicURL} name={userProfile.fullname} size={'sm'}/>
        <Flex direction={'column'}>
        <Flex gap={2}>
          <Text fontWeight={'bold'} fontSize={12}>{userProfile.username}</Text>
          <Text fontSize={14}>{post.caption}</Text>
        </Flex>
        <Text fontSize={12} color={'gray'} >{post.createdAt}</Text>
        </Flex>
      </Flex>
  )
}

export default Caption