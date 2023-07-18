import React from "react";
import two from "../../../assets/png/two.jpg";
import { useState } from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import ClientCameraControls from "../clientCameraControls/clientCameraControls";
const PersonalCameraWidget = ({ resize }) => {
  const [isSettings, showSettings] = useState(false);
  return (
    <div
    
      className={`relative  h-[220px] sm:h-[35vh] rounded-xl overflow-hidden ${
        resize === 4 ? "2xl:h-[30vh]" : ""
      } ${resize > 1 || resize < 4 ? "md:h-[50vh]" : "2xl:h-[65vh]"}`}
    >
      <img src={two} alt="" className="w-full h-full rounded-lg" />
      <div className="text-white flex flex-col justify-start absolute top-2 left-3">
        <div className="text-[13px] 2xl:text-xl sm:text-[15px]">Camera 1</div>
        <div className="text-[12px] 2xl:text-lg sm:text-sm">
          Building Entrance
        </div>
      </div>
      <div
        onClick={() => {
          showSettings(!isSettings);
        }}
        className="absolute top-2 right-3 text-white w-fit h-fit bg-white p-1 rounded-lg bg-opacity-40 cursor-pointer"
      >
        <AiTwotoneSetting className="text-[25px]" />
      </div>
      {isSettings && <ClientCameraControls />}
    </div>
  );
};

export default PersonalCameraWidget;
