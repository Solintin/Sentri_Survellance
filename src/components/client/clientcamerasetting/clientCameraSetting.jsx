import React,{useState} from "react";
import close from "../../../assets/svg/closes.svg";
import Button from "../../Composable/Button";
const ClientCameraSetting = ({ header, onClose }) => {
    const [tab, setTab] = useState("video");
    return (
        <div
      onClick={onClose}
      className="fixed right-0 px-4 sm:px-0 top-0 z-[32] h-full right min-[1024px]:float-right bg-[#000]/50 grid place-content-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" space-y-5 bg-white h-[300px] rounded-md px-2 py-4 w-[95vw] md:w-[650px] lg:w-[800px] xl:w-[900px] shadow-ml "
      >
        <div className="flex justify-between">
          <h1 className="text-xl 2xl:text-3xl font-bold text-[#132D46]">{header}</h1>
          <button className="" onClick={onClose}>
            <img src={close} alt="" />
          </button>
        </div>
        <div className="flex space-x-4 justify-center items-center">
          <Button
            text={"Video Settings"}
            isActive={tab === "video" ? true : false}
            onClick={() => {
              setTab("video");
            }}
          />
          <Button
            text={"Audio"}
            isActive={tab === "audio" ? true : false}
            onClick={() => {
              setTab("audio");
            }}
          />
             <Button
            text={"Cancel"}
            isActive={tab === "cancel" ? true : false}
            onClick={() => {
              setTab("cancel");
            }}
          />
            <Button
            text={"Revoke Invitation"}
            isActive={tab === "revoke" ? true : false}
            onClick={() => {
              setTab("revoke");
            }}
          />
        </div>

      
        </div>
        </div>
    )
}

export default ClientCameraSetting 