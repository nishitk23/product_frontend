import React from "react";

const Header = ({ category, title }) => (
  <div className="m-2">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-2xl text-center font-extrabold tracking-tight text-[#0B2853]">
      {title}
    </p>
  </div>
);

export default Header;
