import React, { useContext } from "react";
import BlogsContext from "./Store-Context/BlogsContext";
import { Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  let { loginStstus } = useContext(BlogsContext);

  if (!loginStstus) {
    return <Navigate to={`LoginLanding`} />;
  }

  return <div>{children}</div>;
};

export default RequiredAuth;
