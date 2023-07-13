import { useState } from "react";
import close from "../../assets/svg/closes.svg";
import microphone from "../../assets/svg/microphone.svg";
import search from "../../assets/svg/search.svg";
import Button from "./Button";
import Camera from "./Filter/Camera";
import Period from "./Filter/Period";
import EventType from "./Filter/EventType";

function FilterModal({ header, onClose }) {
  const [tab, setTab] = useState("cameras");

  return (
    <div
      onClick={onClose}
      className="fixed right-0 px-4 sm:px-0 top-0 z-[32] h-full right min-[1024px]:float-right bg-[#000]/50 grid place-content-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" space-y-5 bg-white rounded-md px-2 py-4 w-[95vw] md:w-[650px] lg:w-[800px] xl:w-[900px] shadow-ml "
      >
        <div className="flex justify-between">
          <h1 className="text-xl 2xl:text-3xl font-bold text-[#132D46]">{header}</h1>
          <button className="" onClick={onClose}>
            <img src={close} alt="" />
          </button>
        </div>

        <div className="flex space-x-4">
          <Button
            text={"Cameras"}
            isActive={tab === "cameras" ? true : false}
            onClick={() => {
              setTab("cameras");
            }}
          />
          <Button
            text={"Servers"}
            isActive={tab === "servers" ? true : false}
            onClick={() => {
              setTab("servers");
            }}
          />
          <Button
            text={"Events type"}
            isActive={tab === "events" ? true : false}
            onClick={() => {
              setTab("events");
            }}
          />
          <Button
            text={"Period"}
            isActive={tab === "period" ? true : false}
            onClick={() => {
              setTab("period");
            }}
          />
        </div>

        <div className="w-1/2">
          <div className="w-full bg-[#F0F0F2] rounded-md flex  items-center px-1">
            <div className="w-[30px]">
              {" "}
              <img src={microphone} alt="" />{" "}
            </div>
            <input
              type="text"
              className="w-full flex-1 p-3 bg-transparent border-none outline-none"
              placeholder="Search..."
            />
            <div className="w-[30px]">
              <img src={search} alt="" />{" "}
            </div>
          </div>
        </div>

        {tab === "cameras" && <Camera />}
        {tab === "servers" && <EventType/>}
        {tab === "events" && <EventType/>}
        {tab === "period" && <Period/>}
        
        <div className="flex justify-between items-center mt-2">
        <div>Select: 0</div>
        <div className="flex space-x-2 items-center">
          {" "}
          <h2 className="text-[#01C38D]">Select all</h2> <h2>Deselect all</h2>{" "}
        </div>
      </div>

      <div className="flex w-full flex-col space-y-2 sm:space-y-0 sm:flex-row justify-center items-center mt-10 sm:space-x-4">
        <button className="w-[70%] sm:w-[30%] py-2 sm:py-3 border border-[#696E79] rounded-md">
          Cancel
        </button>
        <button className="w-[70%] sm:w-[30%] py-2 sm:py-3 bg-[#132D46] text-white rounded-md">
          Apply filter
        </button>
      </div>
      </div>
    </div>
  );
}

export default FilterModal;
