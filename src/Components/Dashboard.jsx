import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {
  return (
    <div className='sm:ml-5 sm:rounded-lg sm:w-[75%] w-full h-full bg-gray-700 sm:border text-white border-gray-300/40 sm:mb-20 overflow-y-scroll no-scrollbar '>
        <div className='bg-gray-800 md:flex justify-between sticky top-0 border-b border-gray-300/40 items-center '>
          
          <p className='font-serif fontmomo flex text-xl lg:text-2xl px-3 py-3 items-center '>PORTFOLIO</p>
          <ul className='flex gap-7 lg:text-lg text-base px-3 md:py-3 py-2 md:rounded-bl-2xl rounded-tr '>
            <Link to="/">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </div>
        <Outlet/>
    </div>
  )
}

export default Dashboard