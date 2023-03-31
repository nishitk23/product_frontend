/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
// import Header from "../components/Header";
import { AiOutlineImport, AiOutlineExport } from "react-icons/ai";
import TablePagination from "../../components/UI/TablePagination";
import AddProduct from "./AddProduct";
import LoadingSpinner from "../../components/LoadingSpinner";
// import Navbar from "../components/Navbar";
import { useStateContext } from "../../contexts/ContextProvider";
import Button from "../../components/UI/Button/Button";
import FileExport from "../../components/UI/FileExport";
import FileUpload from "../../components/UI/FileUpload";
import { NavLink } from "react-router-dom";

const URL = "http://20.193.146.8:8080/api/data/get/productmaster";

const Popupform = () => {
  const { setTitle, setCategory } = useStateContext();
  const [data, setData] = React.useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);
  const [filterParam, setFilterParam] = useState("");

  const filterData = () =>
    data.filter(
      (item) =>
        (item && item.Key?.includes(filterParam)) ||
        item.doc.productName.includes(filterParam) ||
        item.doc.productCategory.includes(filterParam) ||
        item.doc.manufacturingDate.includes(filterParam) ||
        item.doc.manufacturingLocation.includes(filterParam)
    );

  // const tableRef = useRef(null);

  // const { onDownload } = useDownloadExcel({
  //   currentTableRef: tableRef.current,
  //   filename: "Products table",
  //   sheet: "Products"
  // });

  // const fs = require('fs');

  //   // Format the data as a CSV string
  // const csvData = displayedData.map(row => Object.values(row).join(',')).join('\n');

  //   // Convert the data to a file
  //   fs.writeFile('data.csv', csvData, (err) => {
  //     if (err) throw err;

  //     // Serve the file to the user
  //     res.download('data.csv', (err) => {
  //       if (err) throw err;

  //     });
  //   });

  setTitle("Manufacturer");
  setCategory("Product Data");

  // React.useEffect(() => {
  // },[displayedData])

  const pageSize = 5;

  const handleClick = () => {
    setShowPopup(true);
  };

  const exportClick = () => {
    setShowExport(true);
  };

  const importClick = () => {
    setShowImport(true);
  };

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
    setShowImport(false);
  }

  console.log(`TYPE OF DATA: ${typeof data}`);
  console.log(`STATE DATA: ${JSON.stringify(data)}`);

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
    console.log(`DATA : ${JSON.stringify(data)}`);
  }, []);

  return (
    <>
      {showImport && (
        <FileUpload
          onDataReceived={handleRawDataFromMyComponent}
          onCloseRecieved={closePopup}
        />
      )}
      {/* {showPopup && (
        <AddProduct
          //onDataReceived={handleRawDataFromMyComponent}
          onCloseRecieved={closePopup}
        />
      )} */}
      {showExport && (
        <FileExport data={displayedData} onCloseRecieved={closePopup} />
      )}
      <div className="m-2 rounded-lg">
        <div className="bg-white mt-3 flex justify-between ">
          <div>
            <input
              placeholder="Search"
              className="w-52 h-8"
              onChange={(e) => setFilterParam(e.target.value)}
            />
          </div>
          <div className=" flex align-baseline m-4">
            <Button className="">
              <NavLink to={"/addProduct"}> Add Product</NavLink>
            </Button>
            <Button className="" onClick={importClick}>
              {/* <p className="text-2xl">
                <AiOutlineExport />
              </p> */}
              Import
            </Button>
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
        <div className="overflow-hidden bg-white shadow-md">
          <table className=" min-h-[70vh] w-full border-collapse text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                {/* <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Product ID
                </th> */}
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Product Name
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Product Category
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Manufacturing Date
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Manufacturing Location
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  MRP
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 font-medium text-gray-900"
                />
              </tr>
            </thead>
            {data != "" ? (
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {filterData().map((item) => (
                  <tr className="hover:bg-gray-50" key={item.id}>
                    {/* <td className="px-6 py-2">{item.doc.productId}</td> */}
                    <td className="px-6 py-2">{item.doc.productName}</td>
                    <td className="px-6 py-2">{item.doc.productCategory}</td>
                    <td className="px-6 py-2">{item.doc.manufacturingDate}</td>
                    <td className="px-6 py-2">
                      {item.doc.manufacturingLocation}
                    </td>
                    <td className="px-6 py-2">{item.doc.price}</td>
                    {/* <td className="px-6 py-2">
                      <div className="flex justify-end gap-4">
                        <a x-data="{ tooltip: 'Delete' }" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="red"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </a>
                        <a x-data="{ tooltip: 'Edite' }" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="green"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>*/}
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
            pageSize={pageSize}
            onDataReceived={handleTableDataFromMyComponent}
          />
        </div>
      </div>
    </>
  );
};

export default Popupform;
