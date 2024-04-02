import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchLogo } from "../../../images/logos";
import {  useContext, useRef } from "react";
import SuggestionUsers from "../../home/suggestionFeed/suggestions/SuggestionUsers";
import { SearchContext } from "../../../../App";


const SideBarSearchBar = () => {

  const {user,getUserProfile,isUpdating} = useContext(SearchContext)

  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    getUserProfile(searchRef.current.value);
  }

  return (
    <>
      <Tooltip
        hasArrow
        label={"Search"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          onClick={onOpen}
        >
          <SearchLogo />
          <Box display={{ base: "none", md: "block" }}>Search</Box>
        </Flex>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
        <ModalOverlay />
        <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
          <ModalHeader>Search User</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSearch}>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input placeholder="Enter User Name" ref={searchRef} />
              </FormControl>
              <Flex w={"full"} justifyContent={"flex-end"}>
                <Button
                  type="submit"
                  ml={"auto"}
                  size={"sm"}
                  my={4}
                  isLoading={isUpdating}
                >
                  Search
                </Button>
              </Flex>
            </form>
            {user && 
            <>
            <SuggestionUsers user={user}/>
            </>
          }
            
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SideBarSearchBar;
