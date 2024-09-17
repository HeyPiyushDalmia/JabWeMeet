import React from 'react'
import ab from "../Assets/img/aboutgroup.jpeg"
export default function Myacc({mData}) {
    const{id,eventname,eventDescription}=mData;
    console.log(mData);
    
  return (
    <div className='flex sm:h-56 justify-center p-5'>
        <div className=' flex flex-col border h-1/5 w-2/5 sm:h-5/6 sm:w-2/5 sm:flex-row sm:border'>
            <p>{id}</p>
            <div className='overflow-hidden sm:w-1/2'>
            <img className="object-cover" src={ab} alt="event"
            style={{objectFit: "contain"}}
            />
            </div>
            <div className='overflow-hidden pr-10 pl-10'>
              <h1 className='overflow-hidden pr-5 text-lg font-bold'>{eventname}
              </h1>
              <p> {eventDescription}</p>
            </div>
        </div>
    </div>
  )
}
