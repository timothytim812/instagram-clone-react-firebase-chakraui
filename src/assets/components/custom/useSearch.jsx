import { useState } from "react";
import useShowToast from "./useShowToast";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../../firebase/firebase.config";

const useSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const showToast = useShowToast();

  const getUserProfile = async (username) => {
    setIsLoading(true);
    try {
      const q = query(
        collection(firestore, "users"),
        where("username", "==", username)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) return showToast("Error", e.message, "error");


      querySnapshot.forEach(doc => {
        setUser(doc.data());
      })

    } catch (e) {
      showToast("Error", e.message, "error");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, user, getUserProfile, setUser };
};

export default useSearch;
