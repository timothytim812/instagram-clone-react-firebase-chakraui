import { Box, Link as ChakraLink, Tooltip } from "@chakra-ui/react";
import { NotificationsLogo } from "../../../images/logos";
import { Link } from "react-router-dom";

const SideBarNotification = () => {
  return (
    <>
      <Tooltip
        hasArrow
        label={"Notifications"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <ChakraLink
          as={Link}
          display={"flex"}
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <NotificationsLogo />
          <Box display={{ base: "none", md: "block" }}>Notifications</Box>
        </ChakraLink>
      </Tooltip>
    </>
  );
};

export default SideBarNotification;
