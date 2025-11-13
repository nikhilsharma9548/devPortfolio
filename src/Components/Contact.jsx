import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className='px-5 py-5'>
        <h1 className='text-2xl font-semibold'>Contact Us</h1>
        <div className='h-1 rounded-full w-24  bg-yellow-400'></div>
        <div className='mt-5'>
            <p className='text-3xl flex items-center gap-3'><span className='bg-gray-500 p-1.5 rounded'><FaLocationDot/></span>Location</p>
           <div>
            <div className=' h-96  my-5 overflow-hidden bg-white rounded-lg'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26836.35786983341!2d78.62314582297796!3d27.804695572087333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974e017ea59c0cf%3A0xd9e1865d96650334!2sKasganj%2C%20Uttar%20Pradesh%20207123!5e1!3m2!1sen!2sin!4v1761446053910!5m2!1sen!2sin" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=' w-full h-full '></iframe>
            </div>

            <div className='py-2 px-2'>
              <p className='flex items-center font-semibold text-2xl gap-2'>
                <span className='p-2 rounded flex flex-col bg-gray-500'><FaRegFileAlt/>
                </span>Contact Form 
              </p>
              <div className='h-1 rounded-full relative left-12 w-28 bg-yellow-400'></div>
 
              <div className='flex flex-col justify-center items-end px-5 py-5 mt-5 rounded-lg bg-gray-800 gap-7'>
                <div className='flex w-full  flex-col gap-5'>
                  <div className='flex gap-5 flex-col ls:flex-row items-center justify-center'>
                <input type="text" placeholder='Name' className='border p-2 rounded w-full bg-gray-500/40 outline-yellow-400'/>
                <input type="email" placeholder='Email' className='border p-2 rounded w-full bg-gray-500/40 outline-yellow-400'/>
                </div>
                <textarea type="text" rows={10} className='border rounded w-full bg-gray-500/40 p-2 outline-yellow-400 '/>
                </div>
                <button className='flex items-center gap-2 md:text-xl text-base p-2 font-semibold bg-gray-600/40 text-yellow-400 rounded hover:bg-gray-600 transition-all duration-200 border border-gray-300/40'><BsFillSendFill/>Send Message</button>
              </div>
            </div>
            </div> 
        </div>
    </div>
  )
}

export default Contact