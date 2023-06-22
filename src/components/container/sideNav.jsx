import React from "react";
import logo from "../../assets/png/logo.png"
import {BsCameraVideo} from 'react-icons/bs'
import camera from "../../assets/svg/camera.svg"
import archive from "../../assets/svg/archive.svg"
import event from "../../assets/svg/event.svg"
import report from "../../assets/svg/report.svg"
import client from "../../assets/svg/client.svg"
import setting from "../../assets/svg/setting.svg"
import logout from "../../assets/svg/logout.svg"
import { Link, useLocation } from "react-router-dom";
const SideNav = ({isNav, setisNav}) => {
    const {pathname} = useLocation()
    
    return (
        <div
        
        onClick={(e) => {
            e.stopPropagation();
            setisNav(!isNav);
          }}
        className={`fixed z-[37] inset-y-0 left-0 h-full lets swipeInLeft ${
            isNav
              ? "w-full bg-black bg-opacity-50 min-[1024px]:w-[250px]"
              : "max-[1024px]:hidden w-[250px] "
          }`}>

<div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" py-4 flex flex-col items-center space-y-8  h-full w-[250px] cursor-pointer  bg-[#132D46] "

      >
        <div className="  px-8 w-full flex flex-col items-center justify-center space-y-3">
        <div className=" left-[50px]  h-[60px] enter  w-fit">
            <img className="w-full h-full" src={logo} alt="" />
        </div>
        <button className="bg-[#01C38D] flex justify-center space-x-2 items-center p-2 text-white rounded-lg w-full">
            <BsCameraVideo className="text-[22px]"/>
            <span>Add Camera or DVR</span>
        </button>
        </div>

        <div className="w-full items-start flex-col justify-start text-[15px] text-white space-y-3 py-2 border-b border-[#01C38D]">
            <Link to="/camera" className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${pathname === "/camera"? 'bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]' :''}`}>
                <div className="w-[25px] h-[25px] ">
                    <img className="w-full h-full" src={camera} alt="" />

                </div>
                <div>Cameras</div>

            </Link>
            <div className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${pathname === "/event"? 'bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]' :''}`}>
            <div className="w-[25px] h-[25px] ">
                    <img className="w-full h-full" src={event} alt="" />

                </div>
                <div>Events</div>

            </div>
            <div className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${pathname === "/archive-setting"? 'bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]' :''}`}>
            <div className="w-[25px] h-[25px] ">
                    <img className="w-full h-full" src={archive} alt="" />

                </div>
                <div>Archive Events</div>

            </div>

            <div className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${pathname === "/report"? 'bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]' :''}`}>
            <div className="w-[25px] h-[25px] ">
                    <img className="w-full h-full" src={report} alt="" />

                </div>
                <div>Reports</div>

            </div>

            <div className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${pathname === "/admin-setting"? 'bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]' :''}`}>
            <div className="w-[25px] h-[25px] ">
                    <img className="w-full h-full" src={setting} alt="" />

                </div>
                <div>Admin Settings</div>

            </div>

            <div className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${pathname === "/client"? 'bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]' :''}`}>
            <div className="w-[25px] h-[25px] ">
                    <img className="w-full h-full" src={client} alt="" />

                </div>
                <div>Clients</div>

            </div>
        </div>
       
        <div className="w-full items-start flex-col justify-start text-[15px] text-white space-y-3 py-2 ">
        <div className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${pathname === "/setting"? 'bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]' :''}`}>
                <div className="w-[25px] h-[25px] ">
                    <img className="w-full h-full" src={setting} alt="" />

                </div>
                <div>Settings</div>

            </div>

            <div className={`flex space-x-2 justify-start items-center pl-10 py-2 w-full ${pathname === "/logout"? 'bg-[#01C38D] bg-opacity-10 border-r-[6px] border-[#01C38D]' :''}`}>
                <div className="w-[25px] h-[25px] ">
                    <img className="w-full h-full" src={logout} alt="" />

                </div>
                <div>Log out</div>

            </div>

            </div>

        </div>

        </div>
    )
}

export default SideNav