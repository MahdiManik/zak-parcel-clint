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
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },
      //  {
      //    path: "add",
      //    element: (
      //      <AdminRoute>
      //        <AddItem />
      //      </AdminRoute>
      //    ),
      //  },
      //  {
      //    path: "manage",
      //    element: (
      //      <AdminRoute>
      //        <ManageItem />
      //      </AdminRoute>
      //    ),
      //  },
      //  {
      //    path: "update/:id",
      //    element: (
      //      <AdminRoute>
      //        <UpdateItem />
      //      </AdminRoute>
      //    ),
      //    loader: ({ params }) =>
      //      fetch(
      //        `https://bistro-boss-server-seven-self.vercel.app/menu/${params.id}`
      //      ),
      //  },
      //  {
      //    path: "users",
      //    element: (
      //      <AdminRoute>
      //        <AllUsers />
      //      </AdminRoute>
      //    ),
      //  },
    ],
  },
]);

export default router;
