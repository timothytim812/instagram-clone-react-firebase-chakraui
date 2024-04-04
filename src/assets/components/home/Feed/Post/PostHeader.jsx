import {
  Avatar,
  Box,
  Button,
  Flex,
  SkeletonCircle,
} from "@chakra-ui/react";
import useFollow from "../../../custom/useFollow";
import { Link } from "react-router-dom";

const PostHeader = ({ post, userProfile }) => {
  const { handleUserFollow, isFollowing, isUpdating } = useFollow(
    post.createdBy
  );

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      my={2}
    >
      <Flex alignItems={"center"} gap={2}>
        {userProfile ? (
          <Link to={`/${userProfile?.username}`}>
            <Avatar
              src={userProfile?.profilePicURL}
              alt="user profile pic"
              size={"sm"}
            />
          </Link>
        ) : (
          <SkeletonCircle size="10" />
        )}
        <Flex fontSize={14} fontWeight={"bold"} gap={2} mx={1}>
          {userProfile?.username}
        </Flex>
        <Box color={"gray.500"}>• 1w</Box>
      </Flex>
      <Box cursor={"pointer"}>
        {isFollowing ? (
          <Button
            size={{ base: "xs", md: "sm" }}
            _hover={{ bg: "gray.700" }}
            isLoading={isUpdating}
            onClick={handleUserFollow}
          >
            following
          </Button>
        ) : (
          <Button
            size={{ base: "xs", md: "sm" }}
            bg={"blue.400"}
            _hover={{ bg: "blue.500" }}
            isLoading={isUpdating}
            onClick={handleUserFollow}
          >
            Follow
          </Button>
        )}
      </Box>
    </Flex>
  );
};

export default PostHeader;
