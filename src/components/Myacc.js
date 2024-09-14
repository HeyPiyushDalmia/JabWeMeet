import React from 'react'

export default function Myacc({mData}) {
    const{id}=mData;
    console.log(mData);
    
  return (
    <div className='flex justify-center'>
        <div className='h-48 w-96 flex justify-center border'>
            <p>{mData.firstName}</p>
        </div>
    </div>
  )
}
