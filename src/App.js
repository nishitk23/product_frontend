import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import HomeAdmin from "./pages/admin/HomeAdmin";
import HomeManufacturer from "./pages/manufacturer/HomeManufacturer";
import HomeDistributor from "./pages/distributer/HomeDistributor";
import HomeStorage from "./pages/storage/HomeStorage";
import HomeRetailer from "./pages/retailer/HomeRetailer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { AuthContext } from "./contexts/auth-context";

function App() {
  const { isAuth, userRole, login } = useContext(AuthContext);
  return (
    <>
      <div>{!isAuth && <Login onLogin={login} />}</div>
      {isAuth && (
        <BrowserRouter>
          <div className="flex relative">
            <div className="w-[8%] fixed sidebar bg-sidebar-bg z-50 text-clip">
              <Sidebar />
            </div>
            <div className="bg-main-bg absolute left-[8%] w-[92%]">
              <div className="fixed w-[92%] z-[5]">
                <Navbar />
              </div>
              <div className="z-[1] bg-main-bg absolute top-14 min-h-[90vh] w-full ">
                <div>
                  {userRole === "admin@gmail.com" ? <HomeAdmin /> : ""}
                  {userRole === "manufacturer@gmail.com" ? (
                    <HomeManufacturer />
                  ) : (
                    ""
                  )}
                  {userRole === "distributor@gmail.com" ? (
                    <HomeDistributor />
                  ) : (
                    ""
                  )}
                  {userRole === "storage@gmail.com" ? <HomeStorage /> : ""}
                  {userRole === "retailer@gmail.com" ? <HomeRetailer /> : ""}
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
