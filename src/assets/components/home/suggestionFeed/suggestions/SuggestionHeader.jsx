import { Avatar, Flex, Text, Button } from "@chakra-ui/react";
import useLogout from "../../../custom/useLogout";
import { useAuthStore } from "../../../../../store/store";
import { Link } from "react-router-dom";

const SuggestionsHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  if (!authUser) {
    return null;
  }

  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
          <Link to={`${authUser.username}`}>
            <Avatar size={"md"} src={authUser.profilePicURL} />
          </Link>
          <Link to={`${authUser.username}`}>
            <Text fontSize={12} fontWeight={"bold"}>
              {authUser.username}
            </Text>
          </Link>
        </Flex>
        <Button
          fontSize={13}
          size={"xs"}
          bg={"transparent"}
          fontWeight={"medium"}
          color={"blue.500"}
          cursor={"pointer"}
          _hover={{ color: "white" }}
          isLoading={isLoggingOut}
          onClick={handleLogout}
        >
          Log out
        </Button>
      </Flex>
    </>
  );
};

export default SuggestionsHeader;
