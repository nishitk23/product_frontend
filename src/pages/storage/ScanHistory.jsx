import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import TablePagination from "../../components/UI/TablePagination";
import {
  AiOutlineImport,
  AiOutlineExport,
  AiOutlineCloudDownload,
} from "react-icons/ai";
//import FileUpload from "../components/UI/FileUpload";
import LoadingSpinner from "../../components/LoadingSpinner";
import FileExport from "../../components/UI/FileExport";
import Button from "../../components/UI/Button/Button";
import { useStateContext } from "../../contexts/ContextProvider";

function ScanHistory() {
  const { setTitle, setCategory } = useStateContext();
  const [data, setData] = useState([]);
  const [filterParam, setFilterParam] = useState("");
  const [showExport, setShowExport] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);
  // rest of component code
  useEffect(() => {
    fetch("http://20.193.146.8:8080/api/getallbatches")
      .then((response) => response.json())
      .then((data) => {
        setData(data.filter((item) => item.Record.route.includes("Storage")));
      })
      .catch((error) => console.error(error));
  }, []);

  // const filterData = displayedData.filter((item) =>
  //   item.Record.route.includes("S2")
  // );

  // console.log("data:" + filterData);
  //const recievedFilterData = filterData;

  const handleSearchChange = (event) => {
    setFilterParam(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("inside func");
    const filteruserData = data.filter(
      (item) =>
        (item && item.Key.includes(filterParam)) ||
        item.Record.route.includes(filterParam) ||
        item.Record.actualPath.includes(filterParam) ||
        item.Record.currentLocation.includes(filterParam)
    );
    setData(filteruserData);
  };
  //displayedData = filterData;

  //const userdata = filteruserData(filterData);
  //const pageSize = 10;
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const exportClick = () => {
    setShowExport(true);
  };

  setTitle("/Storage");
  setCategory("Scan History");

  function handleTableDataFromMyComponent(data) {
    console.log("Received data from MyComponent:", data);
    setDisplayedData(data);
    // Do something with the data here
  }

  function handleRawDataFromMyComponent(data) {
    console.log("Received data from MyComponent:", JSON.stringify(data));
    setData(data);
    // Do something with the data here
  }

  function closePopup() {
    setShowPopup(false);
    setShowExport(false);
  }

  console.log("TYPE OF DATA: " + typeof data);
  console.log("STATE DATA: " + JSON.stringify(data));

  return (
    <>
      <Header category="Page" title="WareHouse | Scan History" />
      {showExport && <FileExport data={data} onCloseRecieved={closePopup} />}
      <div className="rounded-lg">
        <div className="bg-white mt-2 flex justify-between ">
          <div>
            <form onSubmit={handleSearchSubmit}>
              <input
                placeholder="Search"
                className="w-52 h-8"
                value={filterParam}
                // onChange={(e) => setFilterParam(e.target.value)}
                onChange={handleSearchChange}
              />
              {/* <Button type="submit">Search</Button> */}
            </form>
          </div>
          <div className=" flex align-baseline m-4">
            <Button className="" onClick={exportClick}>
              {/* <p className="text-2xl">
                <AiOutlineExport />
              </p> */}
              Export
            </Button>
            {/* <button className="m-2">
              <p className="text-2xl">
                <BsFilterRight />
              </p>
            </button> */}
          </div>
        </div>
        <div class="overflow-hidden bg-white shadow-md">
          <table class=" min-h-[70vh] w-full border-collapse text-left text-sm text-gray-500">
            <thead class="bg-gray-50 border-t-1">
              <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  batchId
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  actualPath
                </th>
                {/* <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  batchId
                </th> */}
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  currentLocation
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  route
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  soldStatus
                </th>
                {/* <th
                  scope="col"
                  class="px-6 py-4 font-medium text-gray-900"
                ></th> */}
              </tr>
            </thead>
            {data != "" ? (
              <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                {displayedData.map((item) => (
                  <tr class="hover:bg-gray-50" key={item.id}>
                    <td class="px-6 py-1 font-medium text-gray-900">
                      {item.Key}
                    </td>
                    <td class="px-6 py-1font-medium text-gray-900">
                      {item.Record.actualPath}
                    </td>
                    {/* <td class="px-3 py-2">{item.Record.batchId}</td> */}
                    <td class="px-6 py-1 font-medium text-gray-900">
                      {item.Record.currentLocation}
                    </td>
                    <td class="px-6 py-1font-medium text-gray-900">
                      {item.Record.route[0]}-{item.Record.route[1]}-
                      {item.Record.route[2]}-{item.Record.route[3]}
                    </td>
                    <td class="px-6 py-1font-medium text-gray-900">
                      {item.Record.soldStatus.toString()}
                    </td>
                    {/* <td class="px-6 py-2">
                      <div class="flex justify-end gap-4">
                        <button x-data="{ tooltip: 'Delete' }">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="red"
                            class="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                        <button x-data="{ tooltip: 'Edite' }">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="green"
                            class="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            />
                          </svg>
                        </button>
                      </div>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            ) : (
              <div className="text-lg">
                <LoadingSpinner />
              </div>
            )}
          </table>
          <TablePagination
            data={data}
            // pageSize={pageSize}
            onDataReceived={handleTableDataFromMyComponent}
          />
        </div>
      </div>
    </>
  );
}
export default ScanHistory;
