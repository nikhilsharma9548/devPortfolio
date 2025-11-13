import React from 'react'

import { assets } from '../assets/assets'
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";

import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Intro = () => {
  return (
    <>
    <div className='px-2 sm:rounded-lg h-full bg-gray-700 sm:border flex flex-col justify-between text-white border-gray-300/40 sm:py-0 py-5'>
      <div className='flex sm:flex-col flex-row justify-center sm:items-center h-[50%] sm:px-10 px-1 gap-7 sm:gap-0'>
        <img src={assets.devansh} className="sm:w-56 xs:w-48 w-42 rounded" />
         <div className='text-center flex flex-col sm:justify-center items-center '>
          <p className='text-3xl font-semibold pt-2'>Devansh</p>
          <p className='px-5 py-2 rounded mt-2 sm:text-base text-sm bg-gray-500'>Web Developer</p>
        </div>

      </div>
      <div className= 'h-[50%] mt-2'>
       
      <div>
        <ul className='xs:px-5 px-3 mt-3 flex flex-col gap-3'>
          <li className='flex items-center gap-4'><MdEmail  className='text-3xl'/>
            <p className='sm:text-base text-sm flex flex-col'> 
              <span className='sm:text-xl font-semibold'>Email</span> 
              devanshb661@gmail.com</p>
          </li>

          <li className='flex items-center gap-3'><FaPhone  className='text-3xl'/>
            <p className='sm:text-base text-smflex flex-col'> 
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

      <div>
        <ul className='flex xs:justify-center px-3 border border-gray-300/40 bg-gray-800/40 py-3 items-center gap-7  mt-3 rounded text-2xl text-gray-300'>
          <li><FaTwitter/></li>
          <li><RiInstagramFill/></li>
          <li><SiLinkedin/></li>
          <li><FaGithub/></li>
          <li><FaSquareWhatsapp/></li>
        </ul>
      </div>
      </div>
    </div>
    </>
  )
}

export default Intro