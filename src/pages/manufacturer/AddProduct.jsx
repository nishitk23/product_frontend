import React, { useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/UI/Button/Button";
import { AiOutlineClose } from "react-icons/ai";
import { useStateContext } from "../../contexts/ContextProvider";
//import Warning from "../../Warning";
const AddProduct = (props) => {
  const { setTitle, setCategory } = useStateContext();
  useState(false);
  // const [formData, setFormData] = useState({
  //   productID: "",
  //   productName: "",
  //   productCategory: "",
  //   manufacturingDate: "",
  //   manufacturingLocation: "",
  //   price: "",
  // });

  const onClick = props.onCloseRecieved;

  setTitle("/Add Product");
  setCategory("Manufacturer");

  // // const apiUrl = "";

  // // const handleInputChange = (event) => {
  // //   setFormData(event.target.value);
  // // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch(
  //       "http://20.193.146.8:8080/api/data/productmaster",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );
  //     if (response.ok) {
  //       setFormData({
  //         productID: "",
  //         productName: "",
  //         productCategory: "",
  //         manufacturingDate: "",
  //         manufacturingLocation: "",
  //         price: "",
  //       });
  //       alert("New Location added successfully!");
  //     } else {
  //       throw new Error("Failed to add location");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert("Failed to add location");
  //   }
  // };

  // const handleInputChange = (event) => {
  //   // const { name, value } = event.target;
  //   // setFormData({
  //   //   ...formData,
  //   //   [name]: value,
  //   // });
  //   setFormData(event.target.value);
  // };

  // const handleCreateUserClick = () => {
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
  //   alert("Click here");
  // };

  // const { firstName, lastName, email, password, phonenumber, confirmpass } =
  //   formData;

  // handleChange(event) {
  //     this.setState({value: event.target.value});
  //   }
  //const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    manufacturingDate: "",
    manufacturingLocation: "",
    price: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "http://20.193.146.8:8080/api/data/productmaster",
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
          productName: "",
          productCategory: "",
          manufacturingDate: "",
          manufacturingLocation: "",
          price: "",
        });
        alert("Product added successfully!");
      } else {
        throw new Error("Failed to add product");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      {/* <Header category="Page" title="Manufacturer |Add Product" /> */}
      <div className="bg-white shadow-lg rounded-lg w-1/2 h-2/3 fixed top-[10%] left-[25%] z-[5] text-center ">
        <button
          className="absolute top-0 right-0 p-2 text-xl hover:text-red-600 "
          onClick={onClick}
        >
          <AiOutlineClose />
        </button>
        <div className="w-[90%]  mx-3 p-2 bg-white m-2  rounded-lg relative top-5">
          <form onSubmit={handleSubmit}>
            <input
              className="w-full bg-gray-100 text-gray-900 m-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              placeholder="Product Name*"
            />

            <input
              className="w-full bg-gray-100 text-gray-900 m-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="productCategory"
              value={formData.productCategory}
              onChange={handleInputChange}
              placeholder="Product Category*"
            />
            <input
              className="w-full bg-gray-100  m-3 p-3 rounded-lg focus:outline-none focus:shadow-outline text-zinc-400"
              type="text"
              name="manufacturingDate"
              value={formData.manufacturingDate}
              onChange={handleInputChange}
              placeholder=" Manufacturing Date*"
              //onfocus="(this.type='date')
            />
            <input
              className="w-full bg-gray-100 text-gray-900 m-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="manufacturingLocation"
              value={formData.manufacturingLocation}
              onChange={handleInputChange}
              placeholder="Manufacturing Location*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 m-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Price*"
            />
            <div className="w-[100%]  mx-2 p-2 bg-white m-2  rounded-lg relative">
              <Button type="submit">Add Product</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
