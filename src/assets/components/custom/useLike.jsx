import { useState } from "react";
import { useAuthStore } from "../../../store/store";
import useShowToast from "./useShowToast";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../../firebase/firebase.config";

const useLike = (post) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const showToast = useShowToast();
  const [likes, setLikes] = useState(post.likes.length);
  const authUser = useAuthStore((state) => state.user);
  const [isLiked, setIsLiked] = useState(post.likes.includes(authUser?.uid));

  const handleLikes = async () => {
    if (isUpdating) return;
    if (!authUser) return showToast("Error", "You must be logged in", "error");

    setIsUpdating(true);
    try {
      const postRef = doc(firestore, "posts", post.id);
      await updateDoc(postRef, {
        likes: isLiked ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
      });

      setIsLiked(!isLiked);

      if (isLiked) {
        setLikes(likes - 1);
      } else {
        setLikes(likes + 1);
      }
    } catch (e) {
      showToast("Error", e.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  return { isUpdating, likes, handleLikes, isLiked, setIsLiked, setLikes };
};

export default useLike;
