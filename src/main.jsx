import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./AuthContext/AuthProvider";
import { RouterProvider } from "react-router";
import router from "./Routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
