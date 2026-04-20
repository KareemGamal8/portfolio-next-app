"use client";

import "@/app/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { servicesData } from "../data";
import { SectionTitle } from "./SectionTitle";

export function Services() {
  return (
    <section className="container py-20 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-600/5 rounded-full blur-[120px] -z-10" />
      
      <div className="flex flex-col gap-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <SectionTitle title="How I Can Help" />
          <p className="text-white/70 font-medium font-sans max-w-xl text-lg">
            Providing comprehensive front-end solutions tailored to your unique digital needs.
          </p>
        </div>

        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          speed={1200}
          spaceBetween={30}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="services-swiper !pb-20 !pt-8"
          loop
        >
          {servicesData.map((service, index) => {
            const { services, Icon, title } = service;

            return (
              <SwiperSlide key={index} className="h-full">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative flex flex-col gap-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-500 rounded-3xl p-8 h-full min-h-[400px]"
                >
                  {/* Neon top border effect on hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent transition-all duration-700" />
                  
                  <div className="flex p-5 rounded-2xl  border border-white/5 w-fit group-hover:bg-cyan-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-500">
                    <Icon size={32} strokeWidth={1.5} color="#fff" />
                  </div>

                  <div className="flex flex-col gap-4">
                    <h4 className="text-2xl font-bold text-white tracking-tight">{title}</h4>
                    <p className="w-12 h-1 bg-cyan-600 rounded-full group-hover:w-24 transition-all duration-500" />
                  </div>

                  <ul className="flex flex-col gap-4">
                    {services.map((singleService, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1, x: 5 }}
                        className="flex items-center gap-3 text-white/80 font-medium font-sans"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,1)]" />
                        {singleService}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Aesthetic card corner highlight */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-cyan-500/5 to-transparent rounded-br-3xl -z-10" />
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <style jsx global>{`
        .services-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.2) !important;
          width: 10px !important;
          height: 10px !important;
          opacity: 1 !important;
        }
        .services-swiper .swiper-pagination-bullet-active {
          background: #06b6d4 !important;
          width: 30px !important;
          border-radius: 5px !important;
          box-shadow: 0 0 10px rgba(6,182,212,0.5);
        }
      `}</style>
    </section>
  );
}

