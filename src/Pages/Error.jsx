import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import OnTitleBar from "../Components/SharedComponents/OnTitleBar";
import usePageTop from "../Hooks/usePageTop";

const Error = () => {
  usePageTop();
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <OnTitleBar>404 - Page Not Founded</OnTitleBar>
      <div className="flex justify-between items-center flex-col gap-4">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*qdFdhbR00beEaIKDI_WDCw.gif"
          className="w-96"
          alt=""
        />
        <h2 className="text-amber-500 text-3xl font-bold text-center mt-3">
          404 - Page Not Found
        </h2>
        <Link className="btn btn-primary-outline" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
