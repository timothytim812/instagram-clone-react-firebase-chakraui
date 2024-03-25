import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const color = useColorModeValue("gray.800", "white");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAuthentication = () => {
    if (!inputs.email || !inputs.password) {
      setErrorMessage("Please fill the datails");
      return;
    }
    navigate("/");
  };

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
          <Input
            placeholder="Email"
            required
            fontSize={14}
            type="email"
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            required
            fontSize={14}
            type="password"
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          {!isSignIn ? (
            <Input
              placeholder="Confirm Password"
              required
              fontSize={14}
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          ) : null}
          {errorMessage && (
            <Text color="red.500" fontSize={12} textAlign="center">
              {errorMessage}
            </Text>
          )}
          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={handleAuthentication}
          >
            {isSignIn ? "log in " : "sign up"}
          </Button>

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

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <FcGoogle alt="Google logo" />
            <Button
              mx={2}
              padding={0}
              bg={"transparent"}
              fontSize={14}
              color={"blue.600"}
              _hover={{ backgroundColor: "transparent" }}
              onClick={handleAuthentication}
              cursor={"pointer"}
            >
              {isSignIn ? "Log in with google?" : "Sign in with google?"}
            </Button>
          </Flex>
        </VStack>
      </Box>
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
