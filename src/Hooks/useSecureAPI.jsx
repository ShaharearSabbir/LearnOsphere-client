import React, { useContext } from "react";
import useSecureAxios from "./useSecureAxios";
import { AuthContext } from "../AuthContext/AuthContext";

const useSecureAPI = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useSecureAxios();

  const getDataByUID = (route, uid) => {
    if (user?.accessToken) {
      const url = route + "/" + uid;
      return axiosSecure.get(url).then((res) => res?.data);
    }
  };

  return {
    getDataByUID,
  };
};

export default useSecureAPI;
