import React from "react";
import Papa from "papaparse";
import { AiOutlineClose } from "react-icons/ai";
import { CiImport } from "react-icons/ci";
import Warning from "../Warning";
import Button from "./Button/Button";
import Header from "../../components/Header";

const FileUpload = (props) => {
  const [data, setData] = React.useState([]);
  const [file, setFile] = React.useState([]);
  const [showWarning, setShowWarning] = React.useState(false);

  const handleData = props.onDataReceived;
  const onClick = props.onCloseRecieved;

  // handleFileUpload that will be called when the user selects a file
  function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
      const fileContent = event.target.result;
      setFile(fileContent);

      // Call a function to process the file content
      const processedData = await processData(fileContent);

      // Update the state with the processed data
      setData(processedData);
      handleData(processedData);
    };

    if (/\.(json)$/i.test(file.name) || /\.(csv)$/i.test(file.name)) {
      console.log("File Selceted");
    } else {
      <Warning />;
    }

    reader.readAsText(file);
  }

  // processData that will be called when the file content is loaded
  async function processData(fileContent) {
    // Parse the file content as JSON or CSV
    const data = parseFile(fileContent);

    // Process the data as needed
    const processedData = await processFileData(data);

    // Return the processed data
    return processedData;
  }

  // parseFile function to parse the file content as JSON or CSV
  function parseFile(fileContent) {
    const parsedData = fileContent.startsWith("{")
      ? JSON.parse(fileContent)
      : Papa.parse(fileContent, { header: true }).data;

    return parsedData;
  }

  async function processFileData(data) {
    // Perform any processing on the data here
    // ...
    let dataArray = [];
    if (JSON.stringify(data).startsWith("{")) {
      dataArray = data.data;
    } else {
      dataArray = data;
    }

    // Simulate an asynchronous operation that takes some time
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Return the processed data
    return dataArray;
  }
  return (
    <div className="bg-white shadow-lg rounded-lg w-1/2 h-2/3 fixed top-[20%] left-[25%] z-[5]">
      <Header category="" title="Import File Here" />
      <button
        className="absolute top-0 right-0 p-4 text-xl hover:text-red-600 "
        onClick={onClick}
      >
        <AiOutlineClose />
      </button>
      <div className="flex flex-col justify-center m-12">
        <div className="flex justify-center text-7xl m-2">
          <CiImport />
        </div>
        {showWarning && (
          <div>
            <Warning content="Warning: .csv/.json file supported." />
          </div>
        )}
        <div className="flex justify-center m-2">
          <p>Upload Files</p>
        </div>
        <div className="flex justify-center m-2">
          <input type="file" onChange={handleFileUpload} />
        </div>
        <div>
          <p>{file.name}</p>
        </div>
        <div className="flex justify-center m-₹">
          <Button>Upload</Button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
