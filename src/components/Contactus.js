import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
const Contactus=() => {
  const [userData, setUserData] = useState ({
		name : "",
		email:"",
    feedback:"",
	});

  let name,value;
  const postUserData = (event) =>{
    name = event.target.name;
    value = event.target.value;
    setUserData({...userData, [name]:value})
  }

  //connection with the firebase

  const submitData = async(event) =>{
          event.preventDefault();
          // destructure
          const {name, email, feedback} = userData;
          if(name && email && feedback)
            {

           
          const res = await fetch("https://jabwemeet-51e30-default-rtdb.firebaseio.com/userContactus.json",
            { method: "POST",
            Headers:
            {
              "Content-Type": "application/json"
            },
            body:JSON.stringify({
              name,
              email,
              feedback
            })
          }
          );
          if(res)
            {
              setUserData({
                name : "",
                email:"",
                feedback:"",
              })
              alert("your query has been submitted");
            }else{
              alert("Please fill the data");
            } 
          }
          else{
            alert("Please fill the data");
          } 
          
  };

 




  return (
    <div>

<section className="bg-red-100 dark:bg-red-100">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">"Got questions, ideas, or just want to say hi? We're here to help you make every meeting memorable. Reach out, and let's create something amazing together!"</p>
      
  </div>
</section>

<div className="flex flex-col items-center w-full min-h-screen p-8 bg-white">
      <div className="grid w-full max-w-6xl gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
              <FaPhoneAlt className="w-10 h-10 text-[#E65100]" />
              <div>
                <h3 className="text-lg font-bold">Phone</h3>
                <p className="text-gray-600">+2569 09833 59</p>
                <p className="text-gray-600">+2569 09833 59</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
              <FaMapMarkerAlt className="w-10 h-10 text-[#E65100]" />
              <div>
                <h3 className="text-lg font-bold">Address</h3>
                <p className="text-gray-600">861 S.Grand Prairie Pkwy</p>
                <p className="text-gray-600">Grand Prairie TX 5891</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
              <IoMdMail className="w-10 h-10 text-[#E65100]" />
              <div>
                <h3 className="text-lg font-bold">Email</h3>
                <p className="text-gray-600">customersupport@jabwemeet.com</p>
                <p className="text-gray-600">www.jabwemeet.com</p>
              </div>
            </div>
          </div>
          <form className="space-y-4" method="POST">
            <div className="space-y-2">
              <label className="mx-2" >Name</label>
              <input className="mx-5 w-4/5 h-3/3 px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
              id=""
              name="name"
              placeholder="Enter your name "
              value={userData.name}
              onChange={postUserData}
              />
            </div>
            <div className="space-y-2">
              <label className="mx-2" >Email</label>
              <input type="email" className='mx-5 w-4/5 h-3/3 px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              id=""
              name="email" 
              placeholder="Enter your email"
              value={userData.email}
              onChange={postUserData}
              />
            </div>
            <div className="space-y-2">
              <label className="mx-2">Feedback</label>
              <textarea  className="min-h-[100px] mx-5 w-4/5 h-3/3 px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
              id=""
              name="feedback" 
              placeholder="Enter your feedback"
              value={userData.feedback}
              onChange={postUserData}
              />
            </div>
            <button type="submit" className="login_button flex item-center  w-4/5   hover: ml-auto m-auto" onClick={submitData}>Submit Feedback</button>
          </form>
        </div>
        <div className="w-full h-[500px]">
          <iframe
            title="Google Maps"
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531590452!3d-37.8162797420216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b3b3b3b3b3b!2sEnvato!5e0!3m2!1sen!2sus!4v1632972833450!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>

    </div>
  )
}
export default Contactus
