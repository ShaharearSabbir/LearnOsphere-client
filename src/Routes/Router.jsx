import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import MainHome from "../Pages/Main/MainHome";
import AuthLayout from "../Layouts/AuthLayout";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import PrivateRoute from "../Components/Auth/PrivateRoute";
import AddCourse from "../Pages/Mentor/AddCourse";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: MainHome },
      {
        path: "addCourse",
        element: (
          <PrivateRoute>
            <AddCourse></AddCourse>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      { index: true, Component: SignIn },
      { path: "register", Component: SignUp },
    ],
  },
]);
