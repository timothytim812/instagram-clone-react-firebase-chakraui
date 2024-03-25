import React from "react";
import SuggestionsHeader from "./suggestions/SuggestionHeader";
import { Box, Flex, VStack, Link as ChakraLink } from "@chakra-ui/react";
import SuggestionUsers from "./suggestions/SuggestionUsers";

const SuggestionMain = () => {
  return (
    <>
      <VStack py={8} px={6} gap={4}>
        <SuggestionsHeader />
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
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
        <SuggestionUsers
          name="stevie_wonder"
          followers={1500}
          avatar={
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTBPG8lmZR5oWGGKgKL8nscPJEFfPxpDel1CPMHAUKHcnhDl3M8"
          }
        />
        <SuggestionUsers
          name="one_direction"
          followers={9000}
          avatar={
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSOmDwMYlY9I_3Ph5eM_Dl6cUmLy3rW_QgFKrVC8qJLqDc1rsT6"
          }
        />
        <SuggestionUsers
          name="taylor_swift"
          followers={2500}
          avatar={
            "https://cdn.britannica.com/13/222713-050-ECDEDACE/Taylor-Swift-2019-Jingle-Ball.jpg"
          }
        />
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
