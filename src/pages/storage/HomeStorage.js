/* eslint-disable quotes */
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import IncomingBatch from "./IncomingBatch";
import OutgoingBatch from "./OutgoingBatch";
import ScanHistory from "./ScanHistory";
import WarehouseActivity from "./WarehouseActivity";
import DashboardStorage from "./DashboardStorage";
import { AuthContext } from "../../contexts/auth-context";

const HomeStorage = () => {
  const { isAuth, login } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<DashboardStorage />} />
      <Route path="/storageActivity" element={<WarehouseActivity />} />

      <Route path="/storageOutgoingHistory" element={<OutgoingBatch />} />
      <Route path="/storageIncomingHistory" element={<IncomingBatch />} />
      <Route path="/storageScanHistory" element={<ScanHistory />} />
    </Routes>
  );
};
export default HomeStorage;
