import React from "react";
import notCamera from "../../../assets/svg/notCamera.svg";

function Camera() {
  return (
    <div>
      <div className="w-full py-14 flex flex-col justify-center items-center bg-[#F0F0F2]">
        <img src={notCamera} alt="" />
        <div className="w-[200px] text-center">
          <h2 className="text-[#696E79] font-medium"> No camera available for selection</h2>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div>Select: 0</div>
        <div className="flex space-x-2 items-center">
          {" "}
          <h2 className="text-[#01C38D]">Select all</h2> <h2>Deselect all</h2>{" "}
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 space-x-4">
        <button className="md:px-20 py-3 border border-[#696E79] rounded-md">
          Cancel
        </button>
        <button className="md:px-20 py-3 bg-[#132D46] text-white rounded-md">
          Apply filter
        </button>
      </div>
    </div>
  );
}

export default Camera;
