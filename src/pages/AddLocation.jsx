import React, { useState } from "react";
import Header from "../components/Header";
import { useStateContext } from "../contexts/ContextProvider";
import Button from "../components/UI/Button/Button";
import { AiOutlineClose } from "react-icons/ai";

const AddLocation = (props) => {
  const { setTitle, setCategory } = useStateContext();
  const [formData, setFormData] = useState({
    locationName: "",
    locationType: "",
    streetAddress: "",
    city: "",
    country: "",
    state: "",
    storageCapacity: "",
    status: "",
  });

  setTitle("/Add Location");
  setCategory("Data");

  const onClick = props.onCloseRecieved;

  const apiUrl = "";

  // const handleInputChange  = (event) =>{
  //   setFormData( event.target.value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://20.193.146.8:8080/api/data/locationmaster",
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
          locationName: "",
          locationType: "",
          streetAddress: "",
          city: "",
          country: "",
          state: "",
          storageCapacity: "",
          status: "",
        });
        alert("New Location added successfully!");
      } else {
        throw new Error("Failed to add location");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to add location");
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
      {/* <div class="w-[80%] mx-auto p-4 rounded-lg shadow-lg bg-white my-2 ">
        <div class="grid grid-cols-2 gap-1 md:grid-cols-2 mt-8">
          <form onSubmit={handleSubmit}>
          <input
            class="w-[95%] bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Location Name*"
            value={formData.locationName}
            onChange={handleInputChange }
          />
          <input
            class="w-[95%] bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Location Type*"
            value={formData.locationType}
            onChange={handleInputChange }
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Street Address*"
            value={formData.streetAddress}
            onChange={handleInputChange }
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="City*"
            value={formData.city}
            onChange={handleInputChange }
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="State*"
            value={formData.state}
            onChange={handleInputChange }
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Country*"
            value={formData.country}
            onChange={handleInputChange }
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Storage Capacity*"
            value={formData.storagecapacity}
            onChange={handleInputChange }
          />
          <input
            class="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Status*"
            value={formData.status}
            onChange={handleInputChange }
          />

           <select class="w-full left-0.5 relative bg-gray-100 text-gray-900 my-1 mx-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          // value={formData}
          onChange={handleInputChange }
          >
            <option value={formData.manufacturer}>Manufacturer</option>
            <option value={formData.warehouse}>Warehouse</option>
            <option value={formData.distributor}>Distributor</option>
            <option value={formData.retailer}>Retailer</option>
          </select> 
          </form>
        </div>

        <div className="m-3">
          <Button onClick={() => handleCreateUserClick} >Add Location</Button>
        </div>
      </div> */}
      {/* <div className="bg-white shadow-lg rounded-lg w-1/2 h-3/3 fixed top-[5%] left-[25%] z-[5] text-center"> */}
        {/* <button
          className="absolute top-0 right-0 p-4 text-xl hover:text-red-600 "
          onClick={onClick}
        >
          <AiOutlineClose />
        </button> */}
        <div className="w-[80%] mx-auto p-4 rounded-lg shadow-lg bg-white my-2">
        <div class="grid grid-cols-1 gap-1 md:grid-cols-2 mt-8">
          <form onSubmit={handleSubmit}>
            <input
              class="w-[97%] bg-gray-100 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="locationName"
              placeholder="Location Name*"
              value={formData.locationName}
              onChange={handleInputChange}
            />
            <input
              class="w-[97%] bg-gray-100 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="locationType"
              placeholder="Location Type*"
              value={formData.locationType}
              onChange={handleInputChange}
            />
            <input
              class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="streetAddress"
              placeholder="Street Address*"
              value={formData.streetAddress}
              onChange={handleInputChange}
            />
            <input
              class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="city"
              placeholder="City*"
              value={formData.city}
              onChange={handleInputChange}
            />
            <input
              class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="state"
              placeholder="State*"
              value={formData.state}
              onChange={handleInputChange}
            />
            <input
              class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="country"
              placeholder="Country*"
              value={formData.country}
              onChange={handleInputChange}
            />
            <input
              class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="storageCapacity"
              placeholder="Storage Capacity*"
              value={formData.storageCapacity}
              onChange={handleInputChange}
            />
            <input
              class="w-[97%] bg-gray-100 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="status"
              placeholder="Status*"
              value={formData.status}
              onChange={handleInputChange}
            />

            <div className="m-2">
              <Button type="submit">Add Location</Button>
            </div>
          </form>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default AddLocation;
