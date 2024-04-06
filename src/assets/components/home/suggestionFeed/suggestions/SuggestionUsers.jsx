import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useFollow from "../../../custom/useFollow";
import { useAuthStore } from "../../../../../store/store";
import { useContext } from "react";
import { SearchContext } from "../../../../../App";

const SuggestionUsers = ({ user }) => {
  const { updateUser } = useContext(SearchContext);

  const { isFollowing, isUpdating, handleUserFollow } = useFollow(user.uid);
  const authUser = useAuthStore((state) => state.user);

  const onFollow = async () => {
    await handleUserFollow();

    updateUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((uid) => uid !== authUser.uid)
        : [...user.followers, authUser.uid],
      following: isFollowing
        ? user.following.filter((uid) => uid !== authUser.uid)
        : [...user.following, authUser],
    });
  };

  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Link to={`/${user?.username}`}>
            <Avatar src={user?.profilePicURL} size={"md"} />
          </Link>
          <VStack spacing={2} alignItems={"flex-start"}>
            <Link to={`/${user?.username}`} fontSize={12} fontWeight={"bold"}>
              {user.username}
            </Link>
            <Box fontSize={11} color={"gray.500"}>
              {user.followers.length} followers
            </Box>
          </VStack>
        </Flex>
        {authUser.uid !== user.uid && (
          <Button
            bg={"transparent"}
            color={"blue.500"}
            h={"max-content"}
            p={0}
            fontWeight={"medium"}
            fontSize={13}
            _hover={{ color: "white", bg: "transparent" }}
            cursor={"pointer"}
            isLoading={isUpdating}
            onClick={onFollow}
          >
            {isFollowing ? "Unfollow" : "Follow"}
          </Button>
        )}
      </Flex>
    </>
  );
};

export default SuggestionUsers;
