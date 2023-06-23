import { useState } from "react";
import close from "../../assets/svg/closes.svg";
import microphone from "../../assets/svg/microphone.svg";
import search from "../../assets/svg/search.svg";
import Button from "./Button";
import Camera from "./Filter/Camera";

function FilterModal({ header, onClose }) {
  const [tab, setTab] = useState("cameras");

  return (
    <div className="fixed inset-0 bg-[#000]/50 grid place-content-center">
      <div className=" space-y-5 bg-white rounded-md px-2 py-4  w-[900px] shadow-ml ">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold text-[#132D46]">{header}</h1>
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
        {tab === "servers" && <div>Serves</div>}
        {tab === "events" && <div>events</div>}
        {tab === "period" && <div>Period</div>}
      </div>
    </div>
  );
}

export default FilterModal;
