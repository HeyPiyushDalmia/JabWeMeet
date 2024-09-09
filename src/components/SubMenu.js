import React from 'react'
import { Link } from 'react-router-dom'
export default function SubMenu() {
  return (
  <>
  <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-20  text-lg text-white p-10 bg-red-100">
    <Link to="/createevent"className='login_button p-5'>Create Event</Link>
    <Link className='login_button p-5'>Recent listed Events</Link>
    <Link className='login_button p-5'>Attended Events</Link>
  </div>
   </>
  )
}
