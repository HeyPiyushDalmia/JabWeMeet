import React from 'react'
import { Link} from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import hero_image from "../Assets/img/home_hero_image.jpg";
export default function Index() {
  return (
   <>
     {/* Hero Section */}

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
            className="inline-flex items-center justify-center h-12 px-6 rounded-md  text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-20"
            
          >
           <button className="navbar_button">Know More </button>
          </Link>
        </div>
      </div>
    </section>

{/* End Hero Section */}

{/* See How it works */}

<section className="container mx-auto p-6 mt-5 mb-5">
      <div className="text-center">
        <p className="text-orange-600 italic">Discover & connect with great local businesses</p>
        <h2 className="text-4xl font-bold mt-2 ">See How it Works</h2>
      </div>
      <div className="flex flex-col items-center mt-10 space-y-8 md:flex-row md:space-y-0 md:space-x-8">
        <div className="flex flex-col items-center">
          {/* <img
            src="/placeholder.svg"
            alt="Choose what to Do"
            className="mb-4"
            width="100"
            height="100"
            style={{ aspectRatio: "100/100", objectFit: "cover" }}
          />  */}
          <FaMapLocationDot className='mb-4 text-red-900 text-7xl' />
          <h3 className="text-xl font-semibold">Choose By Event Location</h3>
          <p className="text-center text-gray-600">
            Luxury hotel in the heart of Bloomsbury. Luxury hotel in the heart of Bloomsbury..
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/placeholder.svg"
            alt="Find What You Want"
            className="mb-4"
            width="100"
            height="100"
            style={{ aspectRatio: "100/100", objectFit: "cover" }}
          />
          <h3 className="text-xl font-semibold">Choose By Event Category</h3>
          <p className="text-center text-gray-600">
            Luxury hotel in the heart of Bloomsbury. Luxury hotel in the heart of Bloomsbury..
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="/placeholder.svg"
            alt="Amazing Places"
            className="mb-4"
            width="100"
            height="100"
            style={{ aspectRatio: "100/100", objectFit: "cover" }}
          />
          <h3 className="text-xl font-semibold">Choose By Event Name</h3>
          <p className="text-center text-gray-600">
            Luxury hotel in the heart of Bloomsbury. Luxury hotel in the heart of Bloomsbury..
          </p>
        </div>
      </div>
    </section>

{/*  End of See How it works */}

   </>
  )
}
