import React, { useState, useEffect } from "react";
import lightcam from "../../assets/svg/lightcam.svg";
import { CiSearch } from "react-icons/ci";
import { MdOutlineNavigateNext } from "react-icons/md";
import { AiOutlineGlobal, AiOutlineAudio } from "react-icons/ai";
import { BsBellFill } from "react-icons/bs";
import logo from "../../assets/png/logo.png";
import events from "../../assets/svg/event.svg"
import archive from "../../assets/svg/archive.svg"
import client from "../../assets/svg/client.svg"
import report from "../../assets/svg/report.svg"
import grid from "../../assets/svg/grid.svg"
import setting from "../../assets/svg/setting.svg"
import { useLocation } from "react-router-dom";
import {FiMenu} from 'react-icons/fi'
const TopNav = ({isNav, setisNav}) => {
  const [header, setHeder] = useState("");
  const { pathname } = useLocation();
  const [headerImage, setheaderImage] = useState()

  useEffect(() => {
    if (pathname.includes("camera")) {
      setHeder("Camera");
      setheaderImage(lightcam)
    }
    if (pathname.includes("event")) {
      setHeder("Events");
      setheaderImage(events)
    }
    if (pathname.includes("client")) {
      setHeder("Clients");
      setheaderImage(client)
    }
    if (pathname.includes("archive")) {
      setHeder("Archive Events");
      setheaderImage(archive)
    }
    if (pathname.includes("dashboard")) {
      setHeder("Dashboard");
      setheaderImage(grid)
    }
    if (pathname.includes("admin/settings")) {
      setHeder("Admin Settings");
      setheaderImage(setting)
    }
    if (pathname.includes("report")) {
      setHeder("Reports");
      setheaderImage(report)
    }
    if (pathname.includes("setting")) {
      setHeder("Genral Settings");
      setheaderImage(setting)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`right min-[1024px]:float-right fixed bg-[#132D46] sm:bg-white shadow-md z-[22] px-4 py-4 sm:px-8  2xl:px-12 2xl:py-8 top-0 right-0 flex justify-between items-center`}
    >
      <div className="flex items-center justify-between w-full">
      <div className="flex space-x-3 items-center">
      <div
        onClick={() => {
            setisNav(!isNav)
        }}
        className="cursor-pointer hidden sm:block min-[1024px]:hidden p-1 bg-opacity-20 rounded-md border-[#01C38D] border sm:border-0 bg-[#01C38D] sm:bg-none sm:p-0 ">
            <FiMenu className="text-[25px] text-[#01C38D] sm:text-gray-400"/>
        </div>
       
          <div className="hidden items-center sm:flex space-x-2 text-[#132D46]">
            <div className="sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]">
              <img className="w-full h-full" src={headerImage} alt="" />
            </div>
            <div className="text-sm sm:text-lg 2xl:text-[25px] font-semibold">{header}</div>
          </div>
          <div className=" sm:hidden h-[35px] enter   w-fit">
            <img className="w-full h-full" src={logo} alt="" />
        </div>

        
        </div>
        <div className="w-[200px] xl:w-[300px] 2xl:w-1/2 hidden md:block 2xl:h-16 h-11 relative">
            <AiOutlineAudio className="text-[#132D46] text-[22px] absolute left-2 2xl:top-5 top-3" />
            <input
              type="text"
              placeholder="Search for Camera"
              className="px-8 w-full h-full bg-gray-100 border border-gray-200 rounded-[4px]"
            />
            <CiSearch className="text-[#132D46] text-[22px] absolute right-3 2xl:top-5 top-3" />
          </div>

        <div className="space-x-4 flex items-center">
          <BsBellFill className="text-[25px] hidden sm:block text-white sm:text-gray-300" />

          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex 2xl:space-y-2 flex-col">
              <div className="font-medium text-white sm:text-[#132D46] w-full text-ellipsis whitespace-nowrap overflow-hidden">
                Officer Jim Iyke
              </div>
              <div className=" justify-end text-white sm:text-gray-500 w-full text-ellipsis whitespace-nowrap overflow-hidden">
                Brian johnson
              </div>
            </div>
            <div className="sm:block hidden rounded-full sm:h-[40px] sm:w-[40px]  h-[25px] w-[25px] bg-[#132D46] "></div>
            <MdOutlineNavigateNext className="hidden sm:block text-[25px] text-[#01C38D] rotate-90" />
          </div>

          <div className="bg-[#132D46] hidden sm:flex space-x-2 rounded-lg w-fit  p-2 ">
            <AiOutlineGlobal className="text-[22px] text-[#01C38D]" />
            <div className="text-white">English</div>
            <MdOutlineNavigateNext className="text-[20px] text-[#01C38D] rotate-90" />

      
          </div>
          <div
        onClick={() => {
            setisNav(!isNav)
        }}
        className="cursor-pointer block sm:hidden p-1 bg-opacity-20 rounded-md border-[#01C38D] border sm:border-0 bg-[#01C38D] sm:bg-none sm:p-0 ">
            <FiMenu className="text-[25px] text-[#01C38D] sm:text-gray-400"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;