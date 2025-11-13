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
            <div className=' h-96 mx-7 my-5 overflow-hidden bg-white rounded-lg'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26836.35786983341!2d78.62314582297796!3d27.804695572087333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974e017ea59c0cf%3A0xd9e1865d96650334!2sKasganj%2C%20Uttar%20Pradesh%20207123!5e1!3m2!1sen!2sin!4v1761446053910!5m2!1sen!2sin" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=' w-full h-full '></iframe>
            </div>

            <div className='py-2 px-2'>
              <p className='flex items-center font-semibold text-2xl gap-2'><span className='p-2 rounded bg-gray-500'><FaRegFileAlt/></span>Contact Form</p>
 
              <div className='flex flex-col justify-center px-5 py-5 bg-gray-800 gap-7'>
                <div className='flex gap-5 flex-col ls:flex-row'>
                <input type="text" placeholder='Name' className='border p-2'/>
                <input type="email" placeholder='email' className='border p-2'/>
                </div>
                <textarea type="text" rows={10} className='border'/>
                
              </div>
            </div>
            </div> 
        </div>
    </div>
  )
}

export default Contact