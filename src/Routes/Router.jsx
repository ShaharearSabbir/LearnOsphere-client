import { createBrowserRouter, RouterProvider } from "react-router";
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
import CourseDetails from "../Components/SharedComponents/CourseDetails/CourseDetails";
import ProfileOutlet from "../Pages/Profile/ProfileOutlet";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import Courses from "../Pages/Main/Courses";

import { getAuth } from "firebase/auth";
import Enrollments from "../Pages/Learner/Enrollments";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <Loader />,
    children: [
      { index: true, Component: MainHome },
      { path: "courses", Component: Courses },
      {
        path: "addCourse",
        element: (
          <PrivateRoute>
            <AddCourse />
          </PrivateRoute>
        ),
      },
      {
        path: "myCourses",
        loader: async () => {
          const auth = getAuth();
          const user = auth.currentUser;

          if (!user || !user.uid) {
            return { data: [] };
          }
          return axios(`http://localhost:3000/courses/${user.uid}`);
        },
        element: (
          <PrivateRoute>
            <MyCourses />
          </PrivateRoute>
        ),
      },
      {
        path: "enrollments",
        loader: async () => {
          const auth = getAuth();
          const user = auth.currentUser;

          if (!user || !user.uid) {
            return { data: {} };
          }
          return axios(`http://localhost:3000/user/${user.uid}`);
        },
        element: (
          <PrivateRoute>
            <Enrollments />
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
      {
        path: "/",
        element: (
          <PrivateRoute>
            <ProfileOutlet />
          </PrivateRoute>
        ),
        children: [
          {
            path: "profile",
            Component: Profile,
          },
          {
            path: "updateProfile",
            Component: UpdateProfile,
          },
        ],
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

export default router;
