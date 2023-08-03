import React from "react";
import two from "../../../../assets/png/two.jpg";
import EventController from '../../eventsettings/eventControl';
import { useState } from 'react';
import {AiTwotoneSetting} from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
const EventCameraWidget = () => {
    const [isSettings, showSettings] = useState(false)
    const navigate = useNavigate()
    return (
        <div 
        onClick={() => {
        navigate("/camera/0")
        }}
        className='relative  h-[220px] sm:h-[40vh] rounded-xl overflow-hidden'>
        <img src={two} alt="" className='w-full h-full rounded-lg'/>
        <div className='text-white 2xl:text-[22px] flex flex-col  justify-start absolute top-2 left-3'>
            <div>Camera 1</div>
            <div className="text-[10px] sm:text-[12px] 2xl:text-xl ">Building Entrance</div>

        </div>
        <div 
        onClick={(e) => {
            e.stopPropagation()
            showSettings(!isSettings)
        }}
        className="absolute top-2 right-3 text-white w-fit h-fit bg-white p-1 rounded-lg bg-opacity-40 cursor-pointer">
            <AiTwotoneSetting className="text-[25px] 2xl:text-[30px]"/>
        </div>
        
        {isSettings && <EventController/>}
    </div>
    )
}

export default EventCameraWidget;