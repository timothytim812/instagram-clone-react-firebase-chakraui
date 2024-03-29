import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { auth, firestore } from "../../../firebase/firebase.config";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import {useAuthStore} from "../../../store/store";
import useShowToast from "./useShowToast";

const useSignUpEmailandPass = () => {
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const loginUser = useAuthStore((state) => state.login);
  const showToast = useShowToast();

  const signup = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.username ||
      !inputs.fullname
    ) {
      showToast("Error", "Please fill all fields", "error");
      return;
    }

    const userRef = collection(firestore,'users');
    const q = query(userRef,where('username','==',inputs.username));
    const querySnapshot = await getDocs(q);

    if(!querySnapshot.empty){
      showToast('Error','username already exists','error');
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }

      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullname: inputs.fullname,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { loading, error, signup };
};

export default useSignUpEmailandPass;
