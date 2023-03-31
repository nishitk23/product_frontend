import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminActivity from "../../pages/AdminActivity";
import Dashboard from "../../pages/Dashboard";
import MasterData from "../../pages/MasterData";
import Network from "../../pages/Network";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ProductMaster from "../../pages/ProductMaster";
import LocationMaster from "../../pages/LocationMaster";
import RouteMasterData from "../../pages/RouteMasterData";
import TransactionMaster from "../../pages/TransactionData";
import Tracker from "../../Screens/Tracker";
import BOD from "../../pages/BOD";
import Demo from "../../components/Demo";
import Login from "../../components/Login/Login";
import CreateBatch from "../../pages/CreateBatch";
import { AuthContext } from "../../contexts/auth-context";
import Registeruser from "../../pages/RegisterUser";
import ProdTracker from "../../Screens/ProdTracker";
import RouteUpdate from "../../pages/RouteUpdate";
import AddRoute from "../../pages/AddRoute";
import UserDetails from "../../pages/UserDetails";
import AddLocation from "../../pages/AddLocation";
import "../../App.css";
import TrackerForm from "../../pages/TrackerForm";
import Upload from "../../Screens/Upload";
import Try from "../../components/trial/try";
import AddBOD from "../../pages/AddBOD";

const HomeAdmin = () => {
  return (
    <Routes>
      {/* DASHBOARD SECTION STARTS */}
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/network" element={<Network />} />
      <Route path="/masterData" element={<MasterData />} />
      <Route path="/adminActivity" element={<AdminActivity />} />
      <Route path="/registerUser" element={<Registeruser />} />
      {/* DASHBOARD SECTION ENDS */}

      {/* COMPONENTS STARTS */}
      <Route path="/tracker" element={<Tracker />} />
      <Route path="/prodTracker/:id" element={<ProdTracker />} />
      {/* COMPONENTS ENDS */}

      {/* CHARTS STARTS */}
      {/* <Route path="/pie" element={<Pie />} /> */}
      {/* CHARTS ENDS */}

      {/* QUICK LINKS STARTS */}
      <Route path="/createBatch" element={<CreateBatch />} />
      <Route path="/addLocation" element={<AddLocation />} />
      <Route path="/addRoute" element={<AddRoute />} />
      <Route path="/addBOD" element={<AddBOD />} />
      {/* QUICK LINKS ENDS */}

      {/* MASTER DATA STARTS */}
      <Route path="/masterData/products" element={<ProductMaster />} />
      <Route path="/masterData/locations" element={<LocationMaster />} />
      <Route path="/masterData/routes" element={<RouteMasterData />} />
      <Route path="/transaction" element={<TransactionMaster />} />
      <Route path="/masterData/bod" element={<BOD />} />
      <Route path="/demo" element={<Demo />} />
      {/* MASTER DATA ENDS */}

      {/* ADMIN ACTIVITY STARTS */}
      <Route path="/adminActivity" element={<AdminActivity />} />
      <Route path="/registerUser" element={<Registeruser />} />
      <Route path="/routeUpdate" element={<RouteUpdate />} />
      <Route path="/userDetails" element={<UserDetails />} />
      {/* ADMIN ACTIVITY ENDS */}

      <Route path="/trackerForm" element={<TrackerForm />} />

      {/* EXTRA */}
      <Route path="/upload" element={<Upload />} />
      <Route path="/try" element={<Try />} />
      <Route path="/testPage" element={<Try />} />
    </Routes>
  );
};

export default HomeAdmin;
