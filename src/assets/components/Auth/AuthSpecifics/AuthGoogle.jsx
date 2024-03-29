import { Button, Flex } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { auth, firestore } from "../../../../firebase/firebase.config";
import useShowToast from "../../custom/useShowToast";
import {useAuthStore} from "../../../../store/store";
import { doc, getDoc, setDoc } from "firebase/firestore";

const AuthGoogle = ({ prefix }) => {
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);

  const handleGoogleAuth = async () => {
    try {
      const newUser = await signInWithGoogle();
      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }

      const userRef = doc(db, "users", newUser.user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        // For Login
        const userDoc = userSnap.data();
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      } else {
        // For Signup
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          username: newUser.user.email.split("@")[0],
          fullname: newUser.user.displayName,
          bio: "",
          profilePicURL: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      }
    } catch (e) {
      showToast("Error", e.message, "error");
    }
  };

  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        cursor={"pointer"}
        onClick={handleGoogleAuth}
      >
        <FcGoogle alt="Google logo" />
        <Button
          mx={2}
          padding={0}
          bg={"transparent"}
          fontSize={14}
          color={"blue.600"}
          _hover={{ backgroundColor: "transparent" }}
          cursor={"pointer"}
        >
          {prefix} with google
        </Button>
      </Flex>
    </>
  );
};

export default AuthGoogle;
