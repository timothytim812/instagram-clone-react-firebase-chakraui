import {
  Box,
  Flex,
  Link as ChakraLink,
  Tooltip,
  Button,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../images/logos";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../custom/useLogout";
import { AiFillHome } from "react-icons/ai";
import { useAuthStore } from "../../../store/store";

const SideBar = () => {
  const { handleLogout, isLoggingOut } = useLogout();

  const authUser = useAuthStore((state) => state.user);

  const SideBarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
    },
    {
      icon: (
        <Avatar
          size={"sm"}
          name={authUser.fullname}
          src={authUser.profilePicURL}
        />
      ),
      text: "Profile",
      link: `${authUser?.username}`,
    },
  ];

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
            <InstagramMobileLogo />
          </ChakraLink>
          <Flex direction={"column"} gap={5} cursor={"pointer"}>
            {SideBarItems.map((item, index) => (
              <Tooltip
                key={index}
                hasArrow
                label={item.text}
                placement="right"
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
              >
                <ChakraLink
                  as={Link}
                  display={"flex"}
                  to={item.link || null}
                  alignItems={"center"}
                  gap={4}
                  _hover={{ bg: "whiteAlpha.400" }}
                  borderRadius={6}
                  p={2}
                  w={{ base: 10, md: "full" }}
                  justifyContent={{ base: "center", md: "flex-start" }}
                >
                  {item.icon}
                  <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
                </ChakraLink>
              </Tooltip>
            ))}
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
