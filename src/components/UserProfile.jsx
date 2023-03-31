import React, {useContext} from "react";
import { MdOutlineCancel } from "react-icons/md";

import Btn from "./Btn";
import Button from "./UI/Button/Button";
import { userProfileData } from "../data/dummy";
import avatar from "../data/image/avatar.jpg";
import { AuthContext } from "../contexts/auth-context";


const UserProfile = (props) => {
  const { logout } = useContext(AuthContext);
  const clickClose = props.close;

  return (
    <div className="nav-item absolute right-4 top-16 bg-white dark:bg-[#42464D] p-4 rounded-lg w-80 z-50 shadow-lg shadow-gray">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Btn
          className="text-[rgb(153, 171, 180)] hover:bg-light-gray text-2xl rounded-full"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
          icon={<MdOutlineCancel onClick={clickClose}/>}
          // onClick={clickClose}
        />
      </div>
      <div className="flex gap-5 items-center pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {" "}
            Michael Roberts{" "}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {" "}
            Administrator{" "}
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            {" "}
            info@shop.com{" "}
          </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>
            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        <Button
          onClick={logout}
          className="w-72"
        >Logout</Button>
      </div>
    </div>
  );
};

export default UserProfile;
