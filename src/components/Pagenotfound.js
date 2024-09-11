import React from 'react'
import Lottie from 'lottie-react'
import pagenotavailable from "../Assets/animation/pagenotfound.json"
export default function pagenotfound() {
  return (
   <>
    <div className='w-4/5 item-center m-auto'>
   <Lottie animationData={pagenotavailable}/>

    </div>
   
   </>
  )
}
