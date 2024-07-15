"use client";

import { imageGallery } from "@/constants/data";
import Image from "next/image";
import { useState } from "react";

export default function ImageGallerySection() {
  const [displayedImg, setDisplayedImg] = useState(0);
  return (
    <section className="mt-10 pt-8 md:pt-16 lg:pt-24">
      <div className="flex  max-h-[600px] flex-col gap-3 sm:flex-row md:gap-10">
        <div className="grid grid-cols-3 gap-3 sm:min-w-[30%]  sm:flex-1 sm:grid-cols-2">
          {imageGallery.map((image, index) => (
            <div key={image.id} className="relative rounded-3xl border">
              <Image
                src={image.imageSrc}
                alt={image.alt}
                className={`size-full cursor-pointer rounded-3xl object-cover transition-opacity
                ${
                  index === displayedImg
                    ? "border-2 border-primary opacity-100"
                    : "opacity-30"
                }
                
                `}
                onClick={() => setDisplayedImg(index)}
              />
            </div>
          ))}
        </div>

        <div className="relative min-h-[200px] w-full rounded-3xl shadow-md">
          <Image
            src={imageGallery[displayedImg].imageSrc}
            alt={imageGallery[displayedImg].alt}
            fill
            sizes="(min-width: 2140px) 1338px, (min-width: 1680px) calc(50.91vw + 259px), (min-width: 640px) 67.25vw, calc(100vw - 32px)"
            className=" rounded-3xl object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
