import React, { useState } from "react";
import Header from "../components/Header";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "../components/UI/Button/Button";
import { AiOutlineClose } from "react-icons/ai";

const AddBOD = (props) => {
  const { setTitle, setCategory } = useStateContext();
  const [formData, setFormData] = useState({
    pathID: "",
    startingPoint: "",
    endingPoint: "",
    transitType: "",
    avgTimeTaken: "",
    distance: "",
  });
  const onClick = props.onCloseRecieved;

  setTitle("/Add BOD");
  setCategory("Data");

  const apiUrl = "";

  // const handleInputChange  = (event) =>{
  //   setFormData( event.target.value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://20.193.146.8:8080/api/data/bodmaster",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setFormData({
          pathID: "",
          startingPoint: "",
          endingPoint: "",
          transitType: "",
          avgTimeTaken: "",
          distance: "",
        });
        alert("New BOD added successfully!");
      } else {
        throw new Error("Failed to add BOD");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to add BOD");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleCreateUserClick = () =>{
  //   // fetch(apiUrl,{
  //   //   method: "POST",
  //   //   headers: {
  //   //     Accept: "application/json",
  //   //     "Content-Type": "application/json",},
  //   //   body: JSON.stringify(formData)
  //   // })
  //   // .then((response) => response.json())
  //   // .then((d) =>{
  //   //   setuserId(d.userId);
  //   // // .catch(error => console.error(error));
  //   // console.log("Submit Data:"+formData);
  //   // console.log(d);
  //   // });
  //   alert("Click here")

  // };

  // const { firstName, lastName, email, password, phonenumber, confirmpass } =
  //   formData;

  // handleChange(event) {
  //     this.setState({value: event.target.value});
  //   }

  return (
    <>
      {/* <div className="bg-white shadow-lg rounded-lg w-1/2 h-3/3 fixed top-[10%] left-[25%] z-[5] text-center">
        <button
          className="absolute top-0 right-0 p-4 text-xl hover:text-red-600 "
          onClick={onClick}
        >
          <AiOutlineClose />
        </button> */}
      <div className="w-[80%] mx-auto p-4 rounded-lg shadow-lg bg-white my-2">
        <div class="grid grid-cols-1 gap-1 md:grid-cols-2 mt-8">
          <form onSubmit={handleSubmit}>
            <input
              class="w-[97%] bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="pathID"
              placeholder="Path ID*"
              value={formData.pathId}
              onChange={handleInputChange}
            />
            <input
              class="w-[97%] bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="startingPoint"
              placeholder="Starting Point*"
              value={formData.startingPoint}
              onChange={handleInputChange}
            />
            <input
              class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="endingPoint"
              placeholder="Ending Point*"
              value={formData.endingPoint}
              onChange={handleInputChange}
            />
            <input
              class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="transitType"
              placeholder="Transit Type*"
              value={formData.transitType}
              onChange={handleInputChange}
            />
            <input
              class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="avgTimeTaken"
              placeholder="Average Time Taken*"
              value={formData.avgTimeTaken}
              onChange={handleInputChange}
            />
            <input
              class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="distance"
              placeholder="Distance*"
              value={formData.distance}
              onChange={handleInputChange}
            />
            <div className="m-3">
              <Button type="submit">Add BOD</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBOD;
