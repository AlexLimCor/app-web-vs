import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

export const Private = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return user ? children : <Navigate to={"/"} />;
};
