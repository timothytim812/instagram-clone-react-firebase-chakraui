import { useEffect, useState } from "react";
import { usePostStore, useProfileStore } from "../../../store/store";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../../firebase/firebase.config";


const useGetPosts = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { posts, setPosts } = usePostStore();
	const showToast = useShowToast();
	const userProfile = useProfileStore((state) => state.userProfile);


	useEffect(() => {
		const getPosts = async () => {
			if (!userProfile) return;
			setIsLoading(true);
			setPosts([]);

			try {
				const q = query(collection(firestore, "posts"), where("createdBy", "==", userProfile.uid));
				const querySnapshot = await getDocs(q);

				const post = [];
				querySnapshot.forEach((doc) => {
					post.push({ ...doc.data(), id: doc.id });
				});

				post.sort((a, b) => b.createdAt - a.createdAt);
				setPosts(post);
			} catch (error) {
				showToast("Error", error.message, "error");
				setPosts([]);
			} finally {
				setIsLoading(false);
			}
		};

		getPosts();
	}, [setPosts, userProfile, showToast]);



	return { isLoading, posts };
};

export default useGetPosts;