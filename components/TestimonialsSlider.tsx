"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { testimonials } from "@/constants/data";
import Image from "next/image";

type SliderProps = {
  slides: typeof testimonials;
};

export default function TestimonialsSlider({ slides }: SliderProps) {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="lg:max-w-[60%] "
    >
      {slides.map((slide) => (
        <SwiperSlide className="" key={slide.id}>
          <div className="flex flex-col items-center gap-8">
            <p className="text-clamp-md text-center font-semibold ">
              &quot;{slide.text}&quot;
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={slide.imageSrc}
                width={60}
                height={60}
                alt={slide.name}
                className="rounded-3xl"
              />
              <div>
                <h3 className="font-semibold">{slide.name}</h3>
                <p className="italic text-black/70">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
