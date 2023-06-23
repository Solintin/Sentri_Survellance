import React, { useState } from "react";
import Container from "../container/container";
import three from "../../assets/png/three.jpg";
import two from "../../assets/png/two.jpg";

import CameraWidget from "./camerwidget/cameraWidget";

import CameraList from "./cameralist/cameraList";
const Camera = () => {
  const [issignal] = useState(true);
  const [isalert] = useState(true);
  const [resize, setresize] = useState(2);

 

  const record = true;
  return (
    <Container>
      <div className="w-full h-full space-y-5 bg-gray-100 py-14 sm:py-24">
        <div className="hidden md:flex space-x-2 items-center w-full justify-end ">
          <div className="text-gray-500">View type:</div>

          {/**grid grid-cols-1 */}
          <div
            onClick={() => {
              setresize(1);
            }}
            className="flex items-center flex-col gap-[2px]"
          >
            <div
              className={`w-8 h-[11px]  ${
                resize === 1 ? "bg-[#01C38D]" : "bg-zinc-600 "
              } `}
            ></div>
            <div
              className={`w-8 h-[11px] ${
                resize === 1 ? "bg-[#01C38D]" : "bg-zinc-600 "
              } `}
            ></div>
          </div>
          {/**grid grid-cols-2 */}
          <div
            onClick={() => {
              setresize(2);
            }}
            className="flex flex-col items-center gap-[2px]"
          >
            <div className="flex gap-[2px]">
              <div
                className={`w-4 h-[11px]  ${
                  resize === 2 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
              <div
                className={`w-4 h-[11px] ${
                  resize === 2 ? "bg-[#01C38D]" : "bg-zinc-600 "
                }`}
              ></div>
            </div>
            <div className="flex gap-[2px]">
              <div
                className={`w-4 h-[11px] ${
                  resize === 2 ? "bg-[#01C38D]" : "bg-zinc-600 "
                } `}
              ></div>
              <div
                className={`w-4 h-[11px] ${
                  resize === 2 ? "bg-[#01C38D]" : "bg-zinc-600 "
                }`}
              ></div>
            </div>
          </div>
          {/**grid grid-cols-3 */}
        
        </div>
      
                <CameraList/>

          <div
            className={`pl-4 pr-4 sm:pr-0 sm:pl-[230px] grid grid-cols-1 sm:grid-cols-2  gap-5 w-full items-center  ${
              resize === 1 ? "md:grid-cols-1" : ""
            }  ${resize === 3 ? "md:grid-cols-3" : ""}  ${
              resize === 2 ? "md:grid-cols-2" : ""
            }`}
          >
            <CameraWidget
              image={three}
              isalert={isalert}
              issignal={issignal}
              record={record}
              resize={resize}
            />
            <CameraWidget
              image={two}
              isalert={!isalert}
              issignal={issignal}
              record={record}
              resize={resize}
            />
            <CameraWidget
              image={three}
              isalert={!isalert}
              issignal={issignal}
              record={record}
              resize={resize}
            />
            <CameraWidget
              image={""}
              isalert={!isalert}
              issignal={!issignal}
              record={record}
              resize={resize}
            />
            <CameraWidget
              image={""}
              isalert={!isalert}
              issignal={!issignal}
              record={record}
              resize={resize}
            />
          </div>
        
      </div>
    </Container>
  );
};

export default Camera;
