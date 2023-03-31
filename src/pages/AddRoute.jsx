import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import {
  AiFillMinusCircle,
  AiOutlineMinus,
  AiOutlineArrowRight,
} from "react-icons/ai";
import Header from "../components/Header";
import Button from "../components/UI/Button/Button";
import Warning from "../components/Warning";
import { bodData } from "../data/bodData";
import { AiOutlineClose } from "react-icons/ai";
import { useStateContext } from "../contexts/ContextProvider";

const apiPostUrl = "http://20.193.146.8:8080/api/data/get/bodmaster";
const apiGetUrl = "http://20.193.146.8:8080/api/data/routemaster";
const URL = "http://20.193.146.8:8080/api/data/get/bodmaster";

const WAIT_TIME = 2000;

const AddRoute = (props) => {
  const { setTitle, setCategory } = useStateContext();
  const [numSelects, setNumSelects] = useState(2);
  const [selectedValues, setSelectedValues] = useState([]);
  const [showWarning, setShowWarning] = React.useState(false);
  const [data, setData] = useState([]);
  const [responseData, setResponseData] = useState([]);
  const [routeId, setRouteId] = React.useState("");
  const [checkpoints, setCheckpoints] = React.useState("");
  const [totalDistance, setTotalDistance] = React.useState("");
  const [avgTimeTaken, setAvgTimeTaken] = React.useState("");
  const [route, setRoute] = useState([]);
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
  ];

  const onClick = props.onCloseRecieved;

  setTitle("/Add Route");
  setCategory("Data");

  const addSelect = () => {
    setShowWarning(false);
    setNumSelects(numSelects + 1);
    setSelectedValues([selectedValues.slice(-1, 0)]);
    console.log("INSIDE ADD SELECT");
  };

  const removeSelect = () => {
    if (numSelects <= 2) {
      setShowWarning(true);
    }
    if (numSelects > 2) {
      setNumSelects(numSelects - 1);
      setSelectedValues([selectedValues.slice(0, -1)]);
    }
    console.log("INSIDE REMOVE SELECT");
  };

  const handleChange = (index) => (event) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = event.target.value;
    setSelectedValues(newSelectedValues);
    console.log("INSIDE HANDLE CHANGE");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //the distance & time should be made dynamic accordin to the api defination
    const newRoute = selectedValues.filter((value) => value !== undefined);
    const jsonBody = {
      route: newRoute,
      totalDistance: "100km",
      avgTimeTaken: "28hrs",
    };
    console.log("Selected values:", newRoute);
    console.log("Json Body", jsonBody);
    apicall(jsonBody);
  };

  // const route = ["Manufacturer", "Distributor-1", "Storage-2", "Retailer-4"];
  // const totalDistance = "100Kms";
  // const avgTimeTaken = "78hrs";

  // const jsonBody = {
  //   route: route,
  //   totalDistance: "100Kms",
  //   avgTimeTaken: "78hrs",
  // };

  // API CALL TO FETCH BOD DATA
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://20.193.146.8:8080/api/data/get/bodmaster");
  //     const json = await response.json();
  //     setData(json.data);
  //     console.log(`DATA : ${JSON.stringify(data.data[0].startingPoint)}`);
  //   };
  //   fetchData();
  // }, []);
  React.useEffect(() => {
    fetch(URL, {
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
    console.log("DATA : " + JSON.stringify(data));
  }, []);

  // API CALL TO SEND ADD ROUTE REQUEST
  const apicall = (body) => {
    // API CALL
    fetch(apiGetUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((d) => {
        setResponseData(d);
        // setRouteId(d.routeId);
        // setCheckpoints(d.checkpoints);
        // setTotalDistance(d.totalDistance);
        // setAvgTimeTaken(d.avgTimeTaken);
        console.log(`DATA TYPE OF : ${typeof responseData}`);
        console.log("Add Route: " + d);
      });
  };

  return (
    <>
      {/* <div className="bg-white shadow-lg rounded-lg w-1/2 h-3/3 fixed top-[10%] left-[25%] z-[5]">
        <button
          className="absolute top-0 right-0 p-4 text-xl hover:text-red-600 "
          onClick={onClick}
        >
          <AiOutlineClose />
        </button> */}
      <div className="w-[80%] mx-auto p-4 rounded-lg shadow-lg bg-white my-2">
        <div className="m-10">
          {/* {data ? ( */}
          <form onClick={handleSubmit}>
            <button
              className="rounded-full bg-hover-bg p-1 hover:bg-[#3497c1] mr-2 "
              onClick={removeSelect}
            >
              {" "}
              <AiOutlineMinus className="text-3xl" />
            </button>
            <button
              className="rounded-full bg-hover-bg p-1 hover:bg-[#3497c1] mr-2"
              onClick={addSelect}
            >
              <IoMdAdd className="text-3xl" />
            </button>
            <br />
            <br />
            {showWarning && (
              <div>
                <Warning content="Warning: You must add atleast 2 location." />
              </div>
            )}
            {Array.from({ length: numSelects }, (_, i) => (
              <select
                key={i}
                value={selectedValues[i]}
                onChange={handleChange(i)}
                className="rounded-lg text-base md:text-lg px-[5%] py-3 mr-2 mt-2"
              >
                {data.map((option) => (
                  <option
                    key={option.doc.checkPoints}
                    value={option.doc.startingPoint}
                  >
                    {option.doc.startingPoint}
                  </option>
                ))}
              </select>
            ))}
            <br />
            <br />
            <h1 className="font-semibold">
              Selected values: [{selectedValues.join(", ")}]
            </h1>
            <h1 className="font-semibold">Total checkpoints: {numSelects}</h1>
            <div className="m-3">
              <Button 
                type="submit" 
                // onClick={handleSubmit}
              >Create
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRoute;
