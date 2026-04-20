"use client";

import "@/app/globals.css";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Icon as IconType } from "tabler-icons-react";
import { motion } from "framer-motion";
import { skillsData } from "../data";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  return (
    <section className="container py-20 relative overflow-hidden">
      {/* Background glow behind marquee */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-32 bg-cyan-600/5 blur-[100px] rounded-full -z-10" />

      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-center text-center gap-4">
          <SectionTitle title="Tools in My Toolbox" />
          <p className="text-white/70 font-medium font-sans max-w-xl text-lg">
            A carefully curated stack of technologies I use to build scalable, high-performance web applications.
          </p>
        </div>

        <div className="relative group">
          {/* Fading edges for the marquee */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <Swiper
            speed={4000}
            spaceBetween={30}
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            loop
            allowTouchMove={false}
            breakpoints={{
              320: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              768: { slidesPerView: 5 },
              1200: { slidesPerView: 6 },
            }}
            className="skills-swiper-marquee !py-8"
          >
            {skillsData.map((skill, index) => {
              const { Icon, title }: { Icon: IconType; title: string } = skill;

              return (
                <SwiperSlide key={index}>
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center justify-center p-8 gap-6 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md hover:bg-white/[0.08] hover:border-cyan-500/50 transition-all duration-300 group/item min-h-[180px]"
                  >
                    <div className="relative">
                      {/* Icon Glow */}
                      <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full scale-0 group-hover/item:scale-110 transition-transform duration-500" />
                      
                      <Icon 
                        className="w-16 h-16 text-white/50 group-hover/item:text-cyan-400 group-hover/item:drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-500" 
                        strokeWidth={1.2}
                      />
                    </div>
                    
                    <h5 className="text-white font-bold tracking-tight text-sm uppercase opacity-50 group-hover/item:opacity-100 transition-opacity">
                      {title}
                    </h5>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .skills-swiper-marquee .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}

