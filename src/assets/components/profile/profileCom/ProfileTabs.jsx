import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBookmark, BsGrid3X3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const ProfileTabs = () => {
  return (
    <>
      <Flex
        w={"full"}
        justifyContent={"center"}
        gap={{ base: 4, sm: 10 }}
        textTransform={"uppercase"}
        fontFamily={"bold"}
      >
        <Flex
          borderTop={"1px solid white"}
          alignItems={"center"}
          p={3}
          cursor={"pointer"}
        >
          <Box fontSize={20}>
            <BsGrid3X3 />
          </Box>
          <Text fontSize={12} px={2} display={{ base: "none", sm: "block" }}>
            Posts
          </Text>
        </Flex>
        <Flex alignItems={"center"} p={3} cursor={"pointer"}>
          <Box fontSize={20}>
            <BsBookmark />
          </Box>
          <Text fontSize={12} px={2} display={{ base: "none", sm: "block" }}>
            Saved
          </Text>
        </Flex>
        <Flex alignItems={"center"} p={3} cursor={"pointer"}>
          <Box fontSize={20}>
          <FaRegHeart size={22} />
          </Box>
          <Text fontSize={12} px={2} display={{ base: "none", sm: "block" }}>
            Likes
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default ProfileTabs;
