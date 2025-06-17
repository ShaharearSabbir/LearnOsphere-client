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
import CourseDetails from "../Components/SharedComponents/CourseDetails/CourseDetails";
import ProfileOutlet from "../Pages/Profile/ProfileOutlet";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import Courses from "../Pages/Main/Courses";
import Enrollments from "../Pages/Learner/Enrollments";
import Error from "../Pages/Error";
import Blogs from "../Pages/Blogs/Blogs";
import AddBlog from "../Pages/Blogs/AddBlog";
import AllCategories from "../Components/HomeComponents/AllCategories";
import CourseByCategory from "../Components/HomeComponents/CourseByCategory";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <Loader />,
    children: [
      { index: true, Component: MainHome },
      { path: "courses", Component: Courses },
      {
        path: "allCategories",
        loader: () =>
          axios("https://learnosphere-server.vercel.app/categories"),
        Component: AllCategories,
      },
      {
        path: "category/:cat",
        loader: ({ params }) =>
          axios(
            `https://learnosphere-server.vercel.app/courses?filterBy=${params.cat}`
          ),
        Component: CourseByCategory,
      },
      {
        path: "blogs",
        loader: () => axios("https://learnosphere-server.vercel.app/blogs"),
        Component: Blogs,
      },
      { path: "addBlog", Component: AddBlog },
      {
        path: "category/:cat",
        loader: ({ params }) =>
          axios(
            `https://learnosphere-server.vercel.app/courses?filterBy=${params.cat}`
          ),
        Component: Courses,
      },
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
        element: (
          <PrivateRoute>
            <MyCourses />
          </PrivateRoute>
        ),
      },
      {
        path: "enrollments",
        element: (
          <PrivateRoute>
            <Enrollments />
          </PrivateRoute>
        ),
      },
      {
        path: "updateCourse/:id",
        loader: ({ params }) =>
          axios(`https://learnosphere-server.vercel.app/course/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateCourse />
          </PrivateRoute>
        ),
      },
      {
        path: "courseDetails/:id",
        loader: ({ params }) =>
          axios(`https://learnosphere-server.vercel.app/course/${params.id}`),
        element: <CourseDetails />,
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
    path: "/",
    Component: AuthLayout,
    children: [
      { path: "login", Component: SignIn },
      { path: "register", Component: SignUp },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);

export default router;
