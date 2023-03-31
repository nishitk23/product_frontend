import React from "react";
import Header from "../../components/Header";
import "../User.css";
import OUTGOING from "../../data/GIF/complete.gif";
import INCOMING from "../../data/GIF/shipping.gif";
import SCAN from "../../data/GIF/qr-code.gif";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const cardList = [
  {
    icon: INCOMING,
    name: "Incoming Batch History",
    path: "/distributorIncomingHistory",
  },
  {
    icon: OUTGOING,
    name: "Outgoing Batch History",
    path: "/distributorOutgoingHistory",
  },
  {
    icon: SCAN,
    name: "ScanHistory",
    path: "/distributorscanHistory",
  },
];

const DistributerActivity = () => {
  const { setTitle, setCategory } = useStateContext();
  setTitle("/Distributor");
  setCategory("Activity");
  return (
    <>
      <div>
        <Header category="Page" title="Distributor Activity | Batch History" />
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

export default DistributerActivity;
