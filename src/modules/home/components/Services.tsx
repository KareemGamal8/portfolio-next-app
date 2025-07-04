"use client";

import "@/app/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { servicesData } from "../data";
import { SectionTitle } from "./SectionTitle";

export function Services() {
  return (
    <div className="container">
      <div className="flex flex-col gap-12 py-12">
        <SectionTitle title="How I Can Help" />
        <Swiper
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          speed={1000}
          effect="fade"
          spaceBetween={16}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
          loop
        >
          {servicesData.map((service, index) => {
            const { services, Icon, title } = service;

            return (
              <SwiperSlide key={index} className="">
                <div
                  className="flex flex-col gap-4 bg-secondary border-3 border-transparent transition-colors duration-500 hover:border-cyan-600 rounded-xl !mb-12 text-white p-4 lg:p-6"
                >
                  <div className="flex p-4 border-2 rounded-2xl border-cyan-600 w-fit">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-xl uppercase font-semibold">{title}</h4>
                  <ul className="px-4 lg:px-8 flex flex-col gap-2 font-medium">
                    {services.map((singleService, index) => (
                      <li key={index} className="list-disc">
                        {singleService}.
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
