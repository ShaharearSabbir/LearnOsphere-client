import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import Loader from "../SharedComponents/Loader";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }

  return <>{children}</>;
};

export default PrivateRoute;
