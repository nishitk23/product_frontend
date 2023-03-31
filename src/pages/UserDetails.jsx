import React, {useState} from "react";
import { userData } from "../data/userData";
import Header from "../components/Header";
import TablePagination from "../components/UI/TablePagination";
import { AiOutlineImport, AiOutlineExport } from "react-icons/ai";
import FileUpload from "../components/UI/FileUpload";
import LoadingSpinner from "../components/LoadingSpinner";
import Navbar from "../components/Navbar";
import { useStateContext } from "../contexts/ContextProvider";
import FileExport from "../components/UI/FileExport";



// const url = 'https://honest-rabbits-juggle-103-86-0-98.loca.lt/api/data/product';

const UserDetails = () => {
  // const selectionsettings = { persistSelection: false };
  // const toolbarOptions = ["Delete","Update"];
  const { setTitle , setCategory } = useStateContext();
  const [data, setData] = React.useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [displayedData, setDisplayedData] = useState([]);
  
  setTitle('User Details Table')
  setCategory('Data')


  var pageSize = 10;

  const handleClick = () => {
    setShowPopup(true);
  };

  const exportClick = () =>{
    setShowExport(true);
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
  }

  console.log("TYPE OF DATA: " + typeof data);
  console.log("STATE DATA: " + JSON.stringify(data));




  //   React.useEffect(async () => {
  //     await fetch(url, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((d) => {
  //         const { response } = d;
  //         const resData = JSON.stringify(response)
  //           .slice(1, -1)
  //           .replace(/\\/g, "");
  //         // console.log("response data : " + resData)
  //         const dat = JSON.parse(resData).data
  //         console.log("DATA : " + JSON.stringify(dat[0]))
  //         setData(dat);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, [])

  // const routeItems = [
  //   { rName: 'R-1', rId: '1' },
  //   { rName: 'R-2', rId: '2' },
  //   { rName: 'R-3', rId: '3' }
  //   ];
  //   const routeParams = {
  //       params: {
  //           actionComplete: () => false,
  //           allowFiltering: true,
  //           dataSource: new DataManager(routeItems),
  //           fields: { text: "rName", value: "rName" },
  //           query: new Query()
  //       }
  //   };

  return (
    <>
      {/* {showPopup && (
        <FileUpload
          onDataReceived={handleRawDataFromMyComponent}
          onCloseRecieved={closePopup}
        />
      )}
      {showExport && (
        <FileExport
          data={displayedData}
          onCloseRecieved={closePopup}
        />
      )}
      <div className="m-2 rounded-lg">
        <div className="bg-white mt-3 flex justify-between ">
          <div>
            <input placeholder="Search" className="w-52 h-8" />
          </div>
          <div className=" flex align-baseline m-4">
            <button className="" onClick={handleClick}>
              <p className="text-2xl">
                <AiOutlineImport />
              </p>
            </button>
            <button className="" onClick={exportClick}>
              <p className="text-2xl">
                <AiOutlineExport />
              </p>
            </button>
            {/* <button className="m-2">
              <p className="text-2xl">
                <BsFilterRight />
              </p>
            </button> */}
          {/* </div>
        </div>
        <div class="overflow-hidden bg-white shadow-md">
          <table class=" min-h-[70vh] w-full border-collapse text-left text-sm text-gray-500">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Product ID
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Product Name
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Product Category
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Manufacturing Date
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  Manufacturing Location
                </th>
                <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                  MRP
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 font-medium text-gray-900"
                ></th>
              </tr>
            </thead>
            {data != "" ? (
              <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                {displayedData.map((product, index) => (
                  <tr class="hover:bg-gray-50" key={index}>
                    <td class="px-6 py-2">{product.productId}</td>
                    <td class="px-6 py-2">{product.productName}</td>
                    <td class="px-6 py-2">{product.productCategory}</td>
                    <td class="px-6 py-2">{product.manufacturingDate}</td>
                    <td class="px-6 py-2">{product.manufacturingLocation}</td>
                    <td class="px-6 py-2">{product.MRP}</td>
                    <td class="px-6 py-2">
                      <div class="flex justify-end gap-4">
                        <a x-data="{ tooltip: 'Delete' }" href="#">
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
                        </a>
                        <a x-data="{ tooltip: 'Edite' }" href="#">
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
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <div className="text-lg"></div>
            )}
          </table>
          <TablePagination
            data={data}
            pageSize={pageSize}
            onDataReceived={handleTableDataFromMyComponent}
          />
        </div>
      </div> */}
    </>
  );
};

export default UserDetails;
