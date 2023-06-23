import React from "react";
import {BsCameraVideo} from 'react-icons/bs'
import two from "../../../assets/png/two.jpg";
import ClientCameraWidget from "./clientcamerawidget/clientCameraWidget";
const ClientCamera = () => {
    return (
        <div className="w-full md:col-span-6 px-4 sm:px-0">
        <div className="w-full grid-cols-2 grid items-center gap-5">
           <ClientCameraWidget image={two}/>
           <ClientCameraWidget image={two}/>
           <ClientCameraWidget image={two}/>
           <ClientCameraWidget image={two}/>
            
        </div>

        <div className="w-full items-center mt-4 justify-center">
        <button className="bg-[#01C38D] flex justify-center space-x-2 items-center p-2 text-white rounded-lg w-fit">
        <BsCameraVideo className="text-[22px]" />
        <span>Add Camera or DVR</span>
      </button>
        </div>
       </div>
    )
}

export default ClientCamera