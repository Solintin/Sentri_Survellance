import React from "react";
import logo from "../../../assets/png/logo.png";
import { BiArrowBack } from "react-icons/bi";
import map from "../../../assets/svg/authmap.svg";
import cctv from "../../../assets/png/cctv.png";
import { useLocation } from "react-router-dom";
import Registration from "../registration";
import Login from "../login";
const Auth = () => {
    const {pathname} = useLocation()
  return (
    <div className="w-full h-full fixed inset-0 p-2 sm:py-4   sm:px-10  text-zinc-800 bg-[#132D46]">
         <div  className="w-[600px] sm:w-[900px] inset-0 m-auto h-fit absolute "
      >
        <img src={map} alt="" className="w-full h-full object-contain" />
      </div>
      
      
      <div className="flex space-x-2 mb-5 sm:mb-7 text-white items-center z-[2]">
        <BiArrowBack className="text-[25px] text-[#01C38D]" />
        Back
      </div>
      <div className=" relative justify-center z-[2] flex w-full h-full  min-[1100px]:px-20 min-[890px]:justify-around ">
      <div className="max-[450px]:w-full min-[450px]:w-[450px] h-[88%]  overflow-hidden ">
       <div className="home-scroll-style max-[450px]:w-full min-[450px]:w-[450px] h-full overflow-x-hidden overflow-y-auto  pb-8">
       <div className="w-full min-[450px]:w-[420px] items-center space-y-8 md:space-y-0 h-fit flex flex-col ">
        <div className="md:hidden h-[50px]">
          <img className="w-full h-full" src={logo} alt="" />
        </div>
            {pathname === "/auth/signup" && <Registration/>}
            {pathname === "/auth/signin" && <Login/>}
        </div>
        </div>
       </div>
        <div className="hidden min-[890px]:flex flex-col space-y-8 items-center">
          <div className="h-[70px]">
            <img className="w-full h-full" src={logo} alt="" />
          </div>

          <div className="ml-[3rem] w-[300px] h-[220px]">
            <img src={cctv} alt="" className="w-full h-full" />
          </div>

          <div className="flex text-white flex-col space-y-2 justify-center items-center w-[300px]">
            <div className="font-semibold">Always monitoring your house</div>
            <div className="text-[13px] text-center">
              On the shot, you see the main screen with all the rooms, and users
              can control each camera with the help of remote control
            </div>
          </div>
        
          </div>
      </div>
    </div>
  );
};

export default Auth;


