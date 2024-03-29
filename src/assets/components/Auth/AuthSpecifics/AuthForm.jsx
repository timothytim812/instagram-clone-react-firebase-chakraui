import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import Signin from "./Signin";
import AuthGoogle from "./AuthGoogle";

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const color = useColorModeValue("gray.800", "white");

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack>
          <Image
            src="/images/Auth/logo.png"
            h={24}
            cursor={"pointer"}
            alt="Instagram logo"
          />

          {!isSignIn ? <Signin /> : <Login />}

          {/* Google Auth */}

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={4} fontSize={12} fontWeight={"bold"} color={color}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          {/* Auth Google Component */}

          <AuthGoogle prefix={!isSignIn ? 'Sign up' : 'Log in'} />
        </VStack>
      </Box>

      {/* Login and SignUp toggle */}

      <Box border={"1px solid gray"} borderRadius={4} padding={3}>
        <Flex alignContent={"center"} justifyContent={"center"}>
          <Text mx={2} my={2} padding={0} fontSize={14} color={color}>
            {isSignIn ? "Don't have an account ?" : "Already have an account ?"}
          </Text>
          <Button
            mx={2}
            padding={0}
            bg={"transparent"}
            fontSize={14}
            color={"blue.600"}
            _hover={{ backgroundColor: "transparent" }}
            onClick={() => setIsSignIn(!isSignIn)}
            cursor={"pointer"}
          >
            {isSignIn ? "Sign Up" : "Log in"}
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
