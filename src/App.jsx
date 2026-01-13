import Navbar from './components/Navbar'
import assets from './assets/assets'
import TrustedBy from './components/TrustedBy'
import DomeGallery from './components/DomeGallery';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast'
import { motion } from "motion/react"



const App = () => {
  return (
    <>
      <div className='bg-black relative h-screen overflow-hidden'>
        <Toaster />
        <Navbar />
        <div>
        <motion.img
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{once: true}}
         src={assets.camera} alt="" className='absolute  h-full  top-20 left-0 sm:left-50 lg:left-75 xl:left-120 2xl:left-170'/>
        <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{once: true}}
         className='text-white text-center text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] pt-20 relative z-10'>Turning moments into <span className='bg-gradient-to-r from-[#b59067] to-[#914f04] bg-clip-text text-transparent'>digital</span> memories</motion.h1>
        <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{once: true}}
         className='text-[#b59067] sm:text-sm md:text-lg font-medium text-center pt-2 relative z-10'>Capturing Life's Moments and Turning Memories into Timeless Visual Masterpieces</motion.p>
        </div>
      </div>
      
      <div className='bg-black'>
        
        {/* <StackedSliderMotion /> */}
      <div id='our-work' style={{  height: '100vh' }}>
        <div className="text-center px-4">
        <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{once: true}}
         className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-widest text-white">
          Our Works
        </motion.h1>
        <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{once: true}}
         className="mt-2 sm:text-sm md:text-lg font-medium bg-gradient-to-r from-[#b59067] to-[#914f04] bg-clip-text text-transparent ">
          A glimpse of our featured projects
        </motion.p>
      </div >
        <DomeGallery className="w-full h-full" />
      </div>
        
      {/* <div>
        <EventsWeCover  />
      </div> */}
      <div>
        <Services />
      </div>
      <TrustedBy />
      <div>
        <ContactUs /> 
      </div>
      <Footer />
      </div>
    </>
  )
}

export default App