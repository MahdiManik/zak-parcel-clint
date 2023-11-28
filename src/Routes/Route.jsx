import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import AdminRoute from "./AdminRoute";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import DeliveryManHome from "../Pages/Dashboard/DeliveryMan/DeliveryManHome";
import BookParcel from "../Pages/Dashboard/User/BookParcel";
import MyParcel from "../Pages/Dashboard/User/MyParcel";
import Profile from "../Pages/Dashboard/User/Profile";
import AllParcel from "../Pages/Dashboard/Admin/AllParcel";
import AllDeliveryMan from "../Pages/Dashboard/Admin/AllDeliveryMan";
import { Modal } from "bootstrap";
import UpdateParcel from "../Pages/Dashboard/User/UpdateParcel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "user-profile",
        element: <Profile />,
      },
      {
        path: "book-parcel",
        element: <BookParcel />,
      },
      {
        path: "my-parcel",
        element: <MyParcel />,
      },
      {
        path: "delivery-man-home",
        element: <DeliveryManHome />,
      },
      {
        path: "delivery-man-home",
        element: <DeliveryManHome />,
      },
      {
        path: "update-booking",
        element: <UpdateParcel />,
        loader: ({ params }) =>
          fetch(`http://localhost:7000/bookings/${params.email}`),
      },
      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      {
        path: "all-parcel",
        element: (
          <AdminRoute>
            <AllParcel />
          </AdminRoute>
        ),
      },
      {
        path: "all-delivery-man",
        element: (
          <AdminRoute>
            <AllDeliveryMan />
          </AdminRoute>
        ),
      },
      //  {
      //    path: "update/:id",
      //    element: (
      //      <AdminRoute>
      //        <UpdateItem />
      //      </AdminRoute>
      //    ),
      //    loader: ({ params }) =>
      //      fetch(
      //        `/menu/${params.id}`
      //      ),
      //  },
      {
        path: "modal",
        element: (
          <AdminRoute>
            <Modal />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
