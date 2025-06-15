import axios from "axios";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

const useSecureAxios = () => {
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && user?.accessToken) {
      const requestInterceptor = axiosInstance.interceptors.request.use(
        (config) => {
          config.headers.authorization = `bearer ${user.accessToken}`;
          return config;
        }
      );
      return () => {
        axiosInstance.interceptors.request.eject(requestInterceptor);
      };
    }
  }, [user, loading]);
  return axiosInstance;
};

export default useSecureAxios;
