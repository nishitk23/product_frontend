import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { chatData } from "../data/link";
import Btn from "./Btn";

const Notification = () => {
  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white p-4 rounded-lg w-80 z-50 shadow-lg shadow-gray">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">
            Notifications
          </p>
          <Btn
            type="button"
            className="text-white text-xs rounded p-1 px-2 bg-orange-theme "
          />{" "}
          5 New
        </div>
        <Btn
          className="text-[rgb(153, 171, 180)] hover:bg-light-gray text-2xl rounded-full"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
          icon={<MdOutlineCancel />}
        />
      </div>
      <div className="mt-2 ">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center leading-8 gap-3 border-b-1 border-color p-2"
          >
            <img
              className="rounded-full h-10 w-10"
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
        <div className=" flex justify-center mt-5 bg-[#386a9e] hover:bg-[#346daa] text-white rounded">
          <Btn
            className="text-white rounded p-2"
            text="See all notifications"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
