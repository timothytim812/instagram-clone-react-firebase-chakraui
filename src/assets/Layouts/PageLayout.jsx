import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SideBar from "../components/SideBar/SideBar";

const PageLayout = (children) => {

  return (
    <>
      <Flex>
        <Box w={{base:'70px',md:'240px'}}>
          <SideBar />
        </Box> 
        {/* <Box flex={1} w={{base:'calc(100% -70px)',md:'calc(100% - 240px)'}}>
        {children}
        </Box> */}
      </Flex>
    </>
  );
};

export default PageLayout;
