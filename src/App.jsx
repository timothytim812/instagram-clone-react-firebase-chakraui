import { BrowserRouter as Router } from "react-router-dom";
import PageLayout from "./assets/Layouts/PageLayout";
import Routes from "./Routes";
import { createContext, useState } from "react";
import useShowToast from "./assets/components/custom/useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "./firebase/firebase.config";

export const SearchContext = createContext(); 

function App() {

    const [isUpdating, setIsUpdating] = useState(false);
    const [user, setUser] = useState();
    const showToast = useShowToast();
  
    const getUserProfile = async (username) => {
      setIsUpdating(true);
      setUser(null);
      try {
        const querySnapshot = await getDocs(
          query(collection(firestore, "users"), where("username", "==", username))
        );
        if (querySnapshot.empty) return showToast("Error", "User not found", "error");
  
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });
      } catch (error) {
        showToast("Error", error.message, "error");
        setUser(null);
      } finally {
        setIsUpdating(false);
      }
    };

    const updateUser = (updatedUser) => {
      setUser((prevUser) => ({
        ...prevUser,
        ...updatedUser,
      }));
    };

  return (
    <SearchContext.Provider value={{user,setUser,isUpdating,getUserProfile,updateUser}}>
    <Router>
      <PageLayout>
        <Routes />
      </PageLayout>
    </Router>
    </SearchContext.Provider>
  );
}

export default App;
