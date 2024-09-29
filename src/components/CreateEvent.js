import {React, useState} from 'react'
import create_event_background from '../Assets/img/create_event_background.jpg'
import SubMenu from './SubMenu'
import { useNavigate } from 'react-router-dom';


export default function CreateEvent() {

  // do not remove the commented code 

    // const [banner, setBanner] = useState(null);
    // const SponsorsComponent = () => {
    //     const [sponsors, setSponsors] = useState([
    //       { id: 1, name: "", url: "" },
    //     ]);
      
    //     const handleAddSponsor = () => {
    //       const newSponsor = {
    //         id: sponsors.length + 1,
    //         name: "",
    //         url: "",
    //       };
    //       setSponsors([...sponsors, newSponsor]);
    //     }};

        

    // const handleBannerChange = (e) => {
    //     const file = e.target.files ? e.target.files[0] : null;
    //     setBanner(file);
    //   };

    const [createEvent, setCreateEvent] = useState({
      eventname:"",
      description:"",
      audience:"",
      type:"",
      attendees:"",
      ticketPrice:"",
      tech:"",
      agenda:"",
      hostname:"",
      email:"",
      eventdate:"",
      country:"",
      address:"",
      city:"",
      state:"",
      postal:"",
      twitter:"",
      linkedin:"",
      instagram:"",
      website:"",
    });

const navigate = useNavigate();


    const handleInput =(e)=>{
      console.log(e);
      let name = e.target.name;
      let value = e.target.value;
    
      setCreateEvent({...createEvent, 
        [name]:value,
      });
    };

    const handleSubmit = async (e) =>{
      e.preventDefault();
      console.log(createEvent);
      try {
          
        
        const response = await fetch("http://localhost:5000/api/event/create", {
          method:"POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(createEvent),
        
        });
        console.log("Response from the browser",response);
    
        if(response.ok)
          {
            alert("You have created event Successfully");
            setCreateEvent({
              eventname:"",
      description:"",
      audience:"",
      type:"",
      attendees:"",
      ticketPrice:"",
      tech:"",
      agenda:"",
      hostname:"",
      email:"",
      eventdate:"",
      country:"",
      address:"",
      city:"",
      state:"",
      postal:"",
      twitter:"",
      linkedin:"",
      instagram:"",
      website:""});
              navigate("/Myaccount");
    
          }else{
            alert('Event is not created due to some technical reason');
          }
      
      } catch (error) {
          console.log("createEvent", error);
      }
    };
      
    return (

      <>
     <div className="inline mix-blend-multiply">
      <SubMenu/>

     </div>
      
      <div body className=" create_event_img h-max mb-10 mt-5"  >
       <body className="create_event_img h-max mt-2" style={{ backgroundImage:`url(${create_event_background})` }} > 
      {/* <img src={home_image}/>  */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-3xl px-0 create_event_main_div bg-white"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6 border-b create_event_head">
          <h3 className="font-semibold whitespace-nowrap tracking-tight text-3xl">
            Create Event
          </h3>

        </div>

        <form method = "POST" onSubmit={handleSubmit}>

        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
            <label
                    htmlFor="eventname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Event Name
                  </label>
                    <input
                      type="text"
                      name="eventname"
                      id="eventname1"
                      value={createEvent.eventname}
                      onChange={handleInput}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            </div>
            <div className="space-y-2">
            <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900 w-full"
                  >
                   Event Description
                  </label>
                    <textarea
                      id="description"
                      name="description"
                      value={createEvent.description}
                      rows={3}
                      onChange={handleInput}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
            </div>
            {/* <div className="space-y-2">
            <label
                    htmlFor="banner"
                    className="block text-sm font-medium leading-6 text-black"
                  >
                    Banner photo
                  </label>
                        <input
                          id="banner"
                          type="file"
                          accept="image/*"
                          // onChange={handleBannerChange}
                          pattern="/(\.jpg|\.jpeg|\.png|\.gif)$/i"
                          className="border-2 rounded-md w-full px-3 py-2 mt-1"
                        />
            </div> */}
            </div>
            <div className="  pb-12 w-full m-auto p-auto text-center inline mt-5">
            <h2 className="text-base font-semibold leading-7 text-gray-900 mt-5">
               Event Information
              </h2>
             <p className="mt-1 text-sm  text-gray-600 w-full">
               Give some specific information about your awesome event
              </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="space-y-2">
            <label
                    htmlFor="audience"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Target Audience
                  </label>
                    <input
                      type="text"
                      name="audience"
                      id="audience"
                      value={createEvent.audience}
                      onChange={handleInput}
                      placeholder="Ex: Developers, Designers"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            </div>
            <div className="space-y-2">
            <label
                    htmlFor="type"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Event Type
                  </label>
                  
                    <select
                      id="type"
                      name="type"
                      value={createEvent.type}
                      onChange={handleInput}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option></option>
                      <option>In Person</option>
                      <option>Virtual</option>
                    </select>
            </div>
            <div className="space-y-2">
            <label
                    htmlFor="attendees"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Expected Number of Audience
                  </label>
                    <input
                      id="attendees"
                      name="attendees"
                      type="number"
                      value={createEvent.attendees}
                      onChange={handleInput}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            </div>
            <div className="space-y-2">
            <label
                    htmlFor="ticketPrice"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Ticket Price (Enter 0 if free)
                  </label>
                    <input
                      id="ticketPrice"
                      name="ticketPrice"
                      type="number"
                      value={createEvent.ticketPrice}
                      onChange={handleInput}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            </div>
            <div className="space-y-2">
            <label
                    htmlFor="tech"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tech Focused
                  </label>
                    <select
                      id="tech"
                      name="tech"
                      value={createEvent.tech}
                      onChange={handleInput}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option></option>
                      <option>Yes</option>
                      <option>No</option>
                      <option>Not sure</option>
                    </select>
            </div>
            <div className="space-y-2">
            <label htmlFor="agenda" className="block text-sm font-medium leading-6 text-gray-900">
              Agenda
            </label>
            <input type="text" name="agenda"id="agenda" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={createEvent.agenda}
                      onChange={handleInput} 
                    />
            </div>
            </div>

            <div className="  pb-12 w-full m-auto p-auto text-center inline">
            <h2 className="text-base font-semibold leading-7 text-gray-900 mt-5">
                 Event Contact
               </h2>
               <p className="mt-1 text-sm leading-6 text-gray-600">
                 Give some contact information about your awesome event
               </p>
          </div>  


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
            <label htmlFor="hostname" className="block text-sm font-medium leading-6 text-gray-900" >
               Host Name
            </label>
                    <input
                      type="text"
                      name="hostname"
                      id="hostname"
                      value={createEvent.hostname}
                      onChange={handleInput}
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            </div>
            <div className="space-y-2">
            <label
                    htmlFor="eventdate"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Event Date
                  </label>
                    <input
                      type="date"
                      name="eventdate"
                      id="eventdate"
                      value={createEvent.eventdate}
                      onChange={handleInput}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            </div> 
            <div className="space-y-2">
            <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contact Email address
                  </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={createEvent.email}
                      onChange={handleInput}
                      autoComplete="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            </div>

            <div className="space-y-2">
            <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                    <input
                      type="text"
                      name="country"
                      id="country"
                      value={createEvent.country}
                      onChange={handleInput}
                      autoComplete="country"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            </div>

            <div className="space-y-2">
            <label
                    htmlFor="address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street address
                  </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={createEvent.address}
                      onChange={handleInput}
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            </div>

            <div className="space-y-2">
            <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={createEvent.city}
                      onChange={handleInput}
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            </div>

            <div className="space-y-2">
            <label
                    htmlFor="state"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State / Province
                  </label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      value={createEvent.state}
                      onChange={handleInput}
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            </div>

            <div className="space-y-2">
            <label
                    htmlFor="postal"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP / Postal code
                  </label>
                    <input
                      type="number"
                      name="postal"
                      id="postal"
                      value={createEvent.postal}
                      onChange={handleInput}
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            </div>
            </div>

            <div className="  pb-12 w-full m-auto p-auto text-center inline">
            <h2 className="text-base font-semibold leading-7 text-gray-900 mt-5">
                 Social Links
               </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Help your attendees connect with you (Please enter proper full URLs along with https://)
               </p>
  
          </div> 
            

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
            <label htmlFor="twitterl" className="block text-sm font-medium leading-6 text-gray-900">
                    Twitter link
                  </label>
                    <input
                      type="text"
                      name="twitter"
                      id="twitter"
                      value={createEvent.twitter}
                      onChange={handleInput}
                      placeholder="https://www.twitter.com/"
                      pattern="https://.*"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            </div>


            <div className="space-y-2">
            <label
                    htmlFor="linkedinl"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    LinkedIn link
                  </label>
                    <input
                      type="text"
                      name="linkedin"
                      id="linkedin"
                      value={createEvent.linkedin}
                      onChange={handleInput}
                      placeholder="https://www.linkedin.com/"
                      pattern="https://.*"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            </div>


            <div className="space-y-2">
            <label
                    htmlFor="websitel"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Website link
                  </label>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      value={createEvent.website}
                      onChange={handleInput}
                      placeholder="https://coolwebsite.com/"
                      pattern="https://.*"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            </div>



            <div className="space-y-2">
            <label
                    htmlFor="instagraml"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Instagram link
                  </label>

                    <input
                      type="text"
                      name="instagram"
                      id="instagram"
                      value={createEvent.instagram}
                      onChange={handleInput}
                      placeholder="https://www.instagram.com/"
                      pattern="https://.*"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
            </div>

          </div>
          

      <button className="text-white text-2l font-medium px-4 py-2 rounded shadow login_button create_event_button"> Create Event
       </button>
       </div>
          </form>
        </div>
    
 
       </body> 
    </div>
    </>
    )
  }