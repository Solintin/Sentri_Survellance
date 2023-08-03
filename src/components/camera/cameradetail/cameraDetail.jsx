import React, { useState } from "react";
import Container from "../../container/container";
import camera from "../../../assets/svg/camera.svg";
import voice from "../../../assets/svg/voice.svg";
import speaker from "../../../assets/svg/speaker.svg";
import two from "../../../assets/png/two.jpg";
import clients from "../../../assets/svg/clients.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiTwotoneClockCircle,AiFillCamera } from "react-icons/ai";
import Alert from "../alert/alert";
import MenusWidget from "../menuwidget/menuWidget";
import {
  IoPlaySkipForward,
  IoPlaySkipBack,
  IoPlayForward,
  IoPlayBack,
} from "react-icons/io5";
import {
  BsCameraVideo,
  BsFillCalendarEventFill,
  BsPlayFill,
  BsPauseFill,
  BsArrowLeft,
  BsFillCloudDownloadFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const CameraDetail = () => {
 // const { state } = useLocation();
  //const { item } = state;
  const isalert = true;
  const [ismore, setismore] = useState(false);
  const [isPlay, setPlay] = useState(false);
  const navigate = useNavigate()

  function handlePlay() {
    setPlay(!isPlay);
  }
  return (
    <Container>
      <div className=" w-full h-fit grid grid-cols-1 sm:px-4 md:grid-cols-11 pb-[100px] 2xl:pt-[100px] pt-[83px] gap-y-10  md:gap-10">
        <div className="w-full md:col-span-7 space-y-3">
          <div className="flex items-center justify-between w-full">
           <div className="flex space-x-2 items-center">
            <button onClick={() => {
              navigate(-1)
            }}>
            <BsArrowLeft className="text-[#132D46] font-semibold text-[25px] 2xl:text-[30px]"/>

            </button>
           <h1 className="text-xl text-[#132D46] 2xl:text-3xl font-semibold">
              Detection Screen
            </h1>

           </div>
            <div className="flex flex-col 2xl:w-[300px] w-[175px] overflow-hidden items-center">
              <div className="flex items-center space-x-2">
                <div className="w-[22px] h-[22px] sm:w-[35px] sm:h-[35px] 2xl:h-[50px] 2xl:w-[50px]">
                  <img className="w-full h-full" src={camera} alt="" />
                </div>
                <div>
                  <div className="text-lg 2xl:text-2xl text-[#132D46] font-semibold">
                    {'Camera 1'}
                  </div>
                </div>

                <div className="flex space-x-1 w-fit px-1 rounded-md bg-[#132D46] items-center">
                  <div className="rounded-full bg-[#01C38D] w-1 h-1"></div>
                  <div className="text-white text-[10px] 2xl:text-lg">Live</div>
                </div>
              </div>
              <div className="text-gray-500 font-semibold text-[12px] 2xl:text-xl align-middle">
                {'Lucy Apartment'}
              </div>
            </div>
          </div>

          <div className="w-full bg-white rounded-md p-3">
            <div className="w-full h-[80%] rounded-md relative mb-3">
              <img
                className="w-full h-full object-fill rounded-md"
                src={two}
                alt=""
              />
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
                <div className="flex items-center space-x-3">
                  <div className="w-[24px]  2xl:w-[50px] 2xl:h-[50px] cursor-pointer flex items-center justify-center  sm:w-[30px] sm:h-[30px] h-[24px] p-[6px] rounded-full bg-gray-200  ">
                    <img
                      className="w-[24px] h-[24px]  sm:w-[30px] sm:h-[30px] 2xl:w-[50px] 2xl:h-[50px]"
                      src={voice}
                      alt=""
                    />
                  </div>

                  <div className="w-[24px] 2xl:w-[50px] 2xl:h-[50px]  sm:w-[30px] sm:h-[30px] cursor-pointer flex items-center justify-center h-[24px] p-[6px] rounded-full bg-gray-200  ">
                    <img
                      className="w-[24px] h-[24px]  sm:w-[30px] sm:h-[30px] 2xl:w-[50px] 2xl:h-[50px]"
                      src={speaker}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full justify-between items-center flex">
              <div className="flex items-center 2xl:text-lg space-x-3 bg-gray-200 justify-start w-fit rounded-lg p-2 text-[12px]">
                <div className="flex items-center space-x-2">
                  <BsFillCalendarEventFill className="text-[#01C38D] text-[15px] 2xl:text-xl" />
                  <div>Thursday,1 june 2023</div>
                </div>

                <div className="flex items-center space-x-2">
                  <AiTwotoneClockCircle className="text-[#01C38D] text-[15px] 2xl:text-xl" />
                  <div>03:45:24 AM</div>
                </div>
              </div>
              <div className="space-x-2 2xl:space-x-3 flex items-center ">
                <button>
                  <IoPlayBack className="text-gray-300 2xl:text-3xl" />
                </button>
                <button>
                  <IoPlaySkipBack className="text-gray-300 2xl:text-3xl" />
                </button>
                <button
                  onClick={handlePlay}
                  className="bg-gray-300 rounded-full p-2 items-center justify-center flex"
                >
                  {isPlay ? (
                    <BsPauseFill className="text-[#132D46] 2xl:text-3xl" />
                  ) : (
                    <BsPlayFill className="text-[#132D46] 2xl:text-3xl" />
                  )}
                </button>
                <button>
                  <IoPlaySkipForward className="text-gray-300 2xl:text-3xl" />
                </button>

                <button>
                  <IoPlayForward className="text-gray-300 2xl:text-3xl" />
                </button>
              </div>

              <div className="space-x-2 2xl:space-x-3 flex items-center ">
                <AiFillCamera className="text-[#132D46] 2xl:text-3xl"/>
                <BsFillCloudDownloadFill className="text-[#132D46] 2xl:text-3xl" />
                
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 border-l p-3 items-center justify-center md:w-full w-[350px] space-y-3">
          <div className="space-y-3 2xl:space-y-7 flex flex-col">
          <div className="flex space-x-2 items-center">
            <div className="w-[30px] 2xl:w-[45px] 2xl:h-[45px] rounded-full h-[30px] ">
              <img
                src={clients}
                alt=""
                className="w-full rounded-full h-full "
              />
            </div>
            <div className="font-semibold text-[#132D46] 2xl:text-2xl text-[13px]">
              John Doe
            </div>
            </div>
            <div className="flex 2xl:text-2xl text-[13px] font-semibold space-x-2 items-center">
              <div>
                Phone Number:
              </div>
              <div>
                91 234 334 44
              </div>
            </div>
            <div className="flex 2xl:text-2xl text-[13px] font-semibold space-x-2 items-center">
              <div>
                Email Address:
              </div>
              <div>
                lucyann@gmail.com </div>
            </div>
            <div className="flex 2xl:text-2xl text-[13px] font-semibold space-x-2 items-center">
              <div>
                Address:
              </div>
              <div>
                Maldevis layout, New York
              </div>
            </div>
          </div>
          

          {[1,2,3,4].map(({ subcam, loc }, idx) => {
            return (
              <div
                key={idx}
                className="w-full h-[30vh] bg-white rounded-md p-2"
              >
                <div className="grid grid-cols-4 gap-2">
                  <div className="col-span-2 rounded-md h-[20vh]">
                    <img
                      className="w-full rounded-md  h-full"
                      src={two}
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="font-medium text-[#132D46] text-[15px] 2xl:text-xl whitespace-nowrap">
                      {`Camera ${idx+2}`}
                    </div>
                    <div className="text-gray-400 text-[10px] whitespace-nowrap 2xl:text-lg">
                      {'backyard'}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="w-full items-center justify-center">
            <button className="bg-[#01C38D] flex justify-center space-x-2 items-center 2xl:py-3 p-2 text-white rounded-lg w-fit">
              <BsCameraVideo className="text-[22px] 2xl:text-[30px]" />
              <span className="2xl:text-xl">Add Camera or DVR</span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CameraDetail;
