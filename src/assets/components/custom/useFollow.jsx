import { useEffect, useState } from "react";
import { useAuthStore, useProfileStore } from "../../../store/store";
import useShowToast from "./useShowToast";
import { firestore } from "../../../firebase/firebase.config";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const useFollow = (userId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const { userProfile, setUserProfile } = useProfileStore();
  const showToast = useShowToast();

  const handleUserFollow = async () => {
    setIsLoading(true);

    try {
      const currentUserRef = doc(firestore, "users", authUser.uid);
      const userFollowUnFollowRef = doc(firestore, "users", userId);

      await updateDoc(currentUserRef, {
        following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
      });

      await updateDoc(userFollowUnFollowRef, {
        followers: isFollowing
          ? arrayRemove(authUser.uid)
          : arrayRemove(authUser.uid),
      });

      if (isFollowing) {
        setAuthUser({
          ...authUser,
          following: authUser.following.filter((uid) => uid !== userId),
        });
        setUserProfile({
          ...userProfile,
          followers: userProfile.followers.filter(
            (uid) => uid !== authUser.uid
          ),
        });

        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...authUser,
            following: authUser.following.filter((uid) => uid !== userId),
          })
        );
        setIsFollowing(false);
      } else {
        setAuthUser({
          ...authUser,
          following: [...authUser.following, userId],
        });
        setUserProfile({
          ...userProfile,
          followers: [...userProfile.followers, authUser.uid],
        });

        localStorage.setItem(
          "user-info",
          JSON.stringify({
            ...authUser,
            following: [...authUser.following, userId],
          })
        );
        setIsFollowing(true);
      }
    } catch (e) {
      showToast("Error", e.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (authUser) {
      const isFollowing = authUser.following.includes(userId);
      setIsFollowing(isFollowing);
    }
  }, [authUser, userId]);

  return { isFollowing, isLoading, handleUserFollow };
};

export default useFollow;
