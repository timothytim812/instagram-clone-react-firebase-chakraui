import { useState } from "react";
import { useAuthStore, useProfileStore } from "../../../store/store";
import useShowToast from "./useShowToast";
import { firestore, storage } from "../../../firebase/firebase.config";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";

const useEditProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const setUserProfile = useProfileStore((state) => state.setUserProfile);

  const showToast = useShowToast();

  const profileEditFunction = async(inputs, selectedFile) => {
    if (isLoading || !authUser) return;
      setIsLoading(true);

      const storageRef = ref(storage, `profilePics/${authUser.uid}`);
      const userRef = doc(firestore, "users", authUser.uid);

      let URL = "";

      try {
        if (selectedFile) {
          await uploadString(storageRef, selectedFile, "data_url");
          URL = await getDownloadURL(
            ref(storage, `profilePics/${authUser.uid}`)
          );
        }

        const updatedUser = {
          ...authUser,
          fullname: inputs.fullname || authUser.fullname,
          username: inputs.username || authUser.username,
          bio: inputs.bio || authUser.bio,
          profilePicURL: URL || authUser.profilePicURL,
        };

        await updateDoc(userRef, updatedUser);
        localStorage.setItem("user-info", JSON.stringify(updatedUser));
        setAuthUser(updatedUser);
        setUserProfile(updatedUser);

        showToast("Success", "Profile updated successfully", "success");

      } catch (err) {
        showToast("Error", err.message, "error");
      } finally {
        setIsLoading(false); 
      }
  };

  return {
    isLoading,
    profileEditFunction,
  };
};

export default useEditProfile;
