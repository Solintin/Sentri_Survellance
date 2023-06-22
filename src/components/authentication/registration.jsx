import React, { useState } from "react";
import logo from "../../assets/png/logo.png";

import PhaseB from "./registrationphases/phaseB";
import PhaseD from "./registrationphases/phaseD";
import PhaseC from "./registrationphases/phaseC";
import PhaseA from "./registrationphases/phaseA";

const Registration = () => {
  const [active, setActive] = useState(0)


  console.log(active)
  return (
    <div className="w-full h-full fixed inset-0 text-zinc-800 bg-[#132D46]">
       <div className="top-10 left-[50px] max-[860px]:hidden h-[60px] enter lg:left-[100px] absolute lg:h-[70px] w-fit">
            <img className="w-full h-full" src={logo} alt="" />
        </div>

      <div className="w-full sm:w-[420px] transform lets swipeDown ease-in-out absolute m-auto h-fit inset-0  space-y-5">
       
        <div className="w-full items-center justify-center flex space-x-4">
          <div
          onClick={() => {
            setActive(0)
          }}
          className={`w-[20%] h-[6px] rounded-xl cursor-pointer ${active >= 0 ? 'bg-[#01C38D]' : 'bg-white '}`}></div>
          <div
           onClick={() => {
            setActive(1)
          }}
          className={`w-[20%] h-[6px] rounded-xl  cursor-pointer  ${active >= 1 ? 'bg-[#01C38D]' : 'bg-white '}` }></div>
          <div
           onClick={() => {
            setActive(2)
          }}
          className={`w-[20%] h-[6px] rounded-xl  cursor-pointer ${active >= 2 ? 'bg-[#01C38D]' : 'bg-white '}`}></div>
          <div
           onClick={() => {
            setActive(3)
          }}
          className={`w-[20%] h-[6px] rounded-xl cursor-pointer ${active === 3 ? 'bg-[#01C38D]' : 'bg-white '}`}></div>
        </div>


        <PhaseA  active={active} setActive={setActive}/>
        <PhaseB  active={active}  setActive={setActive}/>
        <PhaseC  active={active}  setActive={setActive}/>
        <PhaseD  active={active}  setActive={setActive}/>

      </div>
   
    </div>
  );
};

export default Registration;
