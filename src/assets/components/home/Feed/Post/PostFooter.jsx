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
import useComment from "../../../custom/useComment";
import { useAuthStore } from "../../../../../store/store";
import useLike from "../../../custom/useLike";

const PostFooter = ({ username, isProfilePage, post }) => {
  const {handleCommenting,isCommenting} = useComment();
  const [comment,setComment] = useState('');
  const authUser = useAuthStore(state => state.user);
  const {handleLikes,isLiked,isUpdating,likes}=useLike(post);



  const handleSubmitComment = async() => {
    await handleCommenting(post.id,comment);
    setComment('');
  }

  return (
    <>
      <Box mb={10} mt={"auto"}>
        <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={3}>
          <Box onClick={handleLikes} cursor={"pointer"} fontSize={18}>
            {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
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

        {authUser && (
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
              value={comment}
              onChange={(e)=> setComment(e.target.value)}
            />
            <InputRightElement>
              <Button
                color="blue.400"
                fontWeight={600}
                bg="transparent"
                fontSize={14}
                _hover={{ bg: "transparent", color: "white" }}
                cursor={"pointer"}
                isLoading={isCommenting}
                onClick={handleSubmitComment}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
        )}
      </Box>
    </>
  );
};

export default PostFooter;
