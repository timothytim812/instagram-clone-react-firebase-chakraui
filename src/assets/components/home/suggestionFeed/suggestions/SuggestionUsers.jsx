import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFollow from "../../../custom/useFollow";
import { useAuthStore } from "../../../../../store/store";

const SuggestionUsers = ({ user, setUser }) => {
  const { isFollowing, isLoading, handleUserFollow } = useFollow(user.uid);
  const authUser = useAuthStore((state) => state.user);

  const onFollow = async () => {
    await handleUserFollow();
    setUser({
      ...user,
      followers: isFollowing
        ? user.followers.filter((follower) => follower.uid !== authUser.uid)
        : [...user.followers, authUser],
    });
  };

  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar src={user.profilePicURL} size={"md"} />
          <VStack spacing={2} alignItems={"flex-start"}>
            <Link to={`${user?.username}`} fontSize={12} fontWeight={"bold"}>
              {user.fullname}
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
            isLoading={isLoading}
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
