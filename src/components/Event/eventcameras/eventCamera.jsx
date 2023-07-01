import React from 'react';
import EventCameraWidget from './eventcamerawidget/eventCameraWidget';

const EventCamera = () => {
  
    return (
        <div className='w-full grid p-2 sm:p-6 grid-cols-1 xl:grid-cols-2 items-center gap-5'>
         <EventCameraWidget/>
         <EventCameraWidget/>
         <EventCameraWidget/>
         <EventCameraWidget/>

        </div>
    )
}

export default EventCamera