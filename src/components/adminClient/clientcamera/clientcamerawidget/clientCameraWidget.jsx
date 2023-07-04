import React from "react";

const ClientCameraWidget = ({image}) => {
    return (
        <div className="rounded-lg relative w-full h-[120px] sm:h-[170px]">
        <img src={image} alt="" className="w-full h-full rounded-lg object-fill" />
        <div className="absolute text-white top-3 left-3">
             <div className="text-[13px] sm:text-[15px]">Camera # 1</div>
             <div className="text-[12px] sm:text-sm">Back Yard</div>
        </div>
    </div>
    )
}

export default ClientCameraWidget