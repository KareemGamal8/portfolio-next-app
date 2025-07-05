"use client";
import "@/app/globals.css";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Icon as IconType } from "tabler-icons-react";
import { skillsData } from "../data";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  return (
    <div className="container">
      <div className="flex flex-col gap-12 pb-12">
        <SectionTitle title="Tools in My Toolbox" />
        <Swiper
          // navigation={true}
          speed={5000}
          effect="fade"
          direction="horizontal"
          spaceBetween={16}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
          }}
          freeMode
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="skills-swiper"
          loop
        >
          {skillsData.map((service, index) => {
            const { Icon, title }: { Icon: IconType; title: string } = service;

            return (
              <SwiperSlide key={index}>
                <div className="flex !justify-center flex-col gap-4 !items-center h-full w-full">
                  <Icon className="w-28 h-28" />
                  <h5 className="text-white text-center font-bold">{title}</h5>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
