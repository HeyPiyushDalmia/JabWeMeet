import React, { useState, useEffect } from "react";

const Event = () => {
  const [events, setEvents] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getEvent = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/event/myaccount', {
        method: "GET",
      });

      console.log("response", response);

      if (response.ok) {
        const data = await response.json();
        console.log(data.response);
        setEvents(data.response);
      } else {
        // Handle response errors if necessary
        setError(new Error("Failed to fetch events"));
      }
    } catch (error) {
      console.log(`Error: ${error}`);
      setError(error); // Set error state
    } finally {
      setLoading(false); // Set loading to false after the fetch attempt
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Check if events is an array before mapping
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Events which you can attend</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((curElem, index) => (  // Corrected from event.map to events.map
            <div key={index} className="bg-red-100 rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{curElem.eventname}</h3>
                <p className="text-gray-600 mb-4">{curElem.description}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-red-600 hover:bg-black text-white font-bold py-2 px-4 rounded w-full">
                    Contact For Rent
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
