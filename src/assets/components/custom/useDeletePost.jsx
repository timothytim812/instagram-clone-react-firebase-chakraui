import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "../../../firebase/firebase.config";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import useShowToast from "./useShowToast";
import { useState } from "react";
import { useAuthStore, usePostStore, useProfileStore } from "../../../store/store";


const useDeletePost = (post) => {

  const showToast = useShowToast();
  const [isDeleting,setIsDeleting] = useState(false);
  const deletePost = usePostStore(state => state.deletePost);
  const authUser = useAuthStore(state => state.user);
  const deletePostCount = useProfileStore(state => state.deletePost);

  const handleDeletePost = async()=> {

    if(!window.confirm('Are you sure you want to delete this post?'))return;
    if(isDeleting)return;

    try {
      const imageRef = ref(storage,`posts/${post.id}`);
      await deleteObject(imageRef);
      const userRef = doc(firestore,'users',authUser.uid);
      await deleteDoc(doc(firestore,'posts',post.id));

      await updateDoc(userRef,{
        posts: arrayRemove(post.id),
      })

      deletePost(post.id);
      deletePostCount(post.id);
      showToast('Success','Post deleted successfully','success');

    }catch(e) {
      showToast("Error", e.message, "error");
    }finally{
      setIsDeleting(false);
    }
  };

  return { isDeleting, setIsDeleting, handleDeletePost };
}

export default useDeletePost;