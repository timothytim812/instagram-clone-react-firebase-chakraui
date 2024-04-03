import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useProfileStore } from "../../store/store";
import { Link } from "react-router-dom";

const Caption = ({ post,isLoading }) => {
  const userProfile = useProfileStore((state) => state.userProfile);

  if (isLoading) {
    return (
      <Flex gap={4} w={"full"} alignItems={"center"}>
        <SkeletonCircle h={10} w="10" />
        <Flex gap={1} flexDir={"column"}>
          <Skeleton height={2} width={100} />
          <Skeleton height={2} width={50} />
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex gap={4}>
      <Link to={`/${userProfile.username}`}>
        <Avatar
          src={userProfile.profilePicURL}
          size={"sm"}
        />
      </Link>
      <Flex direction={"column"}>
        <Flex gap={2} alignItems={"center"}>
          <Link to={`/${userProfile.username}`}>
            <Text fontWeight={"bold"} fontSize={12}>
              {userProfile.username}
            </Text>
          </Link>
          <Text fontSize={14}>{post.caption}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {post.createdAt}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Caption;
