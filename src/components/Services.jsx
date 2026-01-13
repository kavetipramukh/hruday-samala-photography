import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useState, useMemo } from "react";
import { services } from "../assets/assets.js";


const SPEEDS = { normal: 0.06, hover: 0.015 };
const SPRING_CONFIG = { type: "spring", stiffness: 220, damping: 22 };

export default function InfiniteCarousel() {
  const x = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const doubledServices = useMemo(() => [...services, ...services, ...services], []);

  useAnimationFrame((_, delta) => {
    if (!isDragging) {
      const currentX = x.get();
      const itemWidth = 344; // 320px + 24px gap
      const resetPoint = -itemWidth * services.length;
      
      if (currentX <= resetPoint) {
        x.set(0);
      } else {
        x.set(currentX - delta * (isHovering ? SPEEDS.hover : SPEEDS.normal));
      }
    }
  });

  return (
    <section id="services" className="bg-black py-16">
      <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}

      className="text-center text-[#b59067]  text-2xl sm:text-3xl font-semibold mb-10 py-4 sm:py-8 lg:py-12 xl:py-16">
        Events we cover
      </motion.h2>
      
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing px-4"
          style={{ x }}
          drag="x"
          dragElastic={0.15}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {doubledServices.map((item, index) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{SPRING_CONFIG, staggerChildren: 0.2 }}
              className="relative min-w-[220px] sm:min-w-[280px] md:min-w-[320px] h-[280px] sm:h-[340px] rounded-2xl overflow-hidden"
            >
              <motion.img
               variants={{
                  hidden: { opacity: 0, y: 40},
                  visible: { opacity: 1, y: 0},
                }}
                transition={{duration: 0.4, delay: index * 0.2}}
              src={item.image} alt={item.title} className="w-full h-full object-cover pointer-events-none" />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-lg font-semibold">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
}
