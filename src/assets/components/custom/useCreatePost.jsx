import { useState } from "react";
import useShowToast from "./useShowToast";
import {
  useAuthStore,
  usePostStore,
  useProfileStore,
} from "../../../store/store";
import { useLocation } from "react-router-dom";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { firestore, storage } from "../../../firebase/firebase.config";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const useCreatePost = () => {
  const showToast = useShowToast();
  const [isUpdating, setIsUpdating] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const createPost = usePostStore((state) => state.createPost);
  const userProfile = useProfileStore((state) => state.userProfile);
  const addPost = useProfileStore((state) => state.addPost);
  const { pathName } = useLocation();

  const handleCreatePost = async (selectedFile, caption) => {
    if (isUpdating) return;
    if (!selectedFile) throw new Error("Please select an image file");
    setIsUpdating(true);

    const newPost = {
      caption: caption,
      likes: [],
      comments: [],
      createdBy: authUser.uid,
      createdAt: Date.now(),
    };

    try {
      const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
      const userDocRef = doc(firestore, "users", authUser.uid);
      const imgRef = ref(storage, `posts/${postDocRef.id}`);
      await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
      await uploadString(imgRef, selectedFile, "data_url");
      const downloadURL = await getDownloadURL(imgRef);
      await updateDoc(postDocRef, { imageURL: downloadURL });

      newPost.imgURL = downloadURL;

      if (userProfile.uid === authUser.uid) createPost({ ...newPost, id: postDocRef.id });

			if (pathName !== "/" && userProfile.uid === authUser.uid) addPost({ ...newPost, id: postDocRef.id });

      showToast("Success", "Post Created Successfully", "success");
    } catch (e) {
      showToast("Error", e.message, "error");
      setIsUpdating(false);
      return;
    } finally {
      setIsUpdating(false);
    }
  };

  return { isUpdating, handleCreatePost };
};

export default useCreatePost;
