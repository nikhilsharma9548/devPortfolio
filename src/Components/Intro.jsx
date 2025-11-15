import React from 'react'

import { assets } from '../assets/assets'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";

import { RiInstagramFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Intro = () => {
  return (
    <>
    <div className='px-2 sm:rounded-lg h-full bg-gray-700 sm:border flex flex-col  text-white border-gray-300/40 sm:py-1.5 py-5'>
      <div className='flex sm:flex-col flex-row justify-center sm:items-center sm:px-10  gap-7 py-2 sm:gap-0'>
        <img src={assets.devansh} className="w-48 rounded" />
         <div className='text-center flex flex-col sm:justify-center items-center '>
          <p className='text-3xl font-semibold sm:pt-2'>Devansh</p>
          <p className='px-5 py-2 rounded sm:mt-2 mt-1 sm:text-base text-sm bg-gray-500'>Web Developer</p>

          {/* social links */}
         <div className='sm:hidden '>
        <ul className=' grid grid-cols-2 xs:grid-cols-4 sm:flex px-5 border border-gray-300/40 bg-gray-800/40 py-3 items-center gap-7  mt-3 rounded text-xl text-gray-300'>
          <a href='https://www.instagram.com/devanshbhardwaj17?igsh=MWptNjk5eDdjcjYwYg=='><RiInstagramFill/></a>
          <a href='https://www.linkedin.com/in/devansh-bhardwaj29?utm_source=share_via&utm_content=profile&utm_medium=member_android'><SiLinkedin/></a>
          <a href='https://github.com/devanshbhardwaj17'><FaGithub/></a>
          <a href='https://wa.me/7820061773'><FaSquareWhatsapp/></a>
        </ul>
      </div> 
   
        </div>  
      </div>
      <div className= 'flex sm:flex-col justify-between h-full '>   
      <div>
        <ul className='xs:px-5 px-3 mt-3 flex flex-col gap-3'>
          <li className='flex items-center gap-4'><MdEmail  className='text-3xl'/>
            <p className='sm:text-base text-sm flex flex-col'> 
              <span className='sm:text-xl font-semibold'>Email</span> 
              devanshb661@gmail.com</p>
          </li>

          <li className='flex items-center gap-3'><FaPhone  className='text-3xl'/>
            <p className='sm:text-base text-sm flex flex-col'> 
              <span className='sm:text-xl font-semibold'>Moblie</span>
              +91 7820061773</p>
          </li>

          <li className='flex items-center gap-4'><SlCalender  className='text-3xl'/>
            <p className='sm:text-base text-sm flex flex-col'>
              <span className='sm:text-xl font-semibold'>Date of Birth</span>
              25-07-2005</p>
          </li>

          <li className='flex items-center gap-4'><FaLocationDot className='text-3xl'/>
            <p className='sm:text-base text-sm flex flex-col'>
              <span className='sm:text-xl font-semibold'>Location</span>
              Kasganj, Uttar Pradesh</p>
          </li>
        </ul>
      </div>
        
      </div>
    </div>
    </>
  )
}

export default Intro