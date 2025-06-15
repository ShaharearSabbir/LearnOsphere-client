import React from "react";
import useSecureAxios from "./useSecureAxios";

const useSecureAPI = () => {
  const axiosSecure = useSecureAxios();

  const getDataByUID = (link, uid) => {
    const url = link + "/" + uid;
    return axiosSecure.get(url).then((res) => res.data);
  };

  return {
    getDataByUID,
  };
};

export default useSecureAPI;
