import { Flex, Text } from "@chakra-ui/react";

const PostNotFound = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        textAlign={"center"}
        mx={"auto"}
        mt={10}
      >
        <Text fontFamily={'2xl'}> No Posts Yet 😣</Text>
      </Flex>
    </>
  );
};

export default PostNotFound;
