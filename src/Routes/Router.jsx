import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import MainHome from "../Pages/Main/MainHome";
import AuthLayout from "../Layouts/AuthLayout";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [{ index: true, Component: MainHome }],
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      { index: true, Component: SignIn },
      { path: "signup", Component: SignUp },
    ],
  },
]);
