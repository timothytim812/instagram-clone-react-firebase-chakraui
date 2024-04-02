import React from "react";
import SuggestionsHeader from "./suggestions/SuggestionHeader";
import { Box, Flex, VStack, Link as ChakraLink } from "@chakra-ui/react";
import useSuggestedUsers from "../../custom/useSuggestedUsers";
import SuggestionUsers from "./suggestions/SuggestionUsers";

const SuggestionMain = () => {
  const { isLoading, suggestedUsers } = useSuggestedUsers();

  if (isLoading) return null;

  return (
    <>
      <VStack py={8} px={6} gap={4}>
        <SuggestionsHeader />
        {suggestedUsers.length !== 0 && (
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            w={"full"}
          >
            <Box fontSize={13} fontWeight={"bold"} color={"gray.500"}>
              Suggested for you
            </Box>
            <Box
              fontSize={12}
              fontWeight={"bold"}
              color={"gray.300"}
              _hover={{ color: "gray.400" }}
              cursor={"pointer"}
            >
              See All
            </Box>
          </Flex>
        )}
        {suggestedUsers.map((user) => (
          <SuggestionUsers user={user} key={user.id} />
        ))}

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
          &copy; 2024 Built by{" "}
          <ChakraLink
            href="https://github.com/timothytim812"
            target="_blank"
            color={"blue.600"}
            fontSize={12}
          >
            Timothy Benjamin
          </ChakraLink>
        </Box>
      </VStack>
    </>
  );
};

export default SuggestionMain;
