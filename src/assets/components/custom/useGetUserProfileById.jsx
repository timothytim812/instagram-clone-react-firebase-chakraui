import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../../firebase/firebase.config";

const useGetUserProfileById = (userId) => {
  const [isLoading, setIsLoading] = useState(true);
  const showToast = useShowToast();

  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      setIsLoading(true);
      setUserProfile(null);

      try {
        const userRef = await getDoc(doc(firestore, "users", userId));
				if (userRef.exists()) {
					setUserProfile(userRef.data());
				}
      } catch (e) {
        showToast("Error", e.message, "error");
      } finally {
        setIsLoading(false);
      }
    };

    getUserProfile();
  }, [setUserProfile, userId, showToast]);

  return { isLoading, userProfile };
};

export default useGetUserProfileById;
