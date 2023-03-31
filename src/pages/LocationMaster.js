import React, { useState } from "react";
import Header from "../components/Header";
import TablePagination from "../components/UI/TablePagination";
import { AiOutlineImport, AiOutlineExport } from "react-icons/ai";
import FileUpload from "../components/UI/FileUpload";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import { useStateContext } from "../contexts/ContextProvider";
import FileExport from "../components/UI/FileExport";
import { MdDoubleArrow } from "react-icons/md";
import { NavLink } from "react-router-dom";
import ExportIcon from "../data/image/share.png";
import Button from "../components/UI/Button/Button";
import ADDLOCATION from "../pages/AddLocation";

const URL = "http://20.193.146.8:8080/api/data/get/locationmaster";

const LocationMaster = () => {
  const { setTitle, setCategory } = useStateContext();
  const [data, setData] = React.useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [filterParam, setFilterParam] = useState("");

  setTitle("/Location Master");
  setCategory("Data");
 

  // React.useEffect(() => {
  // },[displayedData])

  // var pageSize = 10;

  const handleClick = () => {
    setShowPopup(true);
  };

  const exportClick = () => {
    setShowExport(true);
  };


  const openModal = () => {
    //console.log("Open POPUP");
    setModalIsOpen(true);
  };

  // const closeModal = () => {
  //   //console.log("close POPUP");
  //   setModalIsOpen(false);
  // };

  const handleDelete = (item) => {
    const d = [...data];
    d.splice(item, 1);
    setData(d);
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

  const closePopup = () => {
    setShowPopup(false);
    setShowExport(false);
    setModalIsOpen(false);
  };

  console.log("TYPE OF DATA: " + typeof data);
  console.log("STATE DATA: " + JSON.stringify(data));

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


   const handleSearchChange = (event) => {
    setFilterParam(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Here you can perform the search logic based on the searchTerm
    // and update the searchResults state accordingly.
    // For simplicity, let's assume that we have a list of items like this:
    console.log("inside func");
    const results = data.filter(
          (item) =>
            (item && item.Key?.includes(filterParam)) ||
            item.doc.locationType.includes(filterParam) ||
            item.doc.locationName.includes(filterParam) ||
            item.doc.city.includes(filterParam) ||
            item.doc.state.includes(filterParam) ||
            item.doc.country.includes(filterParam) ||
            item.doc.streetAddress.includes(filterParam) ||
            item.doc.storageCapacity.includes(filterParam)
        );
    setData(results);
  };

  // const filterData = (data) =>
  //   data.filter(
  //     (item) =>
  //       (item && item.Key?.includes(filterParam)) ||
  //       item.doc.locationType.includes(filterParam) ||
  //       item.doc.city.includes(filterParam) ||
  //       item.doc.state.includes(filterParam) ||
  //       item.doc.country.includes(filterParam) ||
  //       item.doc.streetAddress.includes(filterParam) ||
  //       item.doc.storageCapacity.includes(filterParam)
  //   );

  // const receivedfilterData = filterData(displayedData);

  return (
    <>
      {showPopup && (
        <FileUpload
          onDataReceived={handleRawDataFromMyComponent}
          onCloseRecieved={closePopup}
        />
      )}
      {showExport && (
        <FileExport 
          data={displayedData} 
          onCloseRecieved={closePopup} 
          filename={"Excel Export"}
        />
      )}
      {modalIsOpen && (
        <ADDLOCATION 
          onCloseRecieved={closePopup}
        />
      )}
      <div className="m-2 rounded-lg">
        {/* <div className="flex justify-between p-4 bg-white rounded-lg">
          <div className="flex items-center text-xl">
            <h5>
              Add New Location (Location Name, Location Type, Street Address,
              City, State, Country, Storage Capacity, Status)
            </h5>
          </div>
          <div className="flex items-center text-4xl">
            <NavLink to={"/addLocation"}>
              <MdDoubleArrow />
            </NavLink>
          </div>
        </div> */}
        <div className="bg-white mt-3 flex justify-between ">
          <div>
            <form onSubmit={handleSearchSubmit}>
              <input
                placeholder="Search"
                className="w-52 h-8"
                value={filterParam}
                onChange={handleSearchChange}
                //onChange={(e) => setFilterParam(e.target.value)}
              />
            </form>
          </div>
          <div className=" flex align-baseline m-4">
            <Button>
              <NavLink to={"/addLocation"}>
                Add location
              </NavLink>
            </Button>
            <Button onClick={handleClick}>
              {/* <p className="text-2xl">
                <AiOutlineImport />
              </p> */}
              Import
            </Button>
            <Button onClick={exportClick}>
              {/* <ExportIcon /> */}
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
            <thead class="bg-gray-50">
              <tr>
                {/* <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Location ID
                </th> */}
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Location Name
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Location Type
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Street Address
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  City
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  State
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Country
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Storage Capacity
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Status
                </th>
              </tr>
            </thead>
            {data != "" ? (
              <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                {displayedData.map((item) => (
                  <tr class="hover:bg-gray-50" key={item.id}>
                    {/* <td class="px-6 py-2">{item.id}</td> */}
                    <td class="px-6 py-2">{item.doc.locationName}</td>
                    <td class="px-6 py-2">{item.doc.locationType}</td>
                    <td class="px-6 py-2">{item.doc.streetAddress}</td>
                    <td class="px-6 py-2">{item.doc.city}</td>
                    <td class="px-6 py-2">{item.doc.state}</td>
                    <td class="px-6 py-2">{item.doc.country}</td>
                    <td class="px-6 py-2">{item.doc.storageCapacity}</td>
                    <td class="px-6 py-2">{item.doc.status}</td>
                    <td class="px-6 py-2">
                      <div class="flex justify-end gap-4">
                        <button
                          x-data="{ tooltip: 'Delete' }"
                          onClick={() => handleDelete(item)}
                        >
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
                        {/* <button x-data="{ tooltip: 'Edite' }" href="#">
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
                        </button> */}
                      </div>
                    </td>
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
};

export default LocationMaster;


// import React, { useState } from "react";
// import Header from "../components/Header";
// import TablePagination from "../components/UI/TablePagination";
// import { AiOutlineImport, AiOutlineExport } from "react-icons/ai";
// import FileUpload from "../components/UI/FileUpload";
// import LoadingSpinner from "../components/LoadingSpinner";
// import Navbar from "../components/Navbar";
// import { useStateContext } from "../contexts/ContextProvider";
// import FileExport from "../components/UI/FileExport";
// import { MdDoubleArrow } from "react-icons/md";
// import { NavLink } from "react-router-dom";
// import ExportIcon from "../data/image/share.png";
// import Button from "../components/UI/Button/Button";
// import ADDLOCATION from "../pages/AddLocation";

// const URL = "http://20.193.146.8:8080/api/data/get/locationmaster";

// const LocationMaster = () => {
//   const { setTitle, setCategory } = useStateContext();
//   const [data, setData] = React.useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const [showExport, setShowExport] = useState(false);
//   const [displayedData, setDisplayedData] = useState([]);
//   const [modalIsOpen, setIsOpen] = useState(false);
//   const [filterParam, setFilterParam] = useState("");

//   setTitle("/Location Master");
//   setCategory("Data");
//   // const filterData = () =>
//   //   data.filter(
//   //     (item) =>
//   //       (item && item.Key?.includes(filterParam)) ||
//   //       item.doc.locationType.includes(filterParam) ||
//   //       item.doc.city.includes(filterParam) ||
//   //       item.doc.state.includes(filterParam) ||
//   //       item.doc.country.includes(filterParam) ||
//   //       item.doc.streetAddress.includes(filterParam) ||
//   //       item.doc.storageCapacity.includes(filterParam)
//   //   );

//   // React.useEffect(() => {
//   // },[displayedData])

//   // var pageSize = 10;

//   const handleClick = () => {
//     setShowPopup(true);
//   };

//   const exportClick = () => {
//     setShowExport(true);
//   };

//   function closeModal() {
//     console.log("close POPUP");
//     setIsOpen(false);
//   }

//   function openModal() {
//     console.log("Open POPUP");
//     setIsOpen(true);
//   }

//   const handleDelete = (item) => {
//     const d = [...data];
//     d.splice(item, 1);
//     setData(d);
//   };

//   function handleTableDataFromMyComponent(data) {
//     console.log("Received data from MyComponent:", data);
//     setDisplayedData(data);
//     // Do something with the data here
//   }

//   function handleRawDataFromMyComponent(data) {
//     console.log("Received data from MyComponent:", JSON.stringify(data));
//     setData(data);
//     // Do something with the data here
//   }

//   function closePopup() {
//     setShowPopup(false);
//     setShowExport(false);
//   }

//   console.log("TYPE OF DATA: " + typeof data);
//   console.log("STATE DATA: " + JSON.stringify(data));

//   React.useEffect(() => {
//     fetch(URL, {
//       headers: {
//         "content-type": "application/json",
//         Accept: "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       });
//     console.log("DATA : " + JSON.stringify(data));
//   }, []);


//   const filterData = (data) =>
//     data.filter(
//       (item) =>
//         (item && item.Key?.includes(filterParam)) ||
//         item.doc.locationType.includes(filterParam) ||
//         item.doc.city.includes(filterParam) ||
//         item.doc.state.includes(filterParam) ||
//         item.doc.country.includes(filterParam) ||
//         item.doc.streetAddress.includes(filterParam) ||
//         item.doc.storageCapacity.includes(filterParam)
//     );


//   const receivedFilterData = filterData(displayedData);

//   return (
//     <>
//       {showPopup && (
//         <FileUpload
//           onDataReceived={handleRawDataFromMyComponent}
//           onCloseRecieved={closePopup}
//         />
//       )}
//       {showExport && (
//         <FileExport data={displayedData} onCloseRecieved={closePopup} />
//       )}
//       {modalIsOpen && <ADDLOCATION closemodal={closeModal} />}
//       <div className="m-2 rounded-lg">
//         {/* <div className="flex justify-between p-4 bg-white rounded-lg">
//           <div className="flex items-center text-xl">
//             <h5>
//               Add New Location (Location Name, Location Type, Street Address,
//               City, State, Country, Storage Capacity, Status)
//             </h5>
//           </div>
//           <div className="flex items-center text-4xl">
//             <NavLink to={"/addLocation"}>
//               <MdDoubleArrow />
//             </NavLink>
//           </div>
//         </div> */}
//         <div className="bg-white mt-3 flex justify-between ">
//           <div>
//             <input
//               placeholder="Search"
//               className="w-52 h-8"
//               onChange={(e) => setFilterParam(e.target.value)}
//             />
//           </div>
//           <div className=" flex align-baseline m-4">
//             <Button className="" onClick={openModal}>
//               Add location
//             </Button>
//             <Button className="" onClick={handleClick}>
//               {/* <p className="text-2xl">
//                 <AiOutlineImport />
//               </p> */}
//               Import
//             </Button>
//             <Button className="" onClick={exportClick}>
//               {/* <ExportIcon /> */}
//               Export
//             </Button>
//             {/* <button className="m-2">
//               <p className="text-2xl">
//                 <BsFilterRight />
//               </p>
//             </button> */}
//           </div>
//         </div>
//         <div class="overflow-hidden bg-white shadow-md">
//           <table class=" min-h-[70vh] w-full border-collapse text-left text-sm text-gray-500">
//             <thead class="bg-gray-50">
//               <tr>
//                 {/* <th scope="col" class="px-6 py-4 font-medium text-gray-900">
//                   Location ID
//                 </th> */}
//                 <th scope="col" class="px-6 py-4 font-medium text-gray-900">
//                   Location Name
//                 </th>
//                 <th scope="col" class="px-6 py-4 font-medium text-gray-900">
//                   Location Type
//                 </th>
//                 <th scope="col" class="px-6 py-4 font-medium text-gray-900">
//                   Street Address
//                 </th>
//                 <th scope="col" class="px-6 py-4 font-medium text-gray-900">
//                   City
//                 </th>
//                 <th scope="col" class="px-6 py-4 font-medium text-gray-900">
//                   State
//                 </th>
//                 <th scope="col" class="px-6 py-4 font-medium text-gray-900">
//                   Country
//                 </th>
//                 <th scope="col" class="px-6 py-4 font-medium text-gray-900">
//                   Storage Capacity
//                 </th>
//                 <th scope="col" class="px-6 py-4 font-medium text-gray-900">
//                   Status
//                 </th>
//               </tr>
//             </thead>
//             {data != "" ? (
//               <tbody class="divide-y divide-gray-100 border-t border-gray-100">
//                 {receivedFilterData.map((item) => (
//                   <tr class="hover:bg-gray-50" key={item.id}>
//                     {/* <td class="px-6 py-2">{item.id}</td> */}
//                     <td class="px-6 py-2">{item.doc.locationName}</td>
//                     <td class="px-6 py-2">{item.doc.locationType}</td>
//                     <td class="px-6 py-2">{item.doc.streetAddress}</td>
//                     <td class="px-6 py-2">{item.doc.city}</td>
//                     <td class="px-6 py-2">{item.doc.state}</td>
//                     <td class="px-6 py-2">{item.doc.country}</td>
//                     <td class="px-6 py-2">{item.doc.storageCapacity}</td>
//                     <td class="px-6 py-2">{item.doc.status}</td>
//                     <td class="px-6 py-2">
//                       <div class="flex justify-end gap-4">
//                         <button
//                           x-data="{ tooltip: 'Delete' }"
//                           onClick={() => handleDelete(item)}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke-width="1.5"
//                             stroke="red"
//                             class="h-6 w-6"
//                             x-tooltip="tooltip"
//                           >
//                             <path
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                             />
//                           </svg>
//                         </button>
//                         {/* <button x-data="{ tooltip: 'Edite' }" href="#">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke-width="1.5"
//                             stroke="green"
//                             class="h-6 w-6"
//                             x-tooltip="tooltip"
//                           >
//                             <path
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
//                             />
//                           </svg>
//                         </button> */}
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             ) : (
//               <div className="text-lg">
//                 <LoadingSpinner />
//               </div>
//             )}
//           </table>
//           <TablePagination
//             data={data}
//             // pageSize={pageSize}
//             onDataReceived={handleTableDataFromMyComponent}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default LocationMaster;
