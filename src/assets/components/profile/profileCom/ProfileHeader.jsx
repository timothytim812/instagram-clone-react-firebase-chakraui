import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

const ProfileHeader = () => {
  return (
    <>
      <Flex
        gap={{ base: 4, sm: 10 }}
        py={10}
        direction={{ base: "column", sm: "row" }}
      >
        <AvatarGroup
          size={{ base: "xl", md: "2xl" }}
          justifySelf={"center"}
          alignSelf={"flex-start"}
          mx={"auto"}
        >
          <Avatar name="Timothy Benjamin" src="/images/home/profile-pic.jpg" />
        </AvatarGroup>

        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
          <Flex
            direction={{ base: "column", sm: "row" }}
            justifyContent={{ base: "center", sm: "flex-start" }}
            gap={4}
            alignItems={"center"}
            w={"full"}
          >
            <Text fontSize={{ base: "sm", md: "lg" }}>timothy_benjamin</Text>
            <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
              <Button size={{ base: "xs", md: "sm" }}>Edit Profile</Button>
            </Flex>
          </Flex>

          {/* status */}
          <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
            <Text>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                4
              </Text>
              Posts
            </Text>
            <Text>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                1000
              </Text>
              Followers
            </Text>
            <Text>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                100
              </Text>
              Following
            </Text>
          </Flex>
          <Flex alignItems={'center'} gap={4}>
            <Text fontSize={{base:'xs',md:'sm'}} fontWeight={'bold'}>Timothy Benjamin </Text>
          </Flex>
          <Text fontSize={{base:'xs',md:'sm'}} > “When you have a dream, you’ve got to grab it and never let go.”  </Text>
        </VStack>
      </Flex>
    </>
  );
};

export default ProfileHeader;
