import { Box, Link as ChakraLink, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CreatePostLogo } from "../../../images/logos";


const SideBarCreate = () => {
  return (
    <>
      <Tooltip
        hasArrow
        label={"Create a new post"}
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
          <CreatePostLogo/>
          <Box display={{ base: "none", md: "block" }}>Create</Box>
        </ChakraLink>
      </Tooltip>
    </>
  )
}

export default SideBarCreate;