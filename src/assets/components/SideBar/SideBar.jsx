import {
  Box,
  Flex,
  Link as ChakraLink,
  Tooltip,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {
  InstagramLogo,
  InstagramMobileLogo,
} from "../../images/logos";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../custom/useLogout";
import SideBarItems from "./compile/SideBarItems";
import { FaInstagram } from "react-icons/fa";

const SideBar = () => {
  const { handleLogout, isLoggingOut } = useLogout();

  return (
    <>
      <Box
        height={"100vh"}
        borderRight={"1px solid"}
        borderColor={"whiteAlpha.300"}
        py={8}
        position={"sticky"}
        top={0}
        left={0}
        px={{ base: 3, md: 4 }}
      >
        <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
          <ChakraLink
            as={Link}
            to={"/"}
            pl={2}
            display={{ base: "none", md: "block" }}
            cursor={"pointer"}
          >
            <InstagramLogo />
          </ChakraLink>
          <ChakraLink
            as={Link}
            to={"/"}
            p={2}
            display={{ base: "block", md: "none" }}
            borderRadius={6}
            _hover={{ bg: "whiteAlpha.200" }}
            w={10}
            cursor={"pointer"}
          >
            <FaInstagram size={25}/>
          </ChakraLink>
          <Flex direction={"column"} gap={5} cursor={"pointer"}>
            <SideBarItems/>
          </Flex>
          {/* Log out */}
          <Tooltip
            hasArrow
            label={"Logout"}
            placement="right"
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}
          >
            <Flex
              onClick={handleLogout}
              alignItems={"center"}
              gap={4}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              mt={"auto"}
              w={{ base: 10, md: "full" }}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              <BiLogOut size={25} />
              <Button
                display={{ base: "none", md: "block" }}
                variant={"ghost"}
                _hover={{ bg: "transparent" }}
                isLoading={isLoggingOut}
              >
                Log out
              </Button>
            </Flex>
          </Tooltip>
        </Flex>
      </Box>
    </>
  );
};

export default SideBar;
