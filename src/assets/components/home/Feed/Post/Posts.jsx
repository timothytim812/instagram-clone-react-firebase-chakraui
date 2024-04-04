import React from "react";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";
import useGetUserProfileById from "../../../custom/useGetUserProfileById";
import useLike from "../../../custom/useLike";

const Posts = ({ post }) => {

  const {userProfile} =useGetUserProfileById(post.createdBy);
  const { handleLikes, isLiked, likes} = useLike(post);

  return (
    <>
      <Box mb={3}>
        <PostHeader post={post} userProfile={userProfile} />
        <Box borderRadius={4} overflow={"hidden"}>
          <Image src={post.imageURL} alt="post Images" />
        </Box>
        <PostFooter post={post} userProfile={userProfile} handleLikes={handleLikes} isLiked={isLiked} likes={likes} />
      </Box>
    </>
  );
};

export default Posts;
