import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import MainHome from "../Pages/Main/MainHome";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {index: true, Component: MainHome}
        ]
    }
])