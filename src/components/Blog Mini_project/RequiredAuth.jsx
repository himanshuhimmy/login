import React, { useContext } from "react";
import BlogsContext from "./Store-Context/BlogsContext";
import { Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  let { activeId } = useContext(BlogsContext);

  if (activeId === "") {
    return <Navigate to={`/`} />;
  }

  return <div>{children}</div>;
};

export default RequiredAuth;
