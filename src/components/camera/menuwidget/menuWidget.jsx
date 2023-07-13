import React from "react";
import archive from "../../../assets/svg/archive.svg";
import edit from "../../../assets/svg/edit.svg";
import event from "../../../assets/svg/event.svg";
import deletes from "../../../assets/svg/delete.svg";

const MenusWidget = ({ismore, setismore}) => {

    return (
        <div className={ismore ? "absolute 2xl:left-[-120px] left-[-90px] min-w-max  top-9 ": 'hidden'}>
        <div className={"relative min-w-max p-4 sm:p-6 cursor-pointer z-[300] h-fit flex flex-col 2xl:text-base text-[11px] text-black font-semibold bg-white rounded-md shadow-md 2xl:space-y-6 space-y-4"}>
        <div
             onClick={(e) => {
               e.stopPropagation();
               
               setismore(!ismore);
             }}
             className="w-full h-full fixed inset-0 z-[40] bg-none"
           ></div>
        <div className="w-full flex justify-start  space-x-2">
           <div className="w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] ">
               <img className="w-full h-full" src={edit} alt="" />

           </div>
               <span>Edit</span>
           </div>
           <div className="w-full flex justify-start space-x-2">
           <div className="w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] ">
               <img className="w-full h-full" src={event} alt="" />

           </div>
               <span>Events</span>
           </div>
           <div className="w-full flex justify-start space-x-2">
           <div className="w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] ">
               <img className="w-full h-full" src={archive} alt="" />

           </div>
               <span>Archive Events</span>
           </div>
           <div className="w-full flex justify-start space-x-2">
           <div className="w-[18px] h-[18px] 2xl:w-[24px] 2xl:h-[24px] ">
               <img className="w-full h-full" src={deletes} alt="" />

           </div>
               <span>Delete</span>
           </div>
        </div>
        </div>
    )
}

export default MenusWidget