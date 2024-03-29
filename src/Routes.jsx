import { Navigate, useRoutes } from "react-router-dom";
import NotFound from "./assets/pages/error/index";
import AuthPage from "./assets/pages/Auth";
import HomePage from "./assets/pages/home";
import ProfilePage from "./assets/pages/profile";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase.config";

const ProjectRoutes = () => {

  const [authUser] = useAuthState(auth);

  let element = useRoutes([
    {
      path: "/auth",
      element: authUser ? <Navigate to="/" /> : <AuthPage />,
    },
    {
      path: "/",
      element: authUser ? <HomePage /> : <Navigate to="/auth" />,
    },
    {
      path: "/:username",
      element:<ProfilePage /> ,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
