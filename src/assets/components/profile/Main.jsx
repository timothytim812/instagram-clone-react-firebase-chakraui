import {
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import ProfileHeader from "./profileCom/ProfileHeader";
import ProfileTabs from "./profileCom/ProfileTabs";
import ProfileGrid from "./profileCom/ProfileGrid";
import useGetUserProfileByUsername from "../custom/useGetUserProfileByUsername";
import { useParams } from "react-router-dom";
import { UserNotFound } from "../error/NotFound";

const ProfileMainComponent = () => {
  const { username } = useParams();
  const { isLoading, userProfile } = useGetUserProfileByUsername(username);

  const userNotFound = !isLoading && !userProfile;

  if (userNotFound) {
    return <UserNotFound />;
  }

  return (
    <>
      <Container maxW={"container.lg"} py={5}>
        <Flex
          py={10}
          px={4}
          pl={{ base: 4, md: 10 }}
          w={"full"}
          mx={"auto"}
          flexDirection={"column"}
        >
          {!isLoading && userProfile && <ProfileHeader />}
          {isLoading && (
            <Flex
              gap={{ base: 4, sm: 10 }}
              py={10}
              direction={{ base: "column", sm: "row" }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <SkeletonCircle size={24} />
              <VStack
                gap={2}
                mx={"auto"}
                flex={1}
                alignItems={{ base: "center", sm: "flex-start" }}
                justifyContent={"center"}
              >
                <Skeleton height={"10px"} w={"200px"} />
                <Skeleton height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
          )}
        </Flex>
        <Flex
          px={{ base: 2, sm: 4 }}
          maxW={"full"}
          mx={"auto"}
          borderTop={"1px solid"}
          borderColor={"whiteAlpha.300"}
          direction={"column"}
        >
          <ProfileTabs />
          <ProfileGrid />
        </Flex>
      </Container>
    </>
  );
};

export default ProfileMainComponent;
