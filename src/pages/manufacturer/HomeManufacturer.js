import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ManufacturerActivity from "./ManufacturerActivity";
import ManufacturerOutgoingHistory from "./ManufacturerOutgoingHistory";
import ManufacturerScanHistory from "./ManufacturerScanHistory";
import DashboardManufacturer from "./DashboardManufacturer";
import CreateBatch from "../CreateBatch";
import AddProduct from "./AddProduct";
import Popupform from "./Popupform";

const HomeManufacturer = () => (
  <Routes>
    <Route path="/" element={<DashboardManufacturer />} />

    <Route path="/manufacturerActivity" element={<ManufacturerActivity />} />
    <Route path="/popupprod" element={<Popupform />} />

    <Route
      path="/manufacturerOutgoingHistory"
      element={<ManufacturerOutgoingHistory />}
    />
    <Route
      path="/manufacturerScanHistory"
      element={<ManufacturerScanHistory />}
    />
    <Route path="/createbatch" element={<CreateBatch />} />
    <Route path="/addProduct" element={<AddProduct />} />
  </Routes>
);

export default HomeManufacturer;
