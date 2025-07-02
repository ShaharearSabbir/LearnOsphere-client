import React from "react";
import { Helmet } from "react-helmet";

const OnTitleBar = ({ children }) => {
  return (
    <Helmet>
      <title> {children} - LearnOsphere</title>
    </Helmet>
  );
};

export default OnTitleBar;
