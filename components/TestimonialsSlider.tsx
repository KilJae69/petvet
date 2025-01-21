"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { testimonials } from "@/constants/data";

export default function TestimonialsSlider() {
  const t = useTranslations("TestimonialsSlider");

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="lg:max-w-[60%] "
    >
      {testimonials.map((slide) => (
        <SwiperSlide className="cursor-grab" key={slide.id}>
          <div className="flex flex-col items-center gap-8">
            <p className="text-clamp-md text-center font-semibold ">
              &quot;{t(slide.textKey)}&quot;
            </p>
            <div className="flex items-center gap-4">
              <Image
                src={slide.imageSrc}
                width={60}
                height={60}
                alt={t(slide.nameKey)}
                className="size-auto rounded-3xl object-cover"
              />
              <div>
                <h3 className="font-semibold">{t(slide.nameKey)}</h3>
                <p className="italic text-black/70">{t(slide.subtitleKey)}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
