import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import Place from "../components/Place";
import Blog from "../components/Blog";
import About from "../components/About";

import { DashboardLayout } from "../Dashboard/DashboardLayout";
import {UploadPlace} from "../Dashboard/UploadPlace";
import Dashboard from "../Dashboard/Dashboard";
import ManagePlaces from "../Dashboard/ManagePlaces";
import EditPlaces from "../Dashboard/EditPlaces";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/place/:id",
          element: <Place />,
          loader: ({ params }) => fetch(`http://localhost:5000/api/places/${params.id}`)
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/blog",
          element: <Blog/>
        }
      ]
    },
        {
          path: "/admin/dashboard",
          element: <DashboardLayout />,
          children: [
            { path: "/admin/dashboard", element: <Dashboard />},
            { path: "/admin/dashboard/upload", element: <UploadPlace /> },
            { path: "/admin/dashboard/manage", element: <ManagePlaces /> },
            { path: "/admin/dashboard/edit-places/:id", element: <EditPlaces />,
            loader: ({ params }) => fetch(`http://localhost:5000/api/places/${params.id}`)
          },
        ],
      },
      // {
      //   path: "login",
      //   element: <Login />
      // },
      // {
      //   path: "/create-user",
      //   element: <Signup/>
      // },
      // {
      //   path:"/logout",
      //   element: <Logout/>
      // }
    ]);

export default router;