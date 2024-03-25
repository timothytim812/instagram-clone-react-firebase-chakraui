import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Posts from "./Post/Posts";

const FeedMain = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3, 4].map((_, i) => (
          <VStack key={i} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"center"} justifyContent={"center"}>
                <Skeleton height={"10px"} w={"200px"} />
                {/* <Skeleton height={"10px"} w={"200px"} /> */}//actual instagram
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>Contents</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <Posts
            username="timothy_benjamin"
            avatar="/images/home/profile-pic.jpg"
            img="/images/home/profile-pic.jpg"
          />
          <Posts
            username="merceds_f1"
            avatar="/images/home/img4.jpg"
            img="/images/home/img4.jpg"
          />
          <Posts
            username="ig_greninja"
            avatar="/images/home/img2.jpg"
            img="/images/home/img2.jpg"
          />
          <Posts
            username="the_astro_boy"
            avatar="/images/home/img3.jpg"
            img="/images/home/img3.jpg"
          />
          <Posts
            username="sunshine_ig"
            avatar="/images/home/img1.jpg"
            img="/images/home/img1.jpg"
          />
        </>
      )}
    </Container>
  );
};

export default FeedMain;
