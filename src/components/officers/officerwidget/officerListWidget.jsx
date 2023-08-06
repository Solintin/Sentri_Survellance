import React from "react";
import officer from "../../../assets/svg/officer.svg";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
const OfficerListWidget = ({ type }) => {
  return (
    <Link
      to="/admin/officer/detail"
      className={`mt-2 grid grid-cols-11 w-full items-center gap-4 ${
        type === "alert" ? "bg-red-500 text-white" : "bg-white text-black"
      } rounded-md 2xl:py-5 py-4 px-4 2xl:px-5 text-sm  sm:text-base 2xl:text-xl font-semibold`}
    >
      <div className="flex col-span-2 space-x-2 items-center">
        <input type="checkbox" name="" id="" />
        <img src={officer} alt="" />
        <h2 className=" text-ellipsis overflow-hidden w-full whitespace-nowrap ">
          Jake Paul
        </h2>
      </div>
      <div className="truncate">
        <h2 className=" text-ellipsis overflow-hidden w-full whitespace-nowrap ">
          10
        </h2>
      </div>
      <div className="col-span-2">
        <h2 className="">Maldevis layout, New York</h2>
      </div>
      <div>
        <h2 className="">jakepaul@gmail.com</h2>
      </div>
      <div>
        <h2 className="">5</h2>
      </div>
      <div>
        <h2 className="text-[#01C38D]">M T W T F S S</h2>
      </div>

      <div>
        <h2 className="">09:40AM - 10:00PM</h2>
      </div>
      <div>
        <MdDelete className="text-[25px] 2xl:text-[30px]"/>
      </div>
    </Link>
  );
};

export default OfficerListWidget;
