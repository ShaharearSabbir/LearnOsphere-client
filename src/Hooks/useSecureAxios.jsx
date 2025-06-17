import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Toast } from "../Utils/Utilities";

const axiosInstance = axios.create({
  baseURL: "https://learnosphere-server.vercel.app/",
  withCredentials: true,
});

const useSecureAxios = () => {
  const { logOut } = useContext(AuthContext);

  axiosInstance.interceptors.request.use((config) => {
    return config;
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        logOut().then(() =>
          Toast.fire({
            icon: "warning",
            title: "Unauthorized Account or Session Expired",
          })
        );
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useSecureAxios;
