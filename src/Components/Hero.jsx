import Intro from './Intro'
import Dashboard from './Dashboard'

const Hero = () => {
  return (
    <div className='h-full w-full flex flex-col sm:flex-row justify-between sm:px-5 overflow-hidden'>
        <Intro/>
        <Dashboard/>
    </div>
  )
}

export default Hero