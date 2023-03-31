import { NavLink } from "react-router-dom";

import { useStateContext } from "../contexts/ContextProvider";

const menuAnimation = {
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};
const menuItemAnimation = {
  hidden: (i) => ({
    padding: 0,
    x: "-100%",
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
  show: (i) => ({
    x: 0,
    transition: {
      duration: (i + 1) * 0.1,
    },
  }),
};

const SidebarMenu = ({ route, showAnimation, isOpen, setIsOpen }) => {
  const activeLink =
    "flex items-center gap-1 p-2 rounded-lg text-black font-semibold text-md m-2 bg-active-bg";
  const normalLink =
    "flex items-center gap-1 p-2 rounded-lg text-md font-semibold text-white dark:text-gray-200 hover:text-[#7b8cb8] m-2";

  const {
    activeMenu,
    setActiveMenu,
    screenSize,
    handleMouseOver,
    handleMouseOut,
    isHovering,
    isMenuOpen,
    setIsMenuOpen,
    toggleMenu,
    handleMouseEnter,
    handleMouseLeave,
  } = useStateContext();

  return (
    <>
      <div
        className={normalLink}
        onMouseOver={handleMouseEnter}
        onMouseOut={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
          onClick={toggleMenu}
        >
          <div
            style={{
              fontSize: "1.5rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {route.icon}
          </div>
          <div className="capitalize flex justify-center text-xs">
            {route.name}
          </div>
        </div>
      </div>{" "}
      {isHovering && (
        <div
          variants={menuAnimation}
          initial="hidden"
          animate="show"
          exit="hidden"
          style={{
            // borderLeft: "0.2px solid black",
            position: "absolute",
            left: "5.8rem",
            top: "13rem",
            background: "#0B2853",
            paddingTop: "0.3rem",
            borderRadius: "0rem 0.5rem 0.5rem 0rem",
            zIndex: "1000",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {route.subRoutes.map((subRoute, i) => (
            <div variants={menuItemAnimation} key={i} custom={i}>
              <NavLink
                to={subRoute.path}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <div
                  style={{
                    fontSize: "1rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {subRoute.icon}
                </div>
                <div className="capitalize flex justify-center text-xs ml-1">
                  {subRoute.name}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      )}{" "}
    </>
  );
};

export default SidebarMenu;
