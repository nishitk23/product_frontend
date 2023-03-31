import React, { useContext } from "react";
import Header from "../../components/Header";
import "../User.css";
import SCAN from "../../data/GIF/qr-code.gif";
import ADDPRODUCT from "../../data/GIF/add-file.gif";
import ADDBATCH from "../../data/GIF/clipboard.gif";
import OUTGOING from "../../data/GIF/complete.gif";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import { useStateContext } from "../../contexts/ContextProvider";
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
    icon: OUTGOING,
    name: "Outgoing Batch History",
    path: "/manufacturerOutgoingHistory",
  },
  {
    icon: SCAN,
    name: "ScanHistory",
    path: "/manufacturerScanHistory",
  },
  {
    icon: ADDBATCH,
    name: "Create Batch",
    path: "/createBatch",
  },
  {
    icon: ADDPRODUCT,
    name: "Add new Products",
    path: "/popupprod",
  },
];

const ManufacturerActivity = () => {
  const { setTitle, setCategory } = useStateContext();
  setTitle("/Manufacturer");
  setCategory("Activity");
  return (
    <>
      <div>
        <Header category="" title="Manufacturer Activity | Batch History" />
        <div>
          <div className="container">
            {cardList.map((item, index) => (
              <div>
                <NavLink className="card" key={index} to={item.path}>
                  <div className="content">
                    <div className="imgBx">
                      <img src={item.icon}></img>
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
export default ManufacturerActivity;
