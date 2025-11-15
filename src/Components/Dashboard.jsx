import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='sm:ml-5 sm:rounded-lg sm:w-[75%] w-full h-full bg-gray-700 sm:border text-white border-gray-300/40 sm:mb-20 overflow-y-scroll no-scrollbar '>
        <div className='bg-gray-800 md:flex justify-between sticky top-0 border-b border-gray-300/40 items-center '>
          
          <p className='font-serif fontmomo flex text-xl lg:text-2xl px-3 py-3 items-center '>PORTFOLIO</p>
          <ul className='flex gap-7 lg:text-lg text-base px-3 md:py-3 py-2 md:rounded-bl-2xl rounded-tr '>
            <NavLink className={({ isActive }) => isActive ? "text-yellow-400 border-b" : "text-white" } to="/">About</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-yellow-400 border-b" : "text-white" } to="/resume">Resume</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-yellow-400 border-b" : "text-white" } to="/Projects">Projects</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-yellow-400 border-b" : "text-white" } to="/contact">Contact</NavLink>
          </ul>
        </div>
        <Outlet/>
    </div>
  )
}

export default Dashboard