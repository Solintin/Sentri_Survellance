import React from "react";
import archive from "../../../assets/svg/archive.svg";
import edit from "../../../assets/svg/edit.svg";
import event from "../../../assets/svg/event.svg";
import deletes from "../../../assets/svg/delete.svg";

const MenusWidget = ({ismore, setismore}) => {
    return (
        <div className="relative min-w-max p-4 cursor-pointer z-[300] h-fit flex flex-col text-[11px] text-black font-semibold bg-white rounded-md shadow-md space-y-4">
        <div
             onClick={(e) => {
               e.stopPropagation();
               
               setismore(!ismore);
             }}
             className="w-full h-full fixed inset-0 z-[40] bg-none"
           ></div>
        <div className="w-full flex justify-start p4 space-x-2">
           <div className="w-[18px] h-[18px] ">
               <img className="w-full h-full" src={edit} alt="" />

           </div>
               <span>Edit</span>
           </div>
           <div className="w-full flex justify-start space-x-2">
           <div className="w-[18px] h-[18px] ">
               <img className="w-full h-full" src={event} alt="" />

           </div>
               <span>Events</span>
           </div>
           <div className="w-full flex justify-start space-x-2">
           <div className="w-[18px] h-[18px] ">
               <img className="w-full h-full" src={archive} alt="" />

           </div>
               <span>Archive Events</span>
           </div>
           <div className="w-full flex justify-start space-x-2">
           <div className="w-[18px] h-[18px] ">
               <img className="w-full h-full" src={deletes} alt="" />

           </div>
               <span>Delete</span>
           </div>
        </div>
    )
}

export default MenusWidget