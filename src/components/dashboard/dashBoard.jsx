import React from "react";
import Container from "../container/container";
import three from "../../assets/png/three.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiTimeFive } from "react-icons/bi";
import camera from "../../assets/svg/camera.svg";
import nosignal from "../../assets/png/nosignal.jpg";

const DashBoard = () => {
  return (
    <Container>
      <div className="w-full h-full space-y-5 bg-gray-100 py-14 sm:py-24">
        <div className="flex space-x-2 items-center">
          <div className="text-gray-500">View type:</div>

          {/**grid grid-cols-1 */}
          <div className="flex items-center flex-col gap-[2px]">
            <div className="w-8 h-[11px] bg-zinc-600 max-[624px]:bg-[#01C38D]"></div>
            <div className="w-8 h-[11px] bg-zinc-600 max-[624px]:bg-[#01C38D]"></div>
          </div>
          {/**grid grid-cols-2 */}
          <div className="flex flex-col items-center gap-[2px]">
            <div className="flex gap-[2px]">
              <div className="w-4 h-[11px] bg-zinc-600 sm:bg-[#01C38D] xl:bg-zinc-600"></div>
              <div className="w-4 h-[11px] bg-zinc-600 sm:bg-[#01C38D] xl:bg-zinc-600"></div>
            </div>
            <div className="flex gap-[2px]">
              <div className="w-4 h-[11px] bg-zinc-600 sm:bg-[#01C38D] xl:bg-zinc-600"></div>
              <div className="w-4 h-[11px] bg-zinc-600 sm:bg-[#01C38D] xl:bg-zinc-600"></div>
            </div>
          </div>
          {/**grid grid-cols-3 */}
          <div className="flex flex-col items-center gap-[2px]">
            <div className="flex gap-[2px]">
              <div className="w-[12px] h-[11px] bg-zinc-600 xl:bg-[#01C38D]"></div>
              <div className="w-[12px] h-[11px] bg-zinc-600 xl:bg-[#01C38D]"></div>
              <div className="w-[12px] h-[11px] bg-zinc-600 xl:bg-[#01C38D]"></div>
            </div>
            <div className="flex gap-[2px]">
              <div className="w-[12px] h-[11px] bg-zinc-600 xl:bg-[#01C38D]"></div>
              <div className="w-[12px] h-[11px] bg-zinc-600 xl:bg-[#01C38D]"></div>
              <div className="w-[12px] h-[11px] bg-zinc-600 xl:bg-[#01C38D]"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 w-full items-center">
          <div className="w-full h-[220px] sm:h-[250px] relative rounded-lg">
            <div className="absolute right-3 top-3 p-1 bg-white bg-opacity-50 rounded-md ">
              <GiHamburgerMenu className="text-[25px] text-white" />
            </div>
            <img
              src={three}
              alt=""
              className="w-full h-full object-fill rounded-lg"
            />
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

          {/** */}
          <div className="w-full  h-[220px] sm:h-[250px] relative rounded-lg">
            <div className="absolute right-3 top-3 p-1 bg-white bg-opacity-50 rounded-md ">
              <GiHamburgerMenu className="text-[25px] text-white" />
            </div>
            <img
              src={three}
              alt=""
              className="w-full h-full object-fill rounded-lg"
            />
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

          {/** */}
          <div className="w-full  h-[220px] sm:h-[250px] relative rounded-lg">
            <div className="absolute right-3 top-3 p-1 bg-white bg-opacity-50 rounded-md ">
              <GiHamburgerMenu className="text-[25px] text-white" />
            </div>
            <img
              src={three}
              alt=""
              className="w-full h-full object-fill rounded-lg"
            />
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

          {/** */}
          <div className="w-full  h-[220px] sm:h-[250px] relative rounded-lg">
            <div className="absolute right-3 top-3 p-1 bg-white bg-opacity-50 rounded-md ">
              <GiHamburgerMenu className="text-[25px] text-white" />
            </div>
            <img
              src={nosignal}
              alt=""
              className="w-full h-full object-fill rounded-lg"
            />
            <div className="absolute text-[13px] flex flex-col text-white inset-0 m-auto w-fit h-fit">
              <div className="w-[45px] h-[45px] ">
                <img className="w-full h-full" src={camera} alt="" />
              </div>

              <div>No signal</div>
            </div>
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
        </div>
      </div>
    </Container>
  );
};

export default DashBoard;
