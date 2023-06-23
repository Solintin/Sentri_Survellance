import React, { useState } from "react";
import SideNav from "./sideNav";
import TopNav from "./topNav";

const Container = ({ children }) => {
  const [isNav, setisNav] = useState(false);
  return (
    <div className="w-full h-full pb-[50px]  bg-gray-100 text-zinc-700">
      <SideNav isNav={isNav} setisNav={setisNav} />
      <div className="right min-[1010px]:float-right bg-gray-100 sm:px-4">
        {children}
      </div>
      <TopNav isNav={isNav} setisNav={setisNav} />
    </div>
  );
};

export default Container;
