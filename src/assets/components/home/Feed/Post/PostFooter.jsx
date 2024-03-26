import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../../../images/logos";

const PostFooter = ({ username, isProfilePage }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(10000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <>
      <Box mb={10} mt={"auto"}>
        <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={3}>
          <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
            {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
          </Box>
          <Box cursor={"pointer"} fontSize={18}>
            <CommentLogo />
          </Box>
        </Flex>
        <Text fontWeight={600} fontSize={"sm"} mb={1}>
          {likes} likes
        </Text>

        {!isProfilePage && (
          <>
            <Text fontWeight={"bold"} fontSize={"sm"} mb={2}>
              {username}{" "}
              <Text as={"span"} fontWeight={400}>
                Lladuno times 💫
              </Text>
            </Text>
            <Text color={"gray"} fontSize={"sm"}>
              view all 10,000 comments
            </Text>
          </>
        )}

        <Flex
          alignItems={"center"}
          gap={2}
          justifyContent={"space-between"}
          w={"full"}
        >
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder="Add a comment....."
              fontSize={14}
            />
            <InputRightElement>
              <Button
                color="blue.400"
                fontWeight={600}
                bg="transparent"
                fontSize={14}
                _hover={{ bg: "transparent", color: "white" }}
                cursor={"pointer"}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Box>
    </>
  );
};

export default PostFooter;
