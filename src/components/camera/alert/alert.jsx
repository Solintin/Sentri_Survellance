import React from "react";
import { MdOutlineSecurity } from "react-icons/md";
import {BsFillBellFill} from 'react-icons/bs'

const Alert = () => {
    return (
        <div className="w-full h-fit flex flex-col space-y-[9%] xl:space-y-[9%] items-center justify-center text-white  inset-x-0 text-[10px] sm:text-[12px]">
              <div className="w-fit bg-red-500 rounded-md text-white flex items-center space-x-2 sm:space-x-3 px-2 py-1  sm:p-2">
                <MdOutlineSecurity className="text-[18px]"/>
                <div>An alert system has been detected</div>
              </div>

              <div className="flex items-center space-x-2 w-[75%] xl:w-[80%] h-fit justify-center">
              <div className="w-fit bg-red-500 rounded-md text-white flex items-center space-x-2 sm:space-x-3 px-2 py-1 sm:p-2">
                <BsFillBellFill className="text-[15px]"/>
                <div className="text-medium">Dismiss Alarm</div>
              </div>

              <div className="w-fit bg-white rounded-md text-red-500 flex items-center space-x-2 sm:space-x-3 px-2 py-1  sm:p-2">
                <BsFillBellFill className="text-[15px]"/>
                <div className="text-medium">Raise Alarm</div>
              </div>
              </div>
            </div>
    )
}

export default Alert