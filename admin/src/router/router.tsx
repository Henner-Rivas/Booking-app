import Home from "../pages/home";
import Login from "../pages/login";
import NewHotel from "../pages/newHotel";

import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "../pages/notFound";
import LayoutPublic from "../Layout/LayoutPublic";
import Users from "../pages/users";
import UserDetails from "../pages/userDetails";
import HotelDetails from "../pages/hotelDetails";

import { useContext } from "react";
import AuthContext, { ProtectRoute } from "../context/AuthContext";
import Hotels from "../pages/Hotels";
import NewUser from "../pages/newUser";
import Rooms from "../pages/rooms";
import NewRoom from "../pages/newRooms";
import RoomDetails from "../pages/roomDeails";

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
            element: <UserDetails />,
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
            element: <HotelDetails />,
          },

          {
            path: "hotels/:id/edit",
            element: <NewHotel type="EDIT" />,
          },

          {
            path: "hotels/new",
            element: <NewHotel type="NEW" />,
          },
          {
            path: "rooms",
            element: <Rooms />,
          },

          {
            path: "rooms/new",
            element: <NewRoom />,
          },
          {
            path: "rooms/:id/edit",
            element: <NewRoom />,
          },
          {
            path: "/rooms/:id",
            element: <RoomDetails />,
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
