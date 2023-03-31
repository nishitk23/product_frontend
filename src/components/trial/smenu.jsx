import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// const menuItemAnimation = {
//   hidden: (i) => ({
//     padding: 0,
//     x: "-100%",
//     transition: {
//       duration: (i + 1) * 0.1,
//     },
//   }),
//   show: (i) => ({
//     x: 0,
//     transition: {
//       duration: (i + 1) * 0.1,
//     },
//   }),
// };

const SidebarMenu = (route) => {


  return (
    <>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu_item">
          <div className="icon">{route.icon}</div>
            {isOpen && (
              <div
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link_text"
              >
                {route.name}
              </div>
            )}
        </div>
        {isOpen && (
          <div
          >
            <FaAngleDown />
          </div>
        )}
      </div>{" "}
        {isMenuOpen && (
          <div
            variants={menuAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menu_container"
          >
            {route.subRoutes.map((subRoute, i) => (
              <div variants={menuItemAnimation} key={i} custom={i}>
                <NavLink to={subRoute.path} className="link">
                  <div className="icon">{subRoute.icon}</div>
                  <motion.div className="link_text">{subRoute.name}</motion.div>
                </NavLink>
              </div>
            ))}
          </div>
        )}{" "}
    </>
  );
};

export default SidebarMenu;
