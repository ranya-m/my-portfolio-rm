import React from 'react';
import Navbar from './components/smallCompos/navbar';
import Home from './components/sections/home/home';
import About from './components/sections/about/about';
import Projects from './components/sections/projects/projects';
import Contact from './components/sections/contact/contact';
import Footer from './components/smallCompos/footer';
import Socials from './components/smallCompos/socials.jsx';


export default function App() {
  return (
    <div className=''>
      <Socials/>
       <Navbar/>
       <Home/>
       <About/>
       <Projects/>
       <Contact/>
       <Footer/>
    </div>
  )
}
