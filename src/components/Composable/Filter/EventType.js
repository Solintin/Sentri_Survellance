import React from "react";
import { useState } from "react";
import Switch from "../../UI/switch";
const EventType = () => {
  const [isToggled, setToggle] = useState(false);
  return (
    <div className=" w-full h-[400px] py-6 px-6 sm:py-10 flex flex-col justify-center items-center bg-[#F0F0F2] overflow-hidden">
      <div className="scroll-style overflow-y-auto w-full h-full ">
        <div className="flex space-y-2 flex-col w-[98%]">
          <div className="flex justify-between items-center py-2 w-full">
            <span className=" font-semibold text-[#132D46]">Motion</span>

            <Switch isToggled={isToggled} setToggle={setToggle} />
          </div>
          <div className="flex justify-between items-center py-2 w-full">
            <span className=" font-semibold text-[#132D46]">Temperature</span>

            <Switch isToggled={isToggled} setToggle={setToggle} />
          </div>
          <div className="flex justify-between items-center py-2 w-full">
            <span className=" font-semibold text-[#132D46]">Offline</span>

            <Switch isToggled={isToggled} setToggle={setToggle} />
          </div>
          <div className="flex justify-between items-center py-2 w-full">
            <span className=" font-semibold text-[#132D46]">Doorbell Ring</span>

            <Switch isToggled={isToggled} setToggle={setToggle} />
          </div>
          <div className="flex justify-between items-center py-2 w-full">
            <span className=" font-semibold text-[#132D46]">Sensor</span>

            <Switch isToggled={isToggled} setToggle={setToggle} />
          </div>
          <div className="flex justify-between items-center py-2 w-full">
            <span className=" font-semibold text-[#132D46]">Sound</span>

            <Switch isToggled={isToggled} setToggle={setToggle} />
          </div>
          <div className="flex justify-between items-center py-2 w-full">
            <span className=" font-semibold text-[#132D46]">Sound</span>

            <Switch isToggled={isToggled} setToggle={setToggle} />
          </div>
          <div className="flex justify-between items-center py-2 w-full">
            <span className=" font-semibold text-[#132D46]">Sound</span>

            <Switch isToggled={isToggled} setToggle={setToggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventType;