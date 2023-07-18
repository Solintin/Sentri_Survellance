import React from "react";

const ClientCameraWidget = ({image}) => {
    return (
        <div className="rounded-lg relative w-full h-[120px] sm:h-[30vh]">
        <img src={image} alt="" className="w-full h-full rounded-lg object-fill" />
        <div className="absolute text-white top-3 left-3">
             <div className="text-[13px] 2xl:text-xl sm:text-[15px]">Camera # 1</div>
             <div className="text-[12px] 2xl:text-xl sm:text-sm">Back Yard</div>
        </div>
    </div>
    )
}

export default ClientCameraWidget