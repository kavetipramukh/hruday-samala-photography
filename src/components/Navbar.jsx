import React, { useState } from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"


const Navbar = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
     className='flex justify-between items-center px-4 sm:px-12 lg:px-12 xl:px-12 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-transparent'>


        <img src={assets.bg_logo} alt="" className='w-32 sm:w-40 lg:w-48'/>

        

        <div className='flex items-center gap-2 sm:gap-4'>

            <img src={assets.menu_icon_dark} alt="" className='w-8 sm:hidden' onClick={()=> setSidebarOpen(true)}/>

            {/* <a href="#conatct-us">
                Connect <img src="" alt="" />
            </a> */}
            <div className={`text-white/80 sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-gray-950 max-sm:text-white/85 max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
            
            <img src={assets.close_icon} alt="" className='w-5 absolute right-4 top-4 sm:hidden' onClick={()=> setSidebarOpen(false)}/>
            
            <a onClick={()=> setSidebarOpen(false)} href="#" className='sm:hover:border-b text-md md:text-lg'>Home</a>
            <a onClick={()=> setSidebarOpen(false)} href="#our-work" className='sm:hover:border-b text-md md:text-lg'>Our Work</a>
            <a onClick={()=> setSidebarOpen(false)} href="#services" className='sm:hover:border-b text-md md:text-lg'>Services</a>
            <a onClick={()=> setSidebarOpen(false)} href="#contact-us" className='sm:hover:border-b text-md md:text-lg'>Contact Us</a>
            
        </div>
        </div>
    </motion.div>
  )
}

export default Navbar