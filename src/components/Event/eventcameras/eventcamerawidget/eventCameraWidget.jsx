import React from "react";
import two from "../../../../assets/png/two.jpg";
import EventController from '../../eventsettings/eventControl';
import { useState } from 'react';
import {AiTwotoneSetting} from 'react-icons/ai';
const EventCameraWidget = () => {
    const [isSettings, showSettings] = useState(false)
    return (
        <div className='relative  h-[220px] sm:h-[350px] xl:h-[250px] rounded-xl overflow-hidden'>
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
        {isSettings && <EventController/>}
    </div>
    )
}

export default EventCameraWidget;