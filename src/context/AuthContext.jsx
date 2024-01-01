import { createContext, useEffect, useState } from "react";
import React from "react";
export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState({});

  const getAdmin = window.localStorage.getItem("admin-access");

  useEffect(() => {
    if (getAdmin) {
      const data = JSON.parse(getAdmin);
      setAdmin(data);
    }
  }, [getAdmin]);

  return (
    <AuthContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
