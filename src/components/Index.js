import React from 'react'
import { Link} from "react-router-dom";
import hero_image from "../Assets/img/home_hero_image.jpg";
export default function Index() {
  return (
   <>
     <section className="w-full h-[80vh] relative overflow-hidden">
      <img
        src={hero_image}
        alt="Hero Imagess"
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />
      <div className="container h-full mx-auto px-4 md:px-6 flex items-center justify-center z-20 relative">
        <div className="max-w-2xl text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Where Ideas Meet People</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white">
          Join exciting events, expand your network, and unlock new opportunities together
          </p>
          <Link
            to="/about"
            className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            prefetch={false}
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
<div className='bg-white'>
  <h1 className='text-white'>Piyush Dalmia</h1>
</div>


   </>
  )
}
