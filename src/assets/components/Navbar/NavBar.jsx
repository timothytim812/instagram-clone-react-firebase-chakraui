import { Button, Container, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container maxW={"container.lg"} my={4}>
      <Flex
        w={"full"}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={"center"}
      >
        <Image
          src="/images/Auth/logo.png"
          h={20}
          display={{ base: "none", sm: "block" }}
          cursor={"pointer"}
        />
        <Flex gap={4}>
          <Link to={"/auth"}>
            <Button colorScheme="blue" size={"sm"}>
              login
            </Button>
          </Link>
          <Link to={"/auth"}>
            <Button variant={"outline"} size={"sm"}>
              signup
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default NavBar;
