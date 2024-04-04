import { useEffect, useState } from "react";
import {
  useAuthStore,
  usePostStore,
  useProfileStore,
} from "../../../store/store";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../../firebase/firebase.config";
import useShowToast from "./useShowToast";

const useToLoadFeed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();
  const { posts, setPosts } = usePostStore();
  const authUser = useAuthStore((state) => state.user);
  const { setUserProfile } = useProfileStore();

  useEffect(() => {
    const getFeed = async () => {
      setIsLoading(true);
      if (authUser.following.length === 0) {
        setIsLoading(false);
        setPosts([]);
        return;
      }

      const q = query(
        collection(firestore, "posts"),
        where("createdBy", "in", authUser.following)
      );

      try {
        const querySnapshot = await getDocs(q);
        const feed = [];

        querySnapshot.forEach((doc) => {
          feed.push({ id: doc.id, ...doc.data()});
        });

        feed.sort((a, b) => b.createdAt - a.createdAt);
        setPosts(feed);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setIsLoading(false);
      }
    };

    if(authUser) getFeed();
  }, [authUser, showToast, setPosts, setUserProfile]);

  return { isLoading, posts };
};

export default useToLoadFeed;
