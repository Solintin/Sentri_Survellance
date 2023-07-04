import React from "react";
import clients from "../../../assets/svg/clients.svg";
import edit from "../../../assets/svg/edit.svg";
import { MdNavigateNext } from "react-icons/md";
import satelite from "../../../assets/png/satelite.png";
const ClientDetail = () => {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    return (
        <div className="md:col-span-4 w-full flex space-y-4 px-4 flex-col">
        <div className="flex flex-col w-full">
          <div className="flex space-x-2 mb-2 items-center">
            <div className="w-[48px] rounded-full h-[48px] ">
              <img
                src={clients}
                alt=""
                className="w-full rounded-full h-full "
              />
            </div>
            <div className="font-semibold ">Jane Doe</div>
          </div>
          <button className="w-fit flex item-center bg-[#01C38D] mb-2  justify-center space-x-2 px-1 py-2 rounded-md text-sm">
            <div className="w-[22px] h-[22px] ">
              <img className="w-[22px] h-[22px]" src={edit} alt="" />
            </div>
            <span className="text-white">Edit Profile</span>
          </button>

          <div className="w-full space-y-2">
          <div className="w-full flex flex-col ">
            <div className="w-full justify-between text-sm text-[#132D46] items-center flex">
              <span className="font-semibold">Style</span>
              <button className="flex items-center  space-x-2 justify-center w-fit p-1 border rounded-md">
                <span>Satelite</span>
                <MdNavigateNext className="rotate-90 text-[#01C38D] text-[20px]" />
              </button>
            </div>
          </div>
          <div className="w-full rounded-md h-[350px] md:h-[250px] xl:h-[300px]">
            <img
              src={satelite}
              alt=""
              className="w-full h-full rounded-md object-fill"
            />
          </div>

          </div>
        </div>

        {/** user detail */}
        <div className="text-[13px] flex flex-col space-y-2">
          <div className="w-full font-semibold border-b py-1">
            Person Info
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold">Camera System</span>
              <span className="text-gray-600">Ring Network</span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold">No of Cameras</span>
              <span className="text-gray-600">12</span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold">UserName</span>
              <span className="text-gray-600">Jyanes</span>
            </div>

            <div className="w-full flex justify-between items-center">
              <span className="font-semibold">Password</span>
              <span className="text-gray-600">123456</span>
            </div>
          </div>
          <div className="w-full font-semibold border-b py-1">
            Special Instruction
          </div>
          <div className="text-gray-600">
            Call first before calling the police
          </div>

          <div className="w-full font-semibold border-b py-1">
            Conceirge Instruction
          </div>
          <div className="text-gray-600">Test Test</div>

          <div className="w-full font-semibold border-b py-1">
            Days/Hours of Service
          </div>

          <div className="w-full flex items-center space-x-1 justify-center">
            {days.map((day, index) => {
              return (
                <div
                key={index}
                  className={`text-white px-3 py-2  ${
                    index === 0
                      ? "rounded-l-md bg-[#132D46]"
                      : "bg-[#01C38D]"
                  } ${
                    index === days.length -1
                      ? "rounded-r-md bg-[#132D46]"
                      : "bg-[#01C38D]"
                  }`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    )
}

export default ClientDetail