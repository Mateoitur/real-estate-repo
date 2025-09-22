import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' 
    style={{backgroundImage: "url('/header_img.png')"}} id='Header'>
      <Navbar/>
      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      transition={{duration: 1.5}}
      whileInView={{opacity:1, y:0}}
      viewport={{ once: true }}
      className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
        <div className='space-x-6 mt-16'>
            <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            href="#Projects" className='inline-block border border-white px-9 py-2 rounded'>Projects</motion.a>
            <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 500, damping:20 }}
            href="#Contact" className='inline-block bg-blue-500 px-9 py-2.5 rounded'>Contact Us</motion.a>        
        </div>
      </motion.div>
    </div>
  )
}

export default Header
