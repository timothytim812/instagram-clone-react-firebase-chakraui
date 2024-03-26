import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

const ProfileGrid = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
          [0, 1, 2, 3, 4, 5].map((_, i) => (
            <VStack key={i} alignItems={"flex-start"} gap={4}>
              <Skeleton w={"full"}>
                <Box h={"300px"}>contents</Box>
              </Skeleton>
            </VStack>
          ))}
          {!isLoading && (
            <>
            <ProfilePost img='/images/home/profile-pic.jpg' />
            <ProfilePost img='/images/home/img2.jpg' />
            <ProfilePost img='/images/home/img3.jpg' />
            <ProfilePost img='/images/home/img4.jpg' />
            </>
          )}
      </Grid>
    </>
  );
};

export default ProfileGrid;
