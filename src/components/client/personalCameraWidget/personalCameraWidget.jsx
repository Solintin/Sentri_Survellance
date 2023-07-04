import React from "react";
import two from "../../../assets/png/two.jpg";
import { useState } from 'react';
import {AiTwotoneSetting} from 'react-icons/ai';
import ClientCameraControls from "../clientCameraControls/clientCameraControls";
const PersonalCameraWidget = ({resize}) => {
    const [isSettings, showSettings] = useState(false)
    return (
        <div
        onMouseEnter={() => {
        showSettings(true)
        }}
        onMouseLeave={() => {
            showSettings(false)
            }}
        className={`relative  h-[220px] sm:h-[350px] rounded-xl overflow-hidden ${resize === 1 ? 'md:h-[500px]': 'md:h-[300px] '}`}>
        <img src={two} alt="" className='w-full h-full rounded-lg'/>
        <div className='text-white flex flex-col justify-start absolute top-2 left-3'>
            <div>Camera 1</div>
            <div className="text-[10px] sm:text-[12px]">Building Entrance</div>

        </div>
        <div 
        onClick={() => {
            showSettings(!isSettings)
        }}
        className="absolute top-2 right-3 text-white w-fit h-fit bg-white p-1 rounded-lg bg-opacity-40 cursor-pointer">
            <AiTwotoneSetting className="text-[25px]"/>
        </div>
        {isSettings && <ClientCameraControls/>}
    </div>
    )
}

export default PersonalCameraWidget;