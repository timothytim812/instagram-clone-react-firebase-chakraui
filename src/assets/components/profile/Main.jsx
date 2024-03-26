import { Container, Flex } from "@chakra-ui/react";
import ProfileHeader from "./profileCom/ProfileHeader";
import ProfileTabs from "./profileCom/ProfileTabs";
import ProfileGrid from "./profileCom/ProfileGrid";

const ProfileMainComponent = () => {
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
          <ProfileHeader />
        </Flex>
        <Flex
          px={{ base: 2, sm: 4 }}
          maxW={"full"}
          mx={"auto"}
          borderTop={"1px solid"}
          borderColor={'whiteAlpha.300'}
          direction={'column'}
        >
          <ProfileTabs />
          <ProfileGrid />
        </Flex>
      </Container>
    </>
  );
};

export default ProfileMainComponent;
