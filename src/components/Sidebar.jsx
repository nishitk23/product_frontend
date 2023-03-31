import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import SidebarMenu from './SidebarMenu';
import {
  adminRoutes,
  manufacturerRoutes,
  distributorRoutes,
  retailerRoutes,
  storageRoutes,
} from '../data/link';
import { AuthContext } from '../contexts/auth-context';

const Sidebar = () => {
  const { userRole } = useContext(AuthContext);
  let routes = '';
  if (userRole === 'admin@gmail.com') {
    routes = adminRoutes;
  } else if (userRole === 'manufacturer@gmail.com') {
    routes = manufacturerRoutes;
  } else if (userRole === 'distributor@gmail.com') {
    routes = distributorRoutes;
  } else if (userRole === 'storage@gmail.com') {
    routes = storageRoutes;
  } else {
    routes = retailerRoutes;
  }

  const activeLink = 'grid items-center gap-1 p-2 rounded-lg text-black font-semibold text-md m-2 bg-active-bg';
  const normalLink = 'grid items-center gap-1 p-2 rounded-lg text-md font-semibold text-white dark:text-gray-200 hover:text-[#7b8cb8] m-2';

  const isSmallScreen = useMediaQuery('(max-width: 640px)');

  return (
    <>
      {!isSmallScreen && (
        <div className="h-screen pb-10 pt-2 z-50">
          <div className="flex justify-center items-center">
            <Link>
              <img
                src={require('../data/image/logo-edited.png')}
                className="h-12"
              />
            </Link>
          </div>
          <div className="mt-0">
            <div className="grid justify-center">
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return <SidebarMenu route={route} />;
                }

                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <div
                      style={{
                        fontSize: '1.5rem',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {route.icon}
                    </div>
                    <div className="capitalize flex justify-center text-xs">
                      {route.name}
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {isSmallScreen && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white">
          <div className="flex justify-center items-center py-2">
            <Link>
              <img
                src={require('../data/image/logo-edited.png')}
                className="h-8"
              />
            </Link>
          </div>
          <div className="flex justify-center py-2">
            <button>Menu</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
