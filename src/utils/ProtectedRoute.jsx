import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const getAdmin = window.localStorage.getItem("admin-access");

  const admin = JSON.parse(getAdmin);

  if (!getAdmin) {
    return <Navigate to={"/admin/login"} />;
  } else {
    if (admin.role === "admin") {
      return children;
    } else {
      return <Navigate to={"/admin/login"} />;
    }
  }
};

export default ProtectedRoute;
