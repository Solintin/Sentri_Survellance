import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import camera from "../../../assets/svg/camera.svg";
import Alert from '../alert/alert';
import { useState } from 'react';
import MenusWidget from '../menuwidget/menuWidget';
import nosignal from "../../../assets/png/nosignal.jpg";
const CameraWidget = ({image, isalert, issignal}) => {
    const [ismore, setismore] = useState(false)
    return (
        <div className="w-full  h-[220px] sm:h-[250px] relative rounded-lg">
        <div className="absolute py-1 px-2 bg-[#01C38D] text-white rounded-md space-x-1 items-center flex w-fit left-4 top-6">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span>REC</span>
        </div>
        {/**alert */}
        <div className={isalert ?"mx-auto absolute bottom-[60px] w-full h-fit": "hidden"}>
            <Alert/>
            </div>
        {/**menu */}
        <button
            onClick={(e) => {
                e.stopPropagation()
                setismore(!ismore)
            }}
            className="absolute right-3 top-3 p-1 bg-white bg-opacity-50 rounded-md ">
              <GiHamburgerMenu className="text-[25px] text-white" />

              <div className={ismore ? "absolute left-[-90px] min-w-max  top-9 ": 'hidden'}>
             
                <MenusWidget ismore={ismore} setismore={setismore}/>
             

              </div>
            </button>
        <button className="absolute right-3 top-3 p-1 bg-white bg-opacity-50 rounded-md ">
          <GiHamburgerMenu className="text-[25px] text-white" />
        </button>
        <img
          src={image || nosignal}
          alt=""
          className="w-full h-full object-fill rounded-lg"
        />
        {!issignal &&  <div className="absolute text-[13px] flex flex-col text-white inset-0 m-auto w-fit h-fit">
              <div className="w-[45px] h-[45px] ">
                <img className="w-full h-full" src={camera} alt="" />
              </div>

              <div>No signal</div>
            </div>}
        <div className="absolute bottom-1 text-gray-100 w-full inset-x-o p-3">
          <div className="flex items-center justify-between w-full text-[12px]">
            <div className="flex flex-col justify-start">
              <div>Thursday,1 june 2023</div>
              <div className="flex items-center space-x-1">
                <BiTimeFive className="text-[#01C38D] text-[15px]" />
                <div>03:45:24 AM</div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-1">
                <div className="w-[18px] h-[18px] ">
                  <img className="w-full h-full" src={camera} alt="" />
                </div>
                <div>Camera#1</div>
              </div>
              <div>Jane apartment</div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CameraWidget