import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../../firebase/firebase.config";
import { useProfileStore } from "../../../store/store";

const useGetUserProfileByUsername = () => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();

  const { userProfile, setUserProfile } = useProfileStore();

  useEffect(() => {
    const getUserProfile = async (username) => {
      setIsLoading(true);

      try {
        const q = query(
          collection(firestore, "users"),
          where("username", "==", username)
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) return setUserProfile(null);

        let userDoc;

        querySnapshot.forEach((doc) => {
          userDoc = doc.data();
        });

        setUserProfile(userDoc);
      } catch (e) {
        showToast("Error", e.message, "error");
      }
    };

    getUserProfile();
  }, [setUserProfile, username, showToast]);

  return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;
