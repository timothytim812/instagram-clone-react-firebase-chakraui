import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import PostNotFound from "../../error/PostNotFound";
import ProfilePost from "./ProfilePost";
import useGetPosts from "../../custom/useGetPost";

const ProfileGrid = () => {

  const {isLoading,posts} = useGetPosts();


  const noPosts = !isLoading && posts.length === 0 ;

  if(noPosts) return <PostNotFound/>


  return (
    <>
      <Grid
        templateColumns={{
          base: "repeat(3,1fr)",
          md: "repeat(3,1fr)",
        }}
        gap={1}
        columnGap={1}
      >
        {isLoading &&
          [0, 1, 2].map((_, i) => (
            <VStack key={i} alignItems={"flex-start"} gap={4}>
              <Skeleton w={"full"}>
                <Box h={"300px"}>contents</Box>
              </Skeleton>
            </VStack>
          ))}
          {!isLoading && (
            <>
            {posts.map((post) => (
              <>
              <ProfilePost post={post} isLoading={isLoading} key={post.id}/>
              </>
            ))}
            </>
          )}
      </Grid>
    </>
  );
};

export default ProfileGrid;
