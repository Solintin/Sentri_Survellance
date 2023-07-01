import React,{} from 'react';
import edit from "../../../assets/svg/edit.svg";
import setting from "../../../assets/svg/setting.svg";
import archive from "../../../assets/svg/archive.svg";
import event from "../../../assets/svg/event.svg";
import deletes from "../../../assets/svg/delete.svg";

const EventSettings = () => {
   
    return (
        <div className='w-full inset-x-0 h-fit bottom-[-2px] absolute bg-white rounded-b-xl'>
            <div className='flex justify-between items-center w-full p-3'>
                <div className='space-x-1 flex items-center'>
                    <div className='w-[15px] h-[15px]'>
                        <img src={edit} alt="" />
                    </div>
                    <span className='text-[10px] text-zinc-600'>Edit Camera</span>
                </div>
                <div className='space-x-1 flex items-center'>
                    <div className='w-[15px] h-[15px]'>
                    <img src={setting} alt="" />
                    </div>
                    <span className='text-[10px] text-zinc-600'>Setting</span>
                </div>
                <div className='space-x-1 flex items-center'>
                    <div className='w-[15px] h-[15px]'>
                    <img src={archive} alt="" />
                    </div>
                    <span className='text-[10px] text-zinc-600'>Archive</span>
                </div>
                <div className='space-x-1 flex items-center'>
                    <div className='w-[15px] h-[15px]'>
                    <img src={event} alt="" />
                    </div>
                    <span className='text-[10px] text-zinc-600'>Event</span>
                </div>
                <div className='space-x-1 flex items-center'>
                    <div className='w-[15px] h-[15px]'>
                        <img src={deletes} alt="" />
                    </div>
                    <span className='text-[10px] text-zinc-600'>Delete</span>
                </div>
            </div>
        </div>
    )
}

export default EventSettings