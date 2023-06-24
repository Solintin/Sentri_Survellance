import React from "react";
import { camData } from "../../../mock";
import CamerListWidget from "../cameralistwidget/cameraListWidget";
const CameraList = () => {
  
    return (
        <div className="overflow-hidden hidden sm:block let swipeInLeft fixed z-[10] left-2 lg:left-[260px] w-[220px] h-full">
        <div className="overflow-y-auto overflow-x-hidden w-full h-[70vh]">
        <div className="w-full h-full flex flex-col">
         {camData?.map((item, index) => {
          return (
            <div
            key={index}
            className="mb-[23px]">
           <CamerListWidget item={item} id={index}/>
          </div>
          )
         })}
         </div>
        </div>
      </div>
    )
}

export default CameraList