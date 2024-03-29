import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useAuthStore, useProfileStore } from "../../../../store/store";

const ProfileHeader = () => {
  const { userProfile } = useProfileStore();

  const authUser = useAuthStore((state) => state.user);

  const visitingOwnProfile = authUser && authUser.username === userProfile.username;
  const visitingAnotherProfile = authUser && authUser.username !== userProfile.username;

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
          <Avatar src={userProfile.profilePicURL} />
        </AvatarGroup>

        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
          <Flex
            direction={{ base: "column", sm: "row" }}
            justifyContent={{ base: "center", sm: "flex-start" }}
            gap={4}
            alignItems={"center"}
            w={"full"}
          >
            <Text fontSize={{ base: "sm", md: "lg" }}>
              {userProfile.username}
            </Text>

            {visitingOwnProfile && (
              <>
                <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                  <Button size={{ base: "xs", md: "sm" }}>Edit Profile</Button>
                </Flex>
              </>
            )}
            {visitingAnotherProfile && (
              <>
                <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
                  <Button size={{ base: "xs", md: "sm" }} bg={'blue.400'} _hover={{bg:'blue.500'}}>Follow</Button>
                </Flex>
              </>
            )}
          </Flex>

          {/* status */}
          <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
            <Text>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                {userProfile.posts.length}
              </Text>
              Posts
            </Text>
            <Text>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                {userProfile.followers.length}
              </Text>
              Followers
            </Text>
            <Text>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                {userProfile.following.length}
              </Text>
              Following
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={4}>
            <Text fontSize={{ base: "xs", md: "sm" }} fontWeight={"bold"}>
              {userProfile.fullname}{" "}
            </Text>
          </Flex>
          <Text fontSize={{ base: "xs", md: "sm" }}> {userProfile.bio} </Text>
        </VStack>
      </Flex>
    </>
  );
};

export default ProfileHeader;
