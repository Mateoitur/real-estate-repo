import React, { useEffect, useState } from 'react'
import {assets} from "../assets/assets"

const Navbar = () => {

const [showMobileMenu, setShowMobileMenu] = useState(false)

useEffect(()=>{
  if(showMobileMenu){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'auto'
  }
  return ()=>{
    document.body.style.overflow = 'auto'
  };
},[showMobileMenu])

const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ?  'bg-white/35 backdrop-blur-md ' : 'bg-transparent'} `}> 
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt=""
        className={`h-8 transition duration-300 ${scrolled ? "filter brightness-0" : ""}`}/>
        <ul className={`hidden md:flex gap-7 transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'}`}>
            <a href="#Header" className={`${scrolled ? 'hover:text-gray-800' : 'hover:text-gray-300'}`}>Home</a>
            <a href="#About" className={`${scrolled ? 'hover:text-gray-800' : 'hover:text-gray-300'}`}>About</a>
            <a href="#Projects" className={`${scrolled ? 'hover:text-gray-800' : 'hover:text-gray-300'}`}>Projects</a>
            <a href="#Testimonials" className={`${scrolled ? 'hover:text-gray-800' : 'hover:text-gray-300'}`}>Testimonials</a>
        </ul>
        <button
          className={`cursor-pointer hidden md:block px-8 py-2 rounded-full transition-colors duration-300 ${
            scrolled ? "bg-black text-white hover:bg-gray-800" : "bg-white text-black hover:bg-gray-300"
          }`}
        >
          Sign Up
        </button>
        <img onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
      </div>


      {/* --------- Mobile Menu --------- */}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'w-0 h-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={()=> setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={()=> setShowMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={()=> setShowMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
