"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/free-mode';

// import required modules
import { FreeMode } from 'swiper/modules';

import { proffesionals } from "@/constants/data";
// import SliderNavButtons from "./SliderNavButtons";

import ProffesionalCard from "./ProffesionalCard";

type SliderProps = {
  slides: typeof proffesionals;
};

export default function ProffesionalsSlider({ slides }: SliderProps) {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={20}
      modules={[FreeMode]}
     freeMode={true}
      className="w-full "
    >
      {/* <SliderNavButtons /> */}

      {slides.map((slide) => (
        <SwiperSlide
          className=" max-w-[300px]"
          key={slide.id}
        >
          <ProffesionalCard proffesional={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
