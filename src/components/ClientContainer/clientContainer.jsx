import React, { useState } from "react";
import ClientSideNav from "./clientSideNav";
import ClientTopNav from "./clientTopNav";

const ClientContainer = ({ children }) => {
  const [isNav, setisNav] = useState(false);
  return (
    <div className="w-full h-full pb-[50px]  bg-gray-100 text-zinc-700">
      <ClientSideNav isNav={isNav} setisNav={setisNav} />
      <div className="right min-[1010px]:float-right bg-gray-100 ">
        {children}
      </div>
      <ClientTopNav isNav={isNav} setisNav={setisNav} />
    </div>
  );
};

export default ClientContainer;
