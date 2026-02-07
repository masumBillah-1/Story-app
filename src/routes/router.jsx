
import { createBrowserRouter } from "react-router"; 
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login/Login";
import ArticlePage from "../pages/StoryFlow/ArticlePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/", 
        element: <Homepage/>
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "sign-in",
        element: <Login/>
      },
      {
        path: "explore",
        element: <ArticlePage/>
      },
    ],
  },
]);

export default router;
