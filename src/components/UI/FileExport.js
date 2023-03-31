import React from "react";
import { CSVLink } from "react-csv";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button/Button";
import Header from "../../components/Header";
//import XLSX from 'xlsx';
const XLSX = require("xlsx");
import { saveAs } from "file-saver";

const FileExport = (props) => {
  // const [selectedOption, setSelectedOption] = useState(null);
  console.log("Props Data: " + props.data);
  const data = props.data;
  const onClick = props.onCloseRecieved;

  console.log("Inside Export data: " + data);

  const csvData = data
    .map((row) => {
      const flatRow = {};
      flatten(row, flatRow);
      return Object.values(flatRow).join(",");
    })
    .join("\n");

  function flatten(obj, flatObj, prefix = "") {
    for (let key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        flatten(obj[key], flatObj, prefix + key + ".");
      } else {
        flatObj[prefix + key] = obj[key];
      }
    }
  }

  console.log("csvData ::" + csvData);

  function exportToExcel() {
    console.log("exportExcel:" + data);
    const worksheet = XLSX.utils.json_to_sheet(
      data.map((item) => {
        const flatRow = {};
        flatten(item, flatRow);
        return flatRow;
      })
    );
    const workbook = XLSX.utils.book_new();
    //const sheetrr= flatten(worksheet, flatRow);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    // XLSX.writeFileXLSX(workbook,"MYTABLE.xlsx");
    const fileBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const file = new Blob([fileBuffer], { type: "application/octet-stream" });
    saveAs(file, "MYDATA.xlsx");
    // saveAs(new Blob([s2ab(file)], { type: 'application/octet-stream' }), 'MyTable.xlsx');
  }

  // function s2ab(s) {
  //   const buf = new ArrayBuffer(s.length);
  //   const view = new Uint8Array(buf);
  //   for (let i = 0; i < s.length; ++i) {
  //     view[i] = s.charCodeAt(i) & 0xFF;
  //   }
  //   return buf;
  // }

  return (
    <div className="bg-white shadow-lg rounded-lg w-1/2 h-2/3 fixed top-[20%] left-[25%] z-[5]">
      <Header category="" title="Export File Here" />
      <button
        className="absolute top-0 right-0 p-4 text-xl hover:text-red-600 "
        onClick={onClick}
      >
        <AiOutlineClose />
      </button>
      <div className="flex flex-col justify-center m-12">
        <div className="flex justify-between m-2">
          <CSVLink data={csvData}>
            <Button>CSV</Button>
          </CSVLink>
          {/* <DownloadTableExcel
            filename="data table"
            sheet="data"
            currentTableRef={data.current}
          > */}
          <Button onClick={exportToExcel}>Excel</Button>
          {/* </DownloadTableExcel> */}
        </div>
        {/* <div className="flex justify-center m-₹">
                    <Button>Upload</Button>
                </div> */}
      </div>
    </div>
  );
};

export default FileExport;
