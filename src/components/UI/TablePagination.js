import React, { useState, useEffect } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const TablePagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [displayedData, setDisplayedData] = useState([]);
  // Update pageSizeOptions to customize available options for user
  const [pageSizeOptions, setPageSizeOptions] = useState([5, 10, 25]);
  // Update pageSize to control number of rows displayed on each page
  const [pageSize, setPageSize] = useState(pageSizeOptions[0]);

  const { data } = props;
  // const newData = data.slice(
  //   (currentPage - 1) * pageSize,
  //   currentPage * pageSize
  // );
  const handleData = props.onDataReceived;

  const handleChange = (event) => {
    setPageSize(event.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    //console.log("DATAA  PAGINATION : " + JSON.stringify(displayedData[0]));
    setTotalPages(Math.ceil(data.length / pageSize));
    setDisplayedData(
      data.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    );
  }, [data, currentPage, pageSize]);

  handleData(displayedData);

  const handlePageChange_next = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      const newData = data.slice(
        currentPage * pageSize,
        (currentPage + 1) * pageSize
      );
      setDisplayedData(newData);
      handleData(newData);
    }
  };

  const handlePageChange_prev = () => {
    if (currentPage >= 2) {
      setCurrentPage(currentPage - 1);
      const newData = data.slice(
        (currentPage - 2) * pageSize,
        (currentPage - 1) * pageSize
      );
      setDisplayedData(newData);
      handleData(newData);
    }
  };

  return (
    <div className="p-4 text-md flex content-center border-b-1 justify-between bg-white">
      <div>
        <label>Rows per page: </label>
        <select onChange={handleChange}>
          {pageSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div className="inline-flex ">
        <div>
          {currentPage} to {pageSize} of {totalPages}
        </div>
        <button onClick={handlePageChange_prev} className="px-4 text-red-400">
          <GrFormPrevious />
        </button>
        <button onClick={handlePageChange_next} className="px-4 text-red-400">
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
