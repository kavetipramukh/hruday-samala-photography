import { FaInstagram, FaWhatsapp, FaSnapchatGhost, FaLinkedinIn,FaFacebookF, FaGithub } from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import { Heart } from "lucide-react";
import logo from '../assets/logo.png';
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/15 pt-2 bg-black text-gray-400 px-6 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-8 border-b border-white/10 lg:items-center">

        {/* LEFT SIDE */}
        <div>
          <div className="flex items-center gap-3 ">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{once: true}}
            src={logo} alt="Hruday Photography" className="h-8 object-contain"/>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{once: true}}
            className="text-[#b59067] text-xl font-semibold">Hruday Photography</motion.h2>
          </div>

        </div>

        <motion.div 
          className="grid grid-cols-3 xl:grid-cols-6 gap-6 text-2xl text-gray-400 justify-items-center lg:justify-self-end"
          // initial={{ opacity: 0, y: 20 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6, delay: 0.3 }}
          // viewport={{ once: true }}
        >
          {[
            { icon: FaInstagram, name: "Instagram" },
            { icon: FaFacebookF, name: "Facebook" },
            { icon: FaWhatsapp, name: "WhatsApp" },
            { icon: FaSnapchatGhost, name: "Snapchat" },
            { icon: FaLinkedinIn, name: "LinkedIn" },
            { icon: SiThreads, name: "Threads" }
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a 
                key={social.name}
                className="hover:text-white transition flex items-center gap-2 hover:scale-110" 
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon />
                <span className="text-sm text-[#b59067]">{social.name}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      <motion.div 
        className="flex flex-col md:flex-row justify-between items-center py-8 text-md xl:text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="text-sm lg:text-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <strong className="font-600 text-white">Copyright ©</strong> 
          <span className="text-[#b59067]"> 2025 Pramukh - All Right Reserved. </span>
        </motion.p>
        <motion.div 
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <span>Made with</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="text-red-400 w-4 h-4"/>
          </motion.div>
          <span className="text-[#b59067]">By Pramukh</span>
          <motion.a 
            className=" transition flex gap-2" 
            href="#"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <FaLinkedinIn  className="hover:text-[#b59067] h-5 w-5"/>
            <FaGithub className="hover:text-[#b59067] h-5 w-5"/>
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="flex justify-center border-t border-white/10 pt-6 pb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.span 
          className="cursor-pointer text-xs uppercase tracking-widest text-gray-500 hover:text-[#b59067] transition" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to top
        </motion.span>
      </motion.div>

    </footer>
  );
}
