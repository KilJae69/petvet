"use client";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

export default function SliderNavButtons() {
  const swiper = useSwiper();

  return (
    <div className="flex w-full items-center justify-center gap-5">
      <button
        onClick={() => swiper.slidePrev()}
        className="rounded-full border bg-primary  p-2"
      >
        <FaArrowLeftLong className="text-white" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="rounded-full bg-primary p-2"
      >
        <FaArrowRightLong className="text-white" />
      </button>
    </div>
  );
}
