import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../../../images/logos";
import useComment from "../../../custom/useComment";
import { useAuthStore } from "../../../../../store/store";
import { Link } from "react-router-dom";
import { CreatedAtTimeConversion } from "../../../../utils/CreatedAtTimeConversion";

const PostFooter = ({
  isProfilePage,
  post,
  userProfile,
  likes,
  handleLikes,
  isLiked,
}) => {
  const { handleCommenting, isCommenting } = useComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore((state) => state.user);

  const handleSubmitComment = async () => {
    await handleCommenting(post.id, comment);
    setComment("");
  };

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
            <Flex direction={"column"}>
              <Flex gap={2} alignItems={"center"}>
                <Link to={`/${userProfile?.username}`}>
                  <Text fontWeight={"bold"} fontSize={12}>
                    {userProfile?.username}
                  </Text>
                </Link>
                <Text fontSize={14}>{post.caption}</Text>
              </Flex>
              <Text fontSize={12} color={"gray"}>
                {CreatedAtTimeConversion(post.createdAt)}
              </Text>
            </Flex>
            <Text fontSize="sm" color={"gray"} cursor={"pointer"}>
              View all {post.comments.length} comments
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
                onChange={(e) => setComment(e.target.value)}
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
