import React from 'react'
import { company_logos } from '../assets/assets'
import { motion } from 'motion/react'

const TrustedBy = () => {
  return (
    // <div classsName='flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-white/80'>
    //     <h3 className='font-semibold text-white/80'>Trusted By</h3>

    //     <div classname='flex justify-center items-center gap-10 flex-wrap m-4'>
    //         {company_logos.map((logo, index) => (
    //             <img src={logo} alt="" key={index} className=' max-h-5 sm:max-h-6 drop-shadow-xl' />
    //         ))}
    //     </div>
    // </div>

    <div className='flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-white/80 mb-20'>
        <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{once: true}}
        className='font-semibold text-[#b59067] text-2xl'>Trusted By</motion.h3>
          
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{staggerChildren: 0.1}}
          viewport={{once: true}}
        className='flex justify-center items-center gap-10 flex-wrap m-4'>
            {company_logos.map((logo, index) => (
                <motion.img
                variants={{
                  hidden: { opacity: 0, y: 10},
                  visible: { opacity: 1, y: 0},
                }}
                transition={{duration: 0.6}}
                src={logo} alt="" key={index} className=' h-25 w-35 drop-shadow-xl object-contain ' />
            ))}
        </motion.div>
    </div>
  )
}

export default TrustedBy