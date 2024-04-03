import {
  Box,
  Button,
  CloseButton,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { CreatePostLogo } from "../../../images/logos";
import { BsFillImageFill } from "react-icons/bs";
import { useRef, useState } from "react";
import usePicturePreview from "../../custom/usePicturePreview";
import useCreatePost from "../../custom/useCreatePost";
import useShowToast from "../../custom/useShowToast";

const SideBarCreate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const showToast = useShowToast();
  const [caption, setCaption] = useState("");
  const imgRef = useRef(null);
  const { handleFileChange, selectedFile, setSelectedFile } =
    usePicturePreview();

  const { isUpdating, handleCreatePost } = useCreatePost();

  const handlePostCreation = async () => {
    try {
      await handleCreatePost(selectedFile, caption);
      onClose();
      setCaption();
      setSelectedFile(null);
    } catch (e) {
      showToast("Error", e.message, "error");
    }
  };

  return (
    <>
      <Tooltip
        hasArrow
        label={"Create a new post"}
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
          <CreatePostLogo />
          <Box display={{ base: "none", md: "block" }}>Create</Box>
        </Flex>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />

        <ModalContent bg={"black"} border={"1px solid gray"}>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Textarea
              placeholder="Post caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />

            <Input
              type="file"
              hidden
              ref={imgRef}
              onChange={handleFileChange}
            />

            <BsFillImageFill
              style={{
                marginTop: "15px",
                marginLeft: "5px",
                cursor: "pointer",
              }}
              size={16}
              onClick={() => imgRef.current.click()}
            />
            {selectedFile && (
              <>
                <Flex
                  mt={5}
                  w={"full"}
                  position={"relative"}
                  justifyContent={"center"}
                >
                  <Image src={selectedFile} alt="selected img" />
                  <CloseButton
                    position={"absolute"}
                    top={2}
                    right={2}
                    onClick={() => {
                      setSelectedFile(null);
                    }}
                  />
                </Flex>
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={handlePostCreation} isLoading={isUpdating}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SideBarCreate;
