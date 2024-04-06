import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
import useGetUserOfComment from "../components/custom/useGetUserOfComment";
import { Link } from "react-router-dom";
import { CreatedAtTimeConversion } from "../utils/CreatedAtTimeConversion";

const Comment = ({ comment }) => {
  const { isLoading, commentedUser } = useGetUserOfComment(comment.createdBy);

  if (isLoading) {
    return (
      <Flex gap={4} w={"full"} alignItems={"center"}>
        <SkeletonCircle h={10} w="10" />
        <Flex gap={1} flexDir={"column"}>
          <Skeleton height={2} width={100} />
          <Skeleton height={2} width={50} />
        </Flex>
      </Flex>
    );
  }

  return (
    <>
      <Flex gap={4}>
        <Link to={`/${commentedUser.username}`}>
          <Avatar src={commentedUser.profilePicURL} size={"sm"} />
        </Link>
        <Flex direction={"column"} alignItems={"flex-start"}>
          <Flex gap={2} alignItems={"Flex-start"} justifyContent={"center"}>
            <Flex flexDirection={"column"}>
            <Link to={`/${commentedUser.username}`}>
              <Text fontWeight={"bold"} fontSize={12}>
                {commentedUser.username}
              </Text>
            </Link>
            <Text fontSize={12} color={"gray"}>
            {CreatedAtTimeConversion(comment.createdAt)}
          </Text>
            </Flex>
            <Flex justifyContent={"center"} alignItems={"flex-start"}>
              <Text fontSize={14}>{comment.comment}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Comment;
