import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("User");

  return isAuthenticated ? children : <Navigate to="/account" />;
};

export default ProtectedRoute;
