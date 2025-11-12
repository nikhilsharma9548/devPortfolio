import React from 'react'
import Intro from './Intro'
import Dashboard from './Dashboard'

const Hero = () => {
  return (
    <div className='h-full w-full flex justify-between overflow-hidden'>
        <Intro/>
        <Dashboard/>
    </div>
  )
}

export default Hero