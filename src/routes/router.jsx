
import { createBrowserRouter } from "react-router"; 
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/", 
        element: <Homepage/>
      },
    //   {
    //     path: "login",
    //     element: <Login />
    //   },
    ],
  },
]);

export default router;
