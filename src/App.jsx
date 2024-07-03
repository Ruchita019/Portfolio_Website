import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About_me from './Components/About_me/About_me'
import Skills from './Components/Skills/Skills'
import Project from './Components/Projects/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-200 antialiased selection:bg-purple-300 selection:text-bg-purple-950'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>
      <div className='container mx-auto'>
      <Navbar/>
        <Home/>
        <About_me/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
      </div>  
    </div>
  )
}

export default App
