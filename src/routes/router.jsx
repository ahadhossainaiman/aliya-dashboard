import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import AdminRoutes from "./AdminRoutes";
import Auth from "../layouts/Auth/Auth";
import Login from "../pages/Auth/Login";
import DashboardHome from "../pages/Main/DashboardHome";
import Boutiques from "../pages/Main/Boutiques";




const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children: [
        {
          path: "",
          element: <DashboardHome/>,
        },
        {
          path: "/boutiques",
          element: <Boutiques/>,
        },
        {
          path: "/shoppers",
          element: "",
        },
        {
          path: "/drivers",
          element: "",
        },
      ],
    },
    {
      path: "/auth",
      element: <Auth/>,
      children: [
        {
          path: "/auth",
          element: <Login/>,
        },
        // {
        //   path: "login",
        //   element: <Login />,
        // },
        {
          path: "forgot-password",
          element: "",
        },
        {
          path: "verify",
          element:"",
        },
        {
          path: "update-password",
          element: "",
        },
      ],
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);

  export default router;