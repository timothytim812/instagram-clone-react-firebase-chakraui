import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import { useState } from "react";
import AuthForm from "./AuthForm";

const AuthComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Flex
        minH={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        px={4}
      >
        <Container maxW={"container.md"} padding={0}>
          <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
            <Box
              css={{
                "@media screen and (max-width: 875px)": {
                  display: "none",
                },
              }}
            >
              <Image src="/images/Auth/auth_img-bg.png" h={650} alt="img" />
              <Box
                position="absolute"
                P
                top={-5}
                left={-109}
                width="100%"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Image
                  src={
                    isHovered
                      ? "/images/Auth/auth_img_2.png"
                      : "/images/Auth/auth_img_1.png"
                  }
                  h={560}
                  transition="transform 1s ease-in-out"
                  transform={isHovered ? "scale(1)" : "scale(1)"}
                  alt="overlay"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
              </Box>
            </Box>
            <VStack spacing={4} align={"stretch"}>
              <AuthForm />
              <Box textAlign={"center"}>Get the app.</Box>
              <Flex gap={5} justifyContent={"center"}>
                <Image src="/images/Auth/play_store_img.png" h={10} />
                <Image src="/images/Auth/microsoft_img.png" h={10} />
              </Flex>
            </VStack>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default AuthComponent;
