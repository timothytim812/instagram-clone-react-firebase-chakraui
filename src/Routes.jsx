import { useRoutes } from "react-router-dom";
import NotFound from "./assets/pages/error/index";
import AuthPage from "./assets/pages/Auth";
import HomePage from "./assets/pages/home";

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      path: "*",
      element: <NotFound />,
    },
    {
        path: "/",
        element: <AuthPage />,
    },
    {
      path: "/home",
      element: <HomePage/>,
  }
  ]);

  return element;
};

export default ProjectRoutes;
