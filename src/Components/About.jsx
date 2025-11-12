import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='px-5 py-5 overflow-y-scroll h-full w-full no-scrollbar pb-20'>
        <p className='text-2xl font-semibold'>About Me</p>
        <div className='h-1 rounded-full mt-1 bg-yellow-400 flex w-20'></div>

        <div className='mt-5 flex flex-col gap-7 text-base lg:text-lg'>
            <p>
                I am a <span className='font-bold'>Frontend Web Developer</span> from <span className='font-bold'>Kasganj Uttar Pradesh, India</span>. I build the projects using <span className='font-bold'>HTML, CSS, JavaScript, React, TailwindCSS</span>.I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not coding, you'll find me cooking, gaming and reading books.
            </p>
            <p>
                My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.
            </p>
        </div>

        <div className='mt-5 '>
            <p className='text-2xl font-semibold'>What I'm doing</p>
            <div className='h-1 rounded-full mt-1 bg-yellow-400 flex w-28'></div>

          <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-5 mt-5 text-sm'>

            <div className='bg-gray-800/20 border border-gray-300/40 flex p-3 rounded-lg gap-5'>
                <img src={assets.design} className="w-12" />
                <p className='flex flex-col text-xl gap-2 font-semibold'>Web Design
                    <span className='lg:text-base text-sm font-normal'>The most modern and high-quality design made at a professional level.</span>
                </p>
            </div>

           <div className='bg-gray-800/20 border border-gray-300/40 flex p-3 rounded-lg gap-5'>
                <img src={assets.dev} className="w-12" />
                <p className='flex flex-col text-xl gap-2 font-semibold'>Web Design
                    <span className='lg:text-base text-sm font-normal'>The most modern and high-quality design made at a professional level.</span>
                </p>
            </div>

             <div className='bg-gray-800/20 border border-gray-300/40 flex p-3 rounded-lg gap-5'>
                <img src={assets.Photo} className="w-12" />
                <p className='flex flex-col text-xl gap-2 font-semibold'>Web Design
                    <span className='lg:text-base text-sm font-normal'>The most modern and high-quality design made at a professional level.</span>
                </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About