import React from "react";
import PostHeader from "./PostHeader";
import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter";

const Posts = ({img,username,avatar}) => {
  return(
    <>
    <Box mb={3}>
    <PostHeader username={username} avatar={avatar} />
    <Box>
      <Image src={img} borderRadius={4} 
      overflow={"hidden"} alt={username}/>
    </Box>
    <PostFooter username={username}/>
    </Box>
    </>
  )
};

export default Posts;
