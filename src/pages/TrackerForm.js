import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";

const URL = "http://20.193.146.8:8080/api/getallbatches";
const WAIT_TIME = 2000;

const TrackerForm = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const id = setInterval(() => {
      fetch(URL, {
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((res) => {
          setData(res);
        });
      console.log("DATA : " + data[1].Key);
    }, WAIT_TIME);

    return () => clearInterval(id);
  }, []);


  return (
    <>
      <Header category="Page" title="Batch List" />
      <section>
        <div className="m-12">
          <h1 className="py-2 font-semibold text-lg">Select Batch</h1>
          {data ? (
            <div className=" inline-grid bg-white rounded-md">
              {data.map((item) => (
                <NavLink
                  
                to={`/prodTracker/${item.Key}`}
                  key={item.Key}
                  className="hover:bg-hover-bg hover:rounded-sm p-2"
                  
                >
                  {item.Key}
                </NavLink>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    </>
  );
};

export default TrackerForm;
