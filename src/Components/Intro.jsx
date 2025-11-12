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
    <div className='rounded h-full bg-gray-700 border text-white border-gray-300/40  '>
      <div className='flex justify-center items-center h-[40%] px-10'>
        <img src={assets.devansh} className="w-56 rounded" />
      </div>
      <div className= 'h-[60%]'>
        <div className='text-center flex flex-col justify-center relative  bottom-3 items-center '>
          <p className='text-3xl font-semibold'>Devansh</p>
          <p className='px-5 py-2 rounded mt-2 bg-gray-500'>Web Developer</p>
        </div>

      <div>
        <ul className='px-5 mt-3 flex flex-col gap-3'>
          <li className='flex items-center gap-4'><MdEmail  className='text-3xl'/>
            <p className='text-base flex flex-col'> 
              <span className='text-xl font-semibold'>Email</span> 
              devanshb661@gmail.com</p>
          </li>

          <li className='flex items-center gap-3'><FaPhone  className='text-3xl'/>
            <p className='text-base flex flex-col'> 
              <span className='text-xl font-semibold'>Moblie</span>
              +91 7820061773</p>
          </li>

          <li className='flex items-center gap-4'><SlCalender  className='text-3xl'/>
            <p className='text-base flex flex-col'>
              <span className='text-xl font-semibold'>Date of Birth</span>
              25-07-2005</p>
          </li>

          <li className='flex items-center gap-4'><FaLocationDot className='text-3xl'/>
            <p className='text-base flex flex-col'>
              <span className='text-xl font-semibold'>Location</span>
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