import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function RequireAuth({ children }) {
  //const user = JSON.parse(localStorage.getItem("user"));
  const { auth } = useSelector((state) => state.authSlice);
  const isLoggedIn = auth.isLoggedIn;

  if (!isLoggedIn) {
    //localStorage.removeItem("user");
    return <Navigate to="/login" replace />;
  }

  return children;
}
