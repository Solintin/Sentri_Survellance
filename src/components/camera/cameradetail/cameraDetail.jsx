import React,{useState} from "react";
import Container from "../../container/container";
import camera from "../../../assets/svg/camera.svg";
import voice from "../../../assets/svg/voice.svg";
import speaker from "../../../assets/svg/speaker.svg";
import two from "../../../assets/png/two.jpg";
import clients from "../../../assets/svg/clients.svg";
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiTimeFive} from 'react-icons/bi'
import Alert from "../alert/alert";
import MenusWidget from "../menuwidget/menuWidget";
import {BsCameraVideo} from 'react-icons/bs'
const CameraDetail = () => {
    const isalert = true
  const [ismore, setismore] = useState(false);
  return (
    <Container>
      <div className=" w-full h-full grid grid-cols-1 md:grid-cols-11 pb-[100px] pt-[83px] gap-y-10  md:gap-10">
        <div className="w-full md:col-span-7 space-y-3">
            <div className="flex items-center space-x-2">
            <div className="w-[22px] h-[22px] sm:w-[35px] sm:h-[35px] ">
            <img className="w-full h-full" src={camera} alt="" />
          </div>
          <div >
          <div className="text-lg text-[#132D46] font-semibold">Camera # 1</div>
          <div className="text-gray-500 font-semibold text-[12px]">Jane Apartment</div>
          </div>
         
         <div className="flex space-x-1 w-fit px-1 rounded-md bg-[#132D46] items-center">
            <div className="rounded-full bg-[#01C38D] w-1 h-1"></div>
            <div className="text-white text-[10px]">Live</div>
         </div>
            </div>
         
         <div className="w-full bg-white rounded-md p-3">
         <div className="w-full h-[80%] rounded-md relative mb-3">
            <img className="w-full h-full object-fill rounded-md" src={two} alt="" />
             {/**alert */}
      <div
        className={
          isalert ? "m-auto absolute inset-0  w-full  h-fit" : "hidden"
        }
      >
        <Alert />
      </div>
    {/**menu */}
      <button
        onClick={() => {
          
          setismore(!ismore);
        }}
        className="absolute right-3 z-[20] top-3 p-1 bg-white bg-opacity-50 rounded-md "
      >
        <GiHamburgerMenu className="text-[25px] text-white" />

        <MenusWidget ismore={ismore} setismore={setismore} />
      </button>
            <div className="absolute bottom-1 text-gray-100 w-full inset-x-o p-3">
        <div className="flex items-center justify-start w-full text-[12px]">
          <div className="flex flex-col justify-start">
            <div>Thursday,1 june 2023</div>
            <div className="flex items-center space-x-1">
              <BiTimeFive className="text-[#01C38D] text-[15px]" />
              <div>03:45:24 AM</div>
            </div>
          </div>

        </div>
      </div>
         </div>

         <div className="flex items-center space-x-3">
            <div  className="w-[24px] cursor-pointer flex items-center justify-center h-[24px] p-[6px] rounded-full bg-gray-200  ">
                <img className="w-[24px] h-[24px]" src={voice} alt="" />
            </div>

            <div className="w-[24px] cursor-pointer flex items-center justify-center h-[24px] p-[6px] rounded-full bg-gray-200  ">
                <img className="w-[24px] h-[24px]" src={speaker} alt="" />
            </div>
         </div>
         </div>
        </div>
        <div className="md:col-span-4 border-l p-3 items-center justify-center md:w-full w-[350px] space-y-3">

            <div className="flex space-x-2 items-center">
                <div className="w-[30px] rounded-full h-[30px] ">
                    <img src={clients} alt="" className="w-full rounded-full h-full " />
                </div>
                <div className="font-medium text-[#132D46] text-[13px]">John Doe</div>
            </div>

            <div className="w-full h-[120px] bg-white rounded-md p-2">
                <div className="grid grid-cols-4 gap-2">
                    <div className="col-span-2 rounded-md h-[90px]">
                        <img className="w-full rounded-md  h-full" src={two} alt="" />

                    </div>
                    <div>
                        <div className="font-medium text-[#132D46] text-[15px] whitespace-nowrap">Camera#2</div>
                        <div className="text-gray-400 text-[10px] whitespace-nowrap">Living room</div>
                    </div>
                </div>

            </div>

            <div className="w-full items-center justify-center">
            <button className="bg-[#01C38D] flex justify-center space-x-2 items-center p-2 text-white rounded-lg w-fit">
            <BsCameraVideo className="text-[22px]" />
            <span>Add Camera or DVR</span>
          </button>
            </div>
          
        </div>
      </div>
    </Container>
  );
};

export default CameraDetail;
