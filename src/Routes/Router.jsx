import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import MainHome from "../Pages/Main/MainHome";
import AuthLayout from "../Layouts/AuthLayout";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import PrivateRoute from "../Components/AuthComponents/PrivateRoute";
import AddCourse from "../Pages/Mentor/AddCourse";
import MyCourses from "../Pages/Mentor/MyCourses";
import axios from "axios";
import UpdateCourse from "../Pages/Mentor/UpdateCourse";
import Loader from "../Components/SharedComponents/Loader";
import CourseDetails from "../Components/SharedComponents/CourseDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <Loader />,
    children: [
      { index: true, Component: MainHome },
      {
        path: "addCourse",
        element: (
          <PrivateRoute>
            <AddCourse />
          </PrivateRoute>
        ),
      },
      {
        path: "myCourses/:uid",
        loader: ({ params }) =>
          axios(`http://localhost:3000/courses/${params.uid}`),
        element: (
          <PrivateRoute>
            <MyCourses />
          </PrivateRoute>
        ),
      },
      {
        path: "updateCourse/:id",
        loader: ({ params }) =>
          axios(`http://localhost:3000/course/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateCourse />
          </PrivateRoute>
        ),
      },
      {
        path: "courseDetails/:id",
        loader: ({ params }) =>
          axios(`http://localhost:3000/course/${params.id}`),
        element: (
          <PrivateRoute>
            <CourseDetails />
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
