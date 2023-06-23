import React from "react";
import call from "../../../assets/svg/call.svg";

const EmergencyContact = ({ iscontact, setiscontact }) => {
  return (
    <div
      className={iscontact ? "absolute full bottom-[50px] min-w-max" : "hidden"}
    >
      <div
        className={
          "relative w-[280px] p-4 sm:p-6 z-[300] h-fit flex flex-col text-[11px] text-black font-semibold bg-white rounded-md shadow-md space-y-4"
        }
      >
        <div
          onClick={(e) => {
            e.stopPropagation();

            setiscontact(!iscontact);
          }}
          className="w-full h-full fixed inset-0 z-[40] bg-none"
        ></div>

        <div className="flex full flex-col space-y-3 cursor-pointer">
          <div className="text-sm font-semibold text-[#132D46] border-b pb-2 ">
            Emergency Contacts
          </div>
          <div className="flex justify-between items-center w-full">
            <div>
              <div className="text-[#132D46] font-semibold text-[12px] sm:text-sm">
                John Doe
              </div>
              <div className="text-[10px] sm:text-[12px] text-[#01C38D]">
                983323423422
              </div>
            </div>
            <div className="w-[20px] h-[20px]">
              <img src={call} alt="" className="w-full h-full" />
            </div>
          </div>

          <div className="flex justify-between items-center w-full">
            <div>
              <div className="text-[#132D46] font-semibold text-[12px] sm:text-sm">
                John Doe
              </div>
              <div className="text-[10px] sm:text-[12px] text-[#01C38D]">
                983323423422
              </div>
            </div>
            <div className="w-[20px] h-[20px]">
              <img src={call} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div>
              <div className="text-[#132D46] font-semibold text-[12px] sm:text-sm">
                John Doe
              </div>
              <div className="text-[10px] sm:text-[12px] text-[#01C38D]">
                983323423422
              </div>
            </div>
            <div className="w-[20px] h-[20px]">
              <img src={call} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContact;
