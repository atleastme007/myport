// import React from 'react'

function Navbar() {
  return (
    <div className="flex justify-evenly items-center bg-slate-700 text-slate-300 "> Hey
        <div className=" flex justify-between items-center bg-slate-700">
      <div className="hover:text-white">
        Home
      </div>
      <div className="hover:text-white">
        About
      </div>
      <div className="hover:text-white">
        Contacts
      </div> 
      <div className="hover:text-white">
      Signup
        </div>
        <div className="hover:text-white">
            Login
        </div>
        </div>
    </div>
  )
}

export default Navbar
