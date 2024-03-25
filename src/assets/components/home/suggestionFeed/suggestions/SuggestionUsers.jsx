import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const SuggestionUsers = ({ avatar, name, followers }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar src={avatar} name={name} size={"md"} />
          <VStack spacing={2} alignItems={"flex-start"}>
            <Box fontSize={12} fontWeight={"bold"}>
              {name}
            </Box>
            <Box fontSize={11} color={"gray.500"}>
              {followers} followers
            </Box>
          </VStack>
        </Flex>
        <Button
          bg={"transparent"}
          color={"blue.500"}
          h={"max-content"}
          p={0}
          fontWeight={"medium"}
          fontSize={13}
          _hover={{ color: "white", bg: "transparent" }}
          cursor={"pointer"}
          onClick={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </Flex>
    </>
  );
};

export default SuggestionUsers;