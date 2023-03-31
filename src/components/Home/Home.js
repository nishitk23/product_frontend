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
import WarehouseActivity from "../../pages/storage/WarehouseActivity";
import IncomingBatch from "../../pages/storage/IncomingBatch";
import OutgoingBatch from "../../pages/storage/OutgoingBatch";
import ScanHistory from "../../pages/storage/ScanHistory";
import ManufacturerOutgoingHistory from "../../pages/manufacturer/ManufacturerOutgoingHistory";
import ManufacturerScanHistory from "../../pages/manufacturer/ManufacturerScanHistory";
import RetailerScanHistory from "../../pages/retailer/RetailerScanHistory";
import RetailerIncomingBatch from "../../pages/retailer/RetailerIncomingBatch";
import DistributorIncomingBatch from "../../pages/distributer/DistributorIncomingBatch";
import DistributorOutgoingBatch from "../../pages/distributer/DistributorOutgoingBatch";
import DistributorScanHistory from "../../pages/distributer/DistributorScanHistory";
import DistributorActivity from "../../pages/distributer/DistributorActivity";
import ManufacturerActivity from "../../pages/manufacturer/ManufacturerActivity";
import RetailerActivity from "../../pages/retailer/RetailerActivity";

import "../../App.css";
import TrackerForm from "../../pages/TrackerForm";
import Upload from "../../Screens/Upload";

const Home = () => {
  const { isAuth, login } = useContext(AuthContext);

  return (
    <div>
      {!isAuth && <Login onLogin={login} />}

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
                  {/* QUICK LINKS ENDS */}

                  {/* MASTER DATA STARTS */}
                  <Route
                    path="/masterData/products"
                    element={<ProductMaster />}
                  />
                  <Route
                    path="/masterData/locations"
                    element={<LocationMaster />}
                  />
                  <Route
                    path="/masterData/routes"
                    element={<RouteMasterData />}
                  />
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
                  {/* WareHouse Starts */}
                  <Route
                    path="/warehouseActivity"
                    element={<WarehouseActivity />}
                  />
                  <Route path="/incomingBatch" element={<IncomingBatch />} />
                  <Route path="/outgoingBatch" element={<OutgoingBatch />} />
                  <Route path="/scanHistory" element={<ScanHistory />} />
                  {/* WareHouse Ends */}

                  {/* Retailer Starts */}

                  <Route
                    path="/retailerActivity"
                    element={<RetailerActivity />}
                  />
                  <Route
                    path="/retailerIncomingBatch"
                    element={<RetailerIncomingBatch />}
                  />
                  <Route
                    path="/retailerScanHistory"
                    element={<RetailerScanHistory />}
                  />
                  {/* Retailer Ends */}

                  {/* Manufacturer Starts */}
                  <Route
                    path="/manufacturerActivity"
                    element={<ManufacturerActivity />}
                  />

                  <Route
                    path="/manufacturerOutgoingHistory"
                    element={<ManufacturerOutgoingHistory />}
                  />
                  <Route
                    path="/manufacturerScanHistory"
                    element={<ManufacturerScanHistory />}
                  />
                  {/* Manufacturer End */}
                  {/* Distributer Starts */}
                  <Route
                    path="/distributerActivity"
                    element={<DistributerActivity />}
                  />
                  <Route
                    path="/distributerincomingBatch"
                    element={<DistributerIncomingBatch />}
                  />
                  <Route
                    path="/distributeroutgoingBatch"
                    element={<DistributerOutgoingBatch />}
                  />
                  <Route
                    path="/distributerscanHistory"
                    element={<DistributerScanHistory />}
                  />
                  {/* Distributer End */}

                  <Route path="/trackerForm" element={<TrackerForm />} />

                  {/* EXTRA */}
                  <Route path="/upload" element={<Upload />} />
                  <Route path="/testPage" element={<Try />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
};

export default Home;
