import React from 'react'
import {FaBook,FaCircle, FaCode} from 'react-icons/fa'
import { FaCopyright, FaJava } from "react-icons/fa6";
import { SiPython } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Resume = () => {
  return (
    <div className='overflow-y-scroll h-full w-full no-scrollbar'>
        <div className='py-2 px-5 font-sans'>
            <h2 className=' text-3xl font-semibold text-white'>Resume</h2>
            <div className='w-[10%] p-0.5 bg-yellow-400 rounded-lg'></div>
            <div className=''>
                <div className=' flex items-center gap-4 mt-7'>
                    <FaBook className=' text-5xl text-white bg-gray-500 bg-opacity-40 p-2 rounded-xl shadow-xl' />
                    <p className=' text-white text-2xl font-bold'>Education</p>
                </div>
                <div className=' border-l-2 border-white px-5 pt-5 mx-5'>
                    <div className=' flex items-center gap-4 mt-7'>
                        <FaCircle className=' text-2xl text-yellow-300  bg-gray-500 bg-opacity-40 p-1 rounded-full shadow-xl' />
                        <p className='ml-1 font-sans font-semibold text-white'><span className=' font-bold md:text-xl text-lg'>Bachelor of Computer Applications ( BCA )</span><br /><span className=' text-yellow-200'>2022-2025</span><br />BIMT College, Univercity- MJPRU</p>
                    </div>
                    <div className=' flex items-center gap-4 mt-7'>
                        <FaCircle className=' text-2xl text-yellow-300  bg-gray-500 bg-opacity-40 p-1 rounded-full shadow-xl' />
                        <p className=' font-sans font-semibold text-white'><span className=' font-bold text-xl'>Intermediate</span><br /><span className=' text-yellow-200'>2021-2022</span><br />SSPD Inter College, Kasganj</p>
                    </div>
                    <div className=' flex items-center gap-4 mt-7'>
                        <FaCircle className=' text-2xl text-yellow-300  bg-gray-500 bg-opacity-40 p-1 rounded-full shadow-xl' />
                        <p className=' font-sans font-semibold text-white'><span className=' font-bold text-xl'>High School </span><br /><span className=' text-yellow-200'>2019-2020</span><br />SSPD Inter College, Kasganj</p>
                    </div>
                </div>

                {/* Skills Section */}
        <div>
            <h2 className=' text-yellow-200 text-2xl font-sans font-bold mt-7 mb-5'>My Skills</h2>
            <div className=' bg-gray-800 bg-opacity-50 shadow-xl py-5 px-3 mx-2 mb-5 rounded-lg border border-gray-300/40'>
                <h3 className=' font-semibold text-xl text-white'>Web Design<span className=' text-base text-yellow-200 float-end'>80%</span> </h3>
                <div className=' bg-gray-600 bg-opacity-85 rounded-xl overflow-hidden mt-2'>
                    <div className=' bg-yellow-200 p-1 w-[80%] rounded-xl'></div>
                </div>
                <h3 className=' font-semibold text-xl text-white mt-4'>Web Development<span className=' text-base  text-yellow-200 float-end'> 90%</span> </h3>
                <div className=' bg-gray-600 bg-opacity-85 rounded-xl overflow-hidden mt-2'>
                    <div className=' bg-yellow-200 p-1 w-[90%] rounded-xl'></div>
                </div>
                <h3 className=' font-semibold text-xl text-white mt-4'>Graphic Design<span className=' text-base  text-yellow-200 float-end'> 70%</span> </h3>
                <div className=' bg-gray-600 bg-opacity-85 rounded-xl overflow-hidden mt-2'>
                    <div className=' bg-yellow-200 p-1 w-[70%] rounded-xl'></div>
                </div>
                <h3 className=' font-semibold text-xl text-white mt-4'>Photography<span className=' text-base  text-yellow-200 float-end'> 85%</span> </h3>
                <div className=' bg-gray-600 bg-opacity-85 rounded-xl overflow-hidden my-2'>
                    <div className=' bg-yellow-200 p-1 w-[85%] rounded-xl'></div>
                </div>
            </div>
        </div>
            {/* Frontend Skills */}
        <div>
      <h2 className=' text-yellow-200 text-2xl font-sans font-bold mt-7 mb-5'>Frontend Skills</h2>
                <div className=' bg-gray-800 bg-opacity-50 shadow-xl py-5 px-3 mx-2 mb-5 rounded-lg border border-gray-300/40'>
                    <h3 className=' font-semibold text-xl text-white'>HTML  <span className=' text-base text-yellow-200 float-end'>95%</span> </h3>
                    <div className=' bg-gray-600 bg-opacity-85 rounded-xl overflow-hidden mt-2'>
                        <div className=' bg-yellow-200 p-1 w-[95%] rounded-xl'></div>
                    </div>
                    <h3 className=' font-semibold text-xl text-white mt-4'>CSS<span className=' text-base text-yellow-200 float-end'>95%</span> </h3>
                    <div className=' bg-gray-600 bg-opacity-85 rounded-xl overflow-hidden mt-2'>
                        <div className=' bg-yellow-200 p-1 w-[95%] rounded-xl'></div>
                    </div>
                    <h3 className=' font-semibold text-xl text-white mt-4'>JavaScript<span className=' text-base text-yellow-200 float-end'>95%</span> </h3>
                    <div className=' bg-gray-600 bg-opacity-85 rounded-xl overflow-hidden mt-2'>
                        <div className=' bg-yellow-200 p-1 w-[95%] rounded-xl'></div>
                    </div>
                    <h3 className=' font-semibold text-xl text-white mt-4'>React JS<span className=' text-base text-yellow-200 float-end'>90%</span> </h3>
                    <div className=' bg-gray-600 bg-opacity-85 rounded-xl overflow-hidden mt-2'>
                        <div className=' bg-yellow-200 p-1 w-[90%] rounded-xl'></div>
                    </div>
                    <h3 className=' font-semibold text-xl text-white mt-4'>Tailwind CSS<span className=' text-base text-yellow-200 float-end'>90%</span> </h3>
                    <div className=' bg-gray-600 bg-opacity-85 rounded-xl overflow-hidden mt-2'>
                        <div className=' bg-yellow-200 p-1 w-[90%] rounded-xl'></div>
                    </div>
                    <h3 className=' font-semibold text-xl text-white mt-4'>EJS<span className=' text-base text-yellow-200 float-end'>80%</span> </h3>
                    <div className=' bg-gray-600 bg-opacity-85 rounded-xl overflow-hidden mt-2'>
                        <div className=' bg-yellow-200 p-1 w-[80%] rounded-xl'></div>
                    </div>
                </div>
    </div>

    {/* Programming Languages */}
        <div>
           
            <h2 className='gap-3 text-yellow-200 text-2xl flex  items-center font-sans font-bold mt-7 mb-5'>
                <span className='text-white text-3xl  px-2 py-2 bg-gray-400 rounded'><FaCode/></span>
                Programming Languages
            </h2>

            <div className='grid md:grid-cols-2 ls:grid-cols-3 gap-5 bg-gray-800 border font-semibold text-lg border-gray-300/40 py-5 px-3 mx-2 mb-5 rounded text-yellow-200'>
                <div className='flex items-center gap-4 bg-gray-700 border border-gray-300/40 p-2.5 rounded'>
                    <FaCopyright className='text-2xl'/>
                    <p>C Language</p>
                </div>

                <div className='flex items-center gap-4 bg-gray-700 border border-gray-300/40 p-2.5 rounded'>
                    <FaCopyright className='text-2xl'/>
                    <p>C++ Language</p>
                </div>

                <div className='flex items-center gap-4 bg-gray-700 border border-gray-300/40 p-2.5 rounded'>
                    <FaCopyright className='text-2xl'/>
                    <p>C# Language</p>
                </div>

                <div className='flex items-center gap-4 bg-gray-700 border border-gray-300/40 p-2.5 rounded'>
                    <SiPython className='text-2xl'/>
                    <p>Python</p>
                </div>

                <div className='flex items-center gap-4 bg-gray-700 border border-gray-300/40 p-2.5 rounded'>
                    <FaJava className='text-2xl'/>
                    <p>Java</p>
                </div>

                <div className='flex items-center gap-2 bg-gray-700 border border-gray-300/40 p-2.5 rounded'>
                    <GrMysql className='text-2xl'/>
                    <p>My SQL</p>
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Resume