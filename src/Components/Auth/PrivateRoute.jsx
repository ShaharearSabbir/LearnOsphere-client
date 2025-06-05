import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import Loader from "../Loader";
import { Navigate, useLocation } from "react-router";
import { div } from "motion/react-client";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return Loader;
  }

  if (!user) {
    return <Navigate to="/auth" state={location.pathname}></Navigate>;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
