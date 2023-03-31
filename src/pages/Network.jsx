import React from "react";
import NetworkGraph from "../components/network/NetworkGraph";
import { useStateContext } from "../contexts/ContextProvider";

function Network() {
  const { setTitle , setCategory } = useStateContext();
  setTitle('/Network')
  setCategory('Page')
  return (
    <div>
      <div className=" h-[92%] bg-white mt-1 ">
        <NetworkGraph />
      </div>
    </div>
  );
}

export default Network;
