import React, { useState, useEffect } from "react";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/image/avatar.jpg";
import Notification from "../components/Notification";
import UserProfile from "../components/UserProfile";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <div content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </div>
);

// const handleHeaderFromMyComponent = ({ category, title }) => (
//   console.log(category, title)
// );

const Navbar = (props) => {
  const { title, category } = useStateContext();
  const [showProfile, setShowProfile] = useState(false);

  const { handleClick, isClicked } = useStateContext();

  const closeProfile = () => {
    setShowProfile(false);
  };

  const openProfile = () => {
      setShowProfile(true);
  };


  return (
    <div className="flex justify-between w-full bg-navbar-bg rounded-lg ">
      <div className="px-2">
        <p className="text-md text-gray-400">{category}</p>
        <p className="text-lg font-extrabold tracking-tight text-[#0B2853]">
          {title}
        </p>
      </div>
      <div className="flex pr-2">
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification")}
          color="#2e86ab"
          icon={<RiNotification3Line />}
        />
        <div content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            //onClick={handleClick}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>
              <span className="text-stone-600 text-14">Hi,</span>{" "}
              <span className="text-stone-600 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown 
              className="text-gray-400 text-14"  
              onClick={openProfile}
            />
          </div>
        </div>

        {isClicked.notification && <Notification />}
        {showProfile && (
          <UserProfile
            close = {closeProfile}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
