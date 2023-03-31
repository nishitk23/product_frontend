import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import "../../App.css";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DistributorScanHistory from "./DistributorScanHistory";
import DistributorOutgoingBatch from "./DistributorOutgoingBatch";
import DistributorIncomingBatch from "./DistributorIncomingBatch";
import DistributorActivity from "./DistributorActivity";
import DashboardDistributor from "./DashboardDistributor";

const HomeDistributor = () => (
  <Routes>
    <Route path="/" element={<DashboardDistributor />} />

    <Route path="/distributorActivity" element={<DistributorActivity />} />

    <Route
      path="/distributorOutgoingHistory"
      element={<DistributorOutgoingBatch />}
    />
    <Route
      path="/distributorScanHistory"
      element={<DistributorScanHistory />}
    />
    <Route
      path="/distributorIncomingHistory"
      element={<DistributorIncomingBatch />}
    />
  </Routes>
);

export default HomeDistributor;
