import { Avatar, Box, Link as ChakraLink, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../../store/store";

const SideBarProfile = () => {
  const authUser = useAuthStore((state) => state.user);

  return (
    <>
      <Tooltip
        hasArrow
        label={"Profile"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <ChakraLink
          as={Link}
          to={`${authUser?.username}`}
          display={"flex"}
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <Avatar
            size={"sm"}
            src={authUser?.profilePicURL}
          />
          <Box display={{ base: "none", md: "block" }}>Profile</Box>
        </ChakraLink>
      </Tooltip>
    </>
  );
};

export default SideBarProfile;
