import React from "react";
import { NavLink } from "react-router-dom";

import { BrowserRouter as Router, Route } from "react-router-dom";

import DistributorActivity from "./DistributorActivity";

function DashboardDistributor() {
  return (
    <>
      <DistributorActivity />
    </>
  );
}

export default DashboardDistributor;
