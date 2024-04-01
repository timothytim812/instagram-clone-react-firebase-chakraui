import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import FeedMain from "./Feed/Main";
// import SuggestionMain from "./suggestionFeed/Main";

const HomeMainComponent = () => {
  return (
    <>
      <Container maxW={"container.lg"}>
        <Flex gap={20}>
          <Box flex={2} py={10}>
            <FeedMain />
          </Box>
          <Box
            flex={3}
            mr={20}
            display={{ base: "none", lg: "block" }}
            maxW={"300px"}
          >
            {/* <SuggestionMain/> */}
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default HomeMainComponent;