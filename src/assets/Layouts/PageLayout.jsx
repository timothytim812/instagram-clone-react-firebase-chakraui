import { Box, Flex, Spinner } from "@chakra-ui/react";
import SideBar from "../components/SideBar/SideBar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import NavBar from "../components/Navbar/NavBar";


const PageLayoutSpinner =() => {
  return (
    <Flex flexDirection={'column'} h={'100vh'} alignItems={'center'} justifyContent={'center'}>
      <Spinner size={'xl'} />
    </Flex>
  )
}


const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const renderSideBar = pathname !== "/auth" && user;
  const RenderNavbar = !user && !loading && pathname !== "/auth";

  const checkUserAuth =!user && loading;

  if(checkUserAuth) {
      return <PageLayoutSpinner/>
  }

  return (
    <>
      <Flex flexDirection={RenderNavbar ? "column" : "row"}>
        {renderSideBar ? (
          <Box w={{ base: "70px", md: "240px" }}>
            <SideBar />
          </Box>
        ) : null}
        {RenderNavbar ? <NavBar /> : null}
        <Box
          flex={1}
          w={{ base: "calc(100% -70px)", md: "calc(100% - 240px)" }}
          mx={'auto'}
        >
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default PageLayout;
