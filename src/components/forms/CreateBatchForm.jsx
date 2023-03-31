import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AiOutlineCloseCircle } from 'react-icons/ai';
import Button from '../UI/Button/Button';
// import { useStateContext } from '../../contexts/ContextProvider';
// import CreateBatch from '../../pages/CreateBatch';

const CreateBatchForm = () => {
  const route = ['Manufacturer', 'Storage-96', 'Distributor-15', 'Retailer-99'];
  console.log(route);
  // const handleClick = async() => {
  //   const jsondata = await CreateBatch(route);
  //   console.log(jsondata);
  // };

  // const navigate = useNavigate();
  // const handleClick = () => {
  //   console.log(route);
  //   navigate(`/newBatch?route=${route.toString()}`);
  // };

  return (
    <>
      <div>
        <h1 className="p-10 text-3xl">New Batch</h1>
      </div>
      <h1 className="pl-10">Select Route</h1>
      <div className="inline-flex items-center ml-10">
        <select className="border-l border-t border-b border-gray-200 rounded-l-md w-1/2 text-base md:text-lg px-80 py-3 mr-8">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <Button
          className="bg-orange-500 h-12 hover:bg-orange-600 hover:border-orange-600 text-white font-bold capitalize px-3 py-2 text-base md:text-lg rounded-r-md border-t border-r border-b border-orange-500"
          onClick={() => {}}
        >
          Create
        </Button>
      </div>
    </>
  );
};

export default CreateBatchForm;
