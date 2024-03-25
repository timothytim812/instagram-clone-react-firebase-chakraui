import { Avatar, Flex, Link as ChakraLink, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SuggestionsHeader = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Avatar
            name="timothy_benjamin"
            size={"md"}
            src="/images/home/profile-pic.jpg"
          />
          <Text fontSize={12} fontWeight={"bold"}>
            timothy_benjamin
          </Text>
        </Flex>
        <ChakraLink
        as={Link}
        to={"/auth"}
        fontSize={13}
        fontWeight={'medium'}
        color={'blue.500'}
        style={{textDecoration:"none"}}
        cursor={'pointer'}
        _hover={{color:'white'}}>
          Log out
        </ChakraLink>
      </Flex>
    </>
  );
};

export default SuggestionsHeader;
