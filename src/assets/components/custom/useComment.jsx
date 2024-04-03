import { useState } from "react";
import { useAuthStore, usePostStore } from "../../../store/store";
import useShowToast from "./useShowToast";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../../firebase/firebase.config";

const useComment = () => {
  const [isCommenting, setIsCommenting] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const addComment = usePostStore((state) => state.addComment);
  const showToast = useShowToast();

  const handleCommenting = async (postId, comment) => {
    if (isCommenting) return;
    if (!authUser) return showToast("Error", "You must be logged in", "error");
    setIsCommenting(true);

    const newComment = {
      comment: comment,
      createdAt: Date.now(),
      createdBy: authUser.uid,
      postId: postId,
    };

    try {
      await updateDoc(doc(firestore, "posts", postId), {
        comments: arrayUnion(newComment),
      });
      addComment(postId, newComment);
    } catch (err) {
      showToast("Error", err.message, "error");
    }finally {
			setIsCommenting(false);
		}
  };

  return { isCommenting, handleCommenting };
};

export default useComment;
