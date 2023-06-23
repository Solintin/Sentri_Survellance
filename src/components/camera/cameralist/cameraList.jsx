import React from "react";

import CamerListWidget from "../cameralistwidget/cameraListWidget";
const CameraList = () => {
    const cameras = [
        { cam: "Camera#1" },
        { cam: "Camera#2" },
        { cam: "Camera#1" },
      ];
    return (
        <div className="overflow-hidden let swipeInLeft fixed z-[10] left-2 lg:left-[260px] w-[220px] h-full">
        <div className="overflow-y-auto overflow-x-hidden w-full h-[70vh]">
        <div className="w-full h-full flex flex-col">
         {cameras.map(({cam}, index) => {
          return (
            <div
            key={index}
            className="mb-[23px]">
           <CamerListWidget cam={cam}/>
          </div>
          )
         })}
         </div>
        </div>
      </div>
    )
}

export default CameraList