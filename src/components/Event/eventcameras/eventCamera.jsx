import React from 'react';
import EventCameraWidget from './eventcamerawidget/eventCameraWidget';

const EventCamera = () => {
  
    return (
        <div className='w-full grid py-16 2xl:py-24 sm:py-20 px-2 sm:px-6 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 items-center gap-5'>
         <EventCameraWidget/>
         <EventCameraWidget/>
         <EventCameraWidget/>
         <EventCameraWidget/>

        </div>
    )
}

export default EventCamera