import React from "react";
import { NavLink } from "react-router-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

import ManufacturerOutgoingHistory from "./ManufacturerOutgoingHistory";
import ManufacturerScanHistory from "./ManufacturerScanHistory";
import ManufacturerActivity from "./ManufacturerActivity";

function DashboardManufacturer() {
  return (
    <>
      <ManufacturerActivity />
    </>
  );
}

export default DashboardManufacturer;
