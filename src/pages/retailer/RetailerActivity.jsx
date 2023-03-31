import React, { useContext } from "react";
import Header from "../../components/Header";
import "../User.css";
import ROUTE from "../../data/GIF/way.gif";
import EMP from "../../data/GIF/user.gif";
import USER from "../../data/GIF/customer.gif";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import OUTGOING from "../../data/GIF/complete.gif";
import { useStateContext } from "../../contexts/ContextProvider";
import INCOMING from "../../data/GIF/shipping.gif";
import SCAN from "../../data/GIF/qr-code.gif";
import {
  NavLink,
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const cardList = [
  //   {
  //       icon: EMP,
  //       name: "Incoming Batch History",
  //       path: "/manufacturerincomingBatch"

  //   },
  {
    icon: INCOMING,
    name: "Incoming Batch History",
    path: "/retailerIncomingBatch",
  },
  {
    icon: SCAN,
    name: "ScanHistory",
    path: "/retailerScanHistory",
  },
];

const RetailerActivity = () => {
  const { setTitle, setCategory } = useStateContext();
  setTitle("/Retailer");
  setCategory("Activity");
  return (
    <>
      <div>
        <Header category="Page" title="Retailer Activity | Batch History" />
        <div>
          <div className="container">
            {cardList.map((item, index) => (
              <div>
                <NavLink className="card" key={index} to={item.path}>
                  <div className="content">
                    <div className="imgBx">
                      <img src={item.icon} />
                    </div>
                  </div>
                  <div className="sci">
                    <p>
                      <h1>{item.name}</h1>
                    </p>
                  </div>
                </NavLink>
                {/* <h1>{item.name}</h1> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default RetailerActivity;
