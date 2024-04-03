import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../../firebase/firebase.config";

const useGetUserOfComment = (userId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [commentedUser, setCommentedUser] = useState(null);
  const showToast = useShowToast();

  useEffect(() => {
    const getCommentedUser = async () => {
      setIsLoading(true);
      setCommentedUser(null);
      try {
        const userRef = await getDoc(doc(firestore, "users", userId));

        if (userRef.exists()) {
          setCommentedUser(userRef.data());
        }
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };

    getCommentedUser();
  }, [showToast, setCommentedUser, userId]);

  return { isLoading, commentedUser, setCommentedUser };
};

export default useGetUserOfComment;
