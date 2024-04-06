import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import useToLoadFeed from "../../custom/useToLoadFeed";
import Posts from "./Post/Posts";

const FeedMain = () => {
  const { isLoading, posts } = useToLoadFeed();

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2].map((_, i) => (
          <VStack key={i} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"center"} justifyContent={"center"}>
                <Skeleton height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"400px"}>Contents</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => (
          <>
            <Posts key={post.id} post={post} />
          </>
        ))}
      {!isLoading && posts.length === 0 && (
        <>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            mt={"30vh"}
            mb={"30vh"}
          >
            <Text fontSize={"md"} color={"red.400"}>
              You don't follow anyone !
            </Text>
            <Text>Follow people to see their posts</Text>
          </Flex>
        </>
      )}
    </Container>
  );
};

export default FeedMain;
