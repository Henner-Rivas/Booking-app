import Home from "../pages/home";
import Login from "../pages/login";
import NewHotel from "../pages/newHotel";

import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "../pages/notFound";
import LayoutPublic from "../Layout/LayoutPublic";
import Users from "../pages/users";
import List from "../pages/userDetails";
import { useContext } from "react";
import AuthContext, { ProtectRoute } from "../context/AuthContext";
import Hotels from "../pages/Hotels";
import NewUser from "../pages/newUser";
import Rooms from "../pages/rooms";
import NewRoom from "../pages/newRooms";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: (
              <ProtectRoute>
                <Home />{" "}
              </ProtectRoute>
            ),
          },

          {
            path: "/users",
            element: (
              <ProtectRoute>
                <Users />
              </ProtectRoute>
            ),
          },
          {
            path: "/users/:id",
            element: <List />,
          },

          {
            path: "users/new",
            element: <NewUser />,
          },
          {
            path: "/hotels",
            element: <Hotels />,
          },
          {
            path: "/hotels/:id",
            element: <List />,
          },

          {
            path: "hotels/new",
            element: <NewHotel />,
          },

          {
            path: "rooms",
            element: <Rooms />,
          },

          {
            path: "rooms/new",
            element: <NewRoom />,
          },
        ],
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
