import React from 'react';
import hruday from '../assets/hruday.png';
// import hruday1 from '../assets/hruday1.png';
import toast from 'react-hot-toast';
import { motion } from "motion/react";

export default function EditorialContact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    formData.append("access_key", "61750c80-c673-4ff4-be8d-2e07fd929787");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thanks for contacting us! We will get back to you soon.");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message)
    }

   
  }


  return (
    <section id='contact-us' className="bg-black text-white px-6 md:px-20 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-light leading-tight tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            DO NOT LET YOUR <br />
            MEMORIES <span className="italic">JUST</span> <br />
            PASSING AWAY
          </motion.h1>

          <motion.div 
            className="mt-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm font-medium mb-6 uppercase text-[#b59067]">
              Name <span className='text-gray-400 px-4'>Hrudey Samala</span>
            </p>
            <p className="text-sm font-medium mb-6 text-[#b59067]">
              Phone No. <span className='text-gray-400 px-4'>+91 9876543210</span>
            </p>
            <p className="text-sm font-medium mb-6 text-[#b59067]">
              Email address <span className='text-gray-400 px-4'>hrudeysamal@gmail.com</span>
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div 
          className="space-y-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <img
              src={hruday}
              alt="Preview"
              className="w-40 h-48 object-cover grayscale"
            />
          </motion.div>

          <motion.form 
            onSubmit={onSubmit} 
            className="space-y-8 max-w-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[1, 2, 3, 4, 5].map((num, index) => {
              const isTextarea = num === 5;
              const fieldProps = {
                name: ['name', 'phone', 'email', 'location', 'message'][index],
                placeholder: ['Name', 'Phone Number', 'Email Address', 'Location', 'Your Message'][index],
                type: num === 3 ? 'email' : 'text',
                required: true
              };
              
              return (
                <motion.div 
                  key={num}
                  className={`flex ${isTextarea ? 'items-start' : 'items-center'} gap-6 border-b border-[#b59067] ${isTextarea ? '' : 'pb-3'}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <span className={`text-sm text-[#b59067] ${isTextarea ? 'mt-1' : ''}`}>0{num}.</span>
                  {isTextarea ? (
                    <textarea 
                      {...fieldProps}
                      className="w-full bg-transparent focus:outline-none placeholder:text-gray-400"
                    />
                  ) : (
                    <input
                      {...fieldProps}
                      className="w-full bg-transparent focus:outline-none placeholder:text-gray-400"
                    />
                  )}
                </motion.div>
              );
            })}
            
            <motion.button 
              type='submit' 
              className="transform transition-all duration-350 hover:bg-[#b59067] hover:text-white border border-[#b59067] text-gray-400 px-6 py-3 rounded-full w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
