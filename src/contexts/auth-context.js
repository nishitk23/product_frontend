import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  isAuth: false,
  login: () => {},
  logout: () => {},
  userRole: "",
});

export const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");

  //CHECKS IF THE USER LOGGED IN PREVIOUSLY
  useEffect(() => {
    const storedUserisAuthenticatedInformation =
      localStorage.getItem("isAuthenticated");
    const storedUserRole = localStorage.getItem("role");
    if (storedUserisAuthenticatedInformation === "1") {
      setIsAuthenticated(true);
      setUserRole(storedUserRole)
    }
  }, []);

  //Write your authentication code here
  const login = (email, password) => {
    console.log("EMAIL: " + email);
    console.log("PASSWORD: " + password);

    if (email === "manufacturer@gmail.com") {
      localStorage.setItem("isAuthenticated", "1");
      localStorage.setItem("role", email);
      setIsAuthenticated(true);
      setUserRole(email);
    } else if (email === "retailer@gmail.com") {
      localStorage.setItem("isAuthenticated", "1");
      localStorage.setItem("role", email);
      setIsAuthenticated(true);
      setUserRole(email);
    } else if (email === "distributor@gmail.com") {
      localStorage.setItem("isAuthenticated", "1");
      localStorage.setItem("role", email);
      setUserRole(email);
      setIsAuthenticated(true);
    } else if (email === "admin@gmail.com") {
      localStorage.setItem("isAuthenticated", "1");
      localStorage.setItem("role", email);
      setUserRole(email);
      setIsAuthenticated(true);
    } else if (email === "storage@gmail.com") {
      localStorage.setItem("isAuthenticated", "1");
      localStorage.setItem("role", email);
      setUserRole(email);
      setIsAuthenticated(true);
    }
    localStorage.setItem("isAuthenticated", "1");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    setUserRole("");
  };

  return (
    <AuthContext.Provider
      value={{ isAuth: isAuthenticated, login, logout, userRole, setUserRole }}
      {...props}
    ></AuthContext.Provider>
  );
};
