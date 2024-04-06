import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";
import Comment from "./Comment";
import useComment from "../components/custom/useComment";
import { useEffect, useRef } from "react";

const FeedComments = ({ isOpen, onClose, post }) => {
  const { handleCommenting, isCommenting } = useComment();
  const commentRef = useRef(null);
  const commentsContainerRef = useRef(null);

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    await handleCommenting(post.id, commentRef.current.value);
    commentRef.current.value = "";
  };

  useEffect(() => {
    if (isOpen && commentsContainerRef.current) {
      commentsContainerRef.current.scrollTop = commentsContainerRef.current.scrollHeight;
    }
  }, [isOpen, post.comments.length]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
      <ModalOverlay />
      <ModalContent bg={"black"} border={"1px solid gray"} maxW={"400px"}>
        <ModalHeader>Comments</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex
            mb={4}
            gap={4}
            flexDir={"column"}
            maxH={"250px"}
            overflowY={"auto"}
            ref={commentsContainerRef}
          >
            {post.comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </Flex>
          <form style={{ marginTop: "2rem" }} onSubmit={handleSubmitComment}>
            <InputGroup>
              <Input
                variant={"flushed"}
                placeholder="Add a comment....."
                fontSize={14}
                ref={commentRef}
              />
              <InputRightElement>
                <Button
                  color="blue.400"
                  fontWeight={600}
                  bg="transparent"
                  fontSize={14}
                  _hover={{ bg: "transparent", color: "white" }}
                  type="submit"
                  cursor={"pointer"}
                  isLoading={isCommenting}
                >
                  Post
                </Button>
              </InputRightElement>
            </InputGroup>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FeedComments;
