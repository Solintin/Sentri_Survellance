import React, { useState } from "react";
import editIcon from "../../../assets/svg/edit.svg";
import setting from "../../../assets/svg/setting.svg";
import archive from "../../../assets/svg/archive.svg";
import event from "../../../assets/svg/event.svg";
import deletes from "../../../assets/svg/delete.svg";
import Eventsettings from "../../Composable/Eventsettings.js";
import EditCamera from "../../Composable/EditCamera.js";

const EventController = () => {
  const [settings, setSettings] = useState(false);
  const [edit, setedit] = useState(false);
  function onClose() {
    setSettings(!settings);
  }
  return (
    <div className="w-full inset-x-0 h-fit bottom-[-2px] absolute bg-white rounded-b-xl">
      {settings && (
        <Eventsettings header={"Camera settings"} onClose={onClose} />
      )}
      {edit && (
        <EditCamera header={"Edit Camera"} onClose={() => setedit(!edit)} />
      )}
      <div className="flex justify-between items-center w-full p-3">
        <div
          onClick={() => setedit(!edit)}
          className="space-x-1 flex items-center"
        >
          <div className="w-[15px] h-[15px]">
            <img src={editIcon} alt="" />
          </div>
          <button className="text-[10px] text-zinc-600">Edit Camera</button>
        </div>
        <div
          onClick={() => setSettings(!settings)}
          className="space-x-1 flex items-center"
        >
          <div className="w-[15px] h-[15px]">
            <img src={setting} alt="" />
          </div>
          <button className="text-[10px] text-zinc-600">Setting</button>
        </div>
        <div className="space-x-1 flex items-center">
          <div className="w-[15px] h-[15px]">
            <img src={archive} alt="" />
          </div>
          <button className="text-[10px] text-zinc-600">Archive</button>
        </div>
        <div className="space-x-1 flex items-center">
          <div className="w-[15px] h-[15px]">
            <img src={event} alt="" />
          </div>
          <button className="text-[10px] text-zinc-600">Event</button>
        </div>
        <div className="space-x-1 flex items-center">
          <div className="w-[15px] h-[15px]">
            <img src={deletes} alt="" />
          </div>
          <button className="text-[10px] text-zinc-600">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default EventController;
