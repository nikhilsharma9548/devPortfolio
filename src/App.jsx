import Hero from './Components/Hero'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Resume from './Components/Resume'
import Project from './Components/Project'

function App() {

  return (
    <>
      <div className='w-full min-h-screen sm:h-screen bg-gradient-to-r from-gray-500 to-gray-900 overfllow-hidden  lg:px-[10%] sm:py-[3%] '>
        <Routes>
          {/* <Route path="/" element={<Hero/>} /> */}
          <Route path='/'  element = {<Hero />}>
          <Route index element = {< About/>}/>
          <Route path='/contact' element= {<Contact/>} />
          <Route path='resume' element= {<Resume/>} />
          <Route path='projects' element= {<Project/>} />
        </Route>
        </Routes>
      </div>
        <p className='bg-black text-white text-center p-4'>All Rights Are Reserved By - Devansh</p>
    </>
  )
}

export default App
