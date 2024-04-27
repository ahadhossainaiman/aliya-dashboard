import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import AdminRoutes from "./AdminRoutes";
import Auth from "../layouts/Auth/Auth";
import Login from "../pages/Auth/Login";
import DashboardHome from "../pages/Main/DashboardHome";
import Boutiques from "../pages/Main/Boutiques";
import Shoppers from "../pages/Main/Shoppers";
import AddBoutiques from "../pages/Main/AddBoutiques";
import EditBoutiques from "../pages/Main/EditBoutiques";
import BoutiqueDetails from "../pages/Main/BoutiqueDetails";
import Drivers from "../pages/Main/Drivers";
import Notification from "../pages/Main/Notification";




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
          path: "/add-boutiques",
          element: <AddBoutiques/>,
        },
        {
          path: "/edit-boutiques/:id",
          element: <EditBoutiques/>,
        },
        {
          path: "/boutique-details/:id",
          element: <BoutiqueDetails/>,
        },
        {
          path: "/shoppers",
          element: <Shoppers/>,
        },
        {
          path: "/drivers",
          element: <Drivers/>,
        },
        {
          path: "/notifications",
          element: <Notification/>,
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