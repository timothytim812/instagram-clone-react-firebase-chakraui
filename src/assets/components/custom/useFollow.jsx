import { useEffect, useState } from "react";
import { useAuthStore, useProfileStore } from "../../../store/store";
import useShowToast from "./useShowToast";
import { firestore } from "../../../firebase/firebase.config";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const useFollow = (userId) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const { userProfile, setUserProfile } = useProfileStore();
  const showToast = useShowToast();

  const handleUserFollow = async () => {
    setIsUpdating(true);
    try {
      const currentUserRef = doc(firestore, "users", authUser.uid);
      const userToFollowOrUnfollorRef = doc(firestore, "users", userId);
      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
      });
      await updateDoc(userToFollowOrUnfollorRef, {
        followers: isFollowing
          ? arrayRemove(authUser.uid)
          : arrayUnion(authUser.uid),
      });

      const updatedAuthUser = {
        ...authUser,
        following: isFollowing
          ? authUser.following.filter((uid) => uid !== userId)
          : [...authUser.following, userId],
      };
      setAuthUser(updatedAuthUser);

      const updatedUserInfo = JSON.stringify(updatedAuthUser);
      localStorage.setItem("user-info", updatedUserInfo);

      setIsFollowing(!isFollowing);
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    const isFollowingUser = authUser?.following?.includes(userId);
    setIsFollowing(isFollowingUser);
  }, [authUser, userId]);

  return { isFollowing, isUpdating, handleUserFollow };
};

export default useFollow;
