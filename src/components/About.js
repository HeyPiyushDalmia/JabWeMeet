import React from 'react';
// import { Link} from "react-router-dom";
import about_img1 from "../Assets/img/aboutgroup.jpeg";
import piyush from "../Assets/img/piyush2.jpg";
import gaurav from "../Assets/img/gaurav.jpg";
import priya from "../Assets/img/priya.jpg";
export default function About() {
  return (

    <div className="bg-white text-red-600 mt-5">
      {/* <header className="bg-red-600 text-white py-12 md:py-24"> */}
        <div className="bg-red-600 text-white   mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h1 className=" text-6xl font-bold mb-4">Welcome to Our Meetup</h1>
              <p className="text-2xl p-5">
                We are a vibrant community of passionate individuals who come together to share ideas, learn from each
                other, and grow both personally and professionally.
              </p>
            </div>
            <div className="hidden md:block">
              <img
                src={about_img1}
                width="100%"
                height="400"
                alt="Meetup Group"
                className="rounded-lg"
                style={{ aspectRatio: "400/400", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      {/* </header> */}
      <main>
        <div className='sm:flex'>
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-1 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-black">
                  Our mission is to create a welcoming and inclusive environment where individuals can connect,
                  collaborate, and explore new ideas. We believe in the power of community to drive personal and
                  professional growth.
                </p>
              </div>
              
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 text-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-1 items-center">
              <div>
                <h2 className="text-3xl text-red-600 font-bold mb-4">Our Values</h2>
                <p className="text-lg">
                  At the heart of our meetup group are the values that guide our actions and shape our community. We
                  believe in fostering a spirit of collaboration, embracing diversity, and promoting personal growth.
                </p>
              </div>
            </div>
          </div>
        </section>
        </div>

        {/* meet our team */}
        <section className="py-12 bg-red-600 md:py-24 mx-auto">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl text-white font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={gaurav}
                  width="400"
                  height="400"
                  alt="John Doe"
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/400", objectFit: "cover",height:"300px" }}
                />
                <div className="p-4">
                  <h3 className="text-xl text-black font-bold mb-2">Gaurav Sati</h3>
                  <p className="text-red-600 mb-2">Organizer</p>
                  <p className="text-gray-600">
                    John is the founder and driving force behind our meetup group. He is passionate about building a
                    thriving community and connecting like-minded individuals.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={piyush}
                  width="400"
                  height="400"
                  alt="Jane Smith"
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/400", objectFit: "cover" ,height:"300px"}}
                />
                <div className="p-4">
                  <h3 className="text-xl text-black font-bold mb-2">Piyush Dalmia</h3>
                  <p className="text-red-600 mb-2">Co-Organizer</p>
                  <p className="text-gray-600">
                    Jane is a passionate community builder and event organizer. She works tirelessly to ensure our
                    meetups are engaging and valuable for all attendees.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={priya}
                  width="400"
                  height="400"
                  alt="Michael Johnson"
                  className="w-full h-48 object-contain"
                  style={{ aspectRatio: "400/400", objectFit: "cover" ,height:"300px"}}
                />
                <div className="p-4">
                  <h3 className="text-xl text-black font-bold mb-2">Priya Joshi</h3>
                  <p className="text-red-600 mb-2">Community Manager</p>
                  <p className="text-gray-600">
                    Michael is our community manager, responsible for fostering connections, organizing events, and
                    ensuring our members feel welcomed and supported.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
     
    </div>
  )
}


