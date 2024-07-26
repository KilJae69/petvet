"use client"
import { servicesNew } from "@/constants/data";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

import Image from "next/image";

import { FaArrowRightLong } from "react-icons/fa6";

export default function ServicesList() {
  const t = useTranslations("ServicesList")
  return (
    <ul className="flex flex-wrap items-stretch justify-center gap-5">
      {servicesNew.map((service) => {
        
        return (
        <li
          key={service.id}
          className="group flex w-full cursor-pointer rounded-3xl bg-white  p-4 shadow-md md:max-w-[350px]  md:flex-row md:gap-10"
        >
          <Link
            className="flex w-full flex-col items-center gap-3 md:items-start "
            href={{
              pathname: "/services/[slug]",
              params: { slug: service.slug },
            }}
          >
            <div className="gradient-bg relative flex size-20 items-center justify-center rounded-full p-5 ">
              <Image src={service.icon} alt="Service icon" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">{t(service.titleKey)}</h3>
              <p className="text-black/70">{t(service.descriptionKey)}</p>
            </div>
            <div className="relative mt-auto aspect-[600/400] overflow-hidden rounded-3xl shadow-sm">
              <Image
                src={service.image}
                className="rounded-3xl transition-transform duration-500 group-hover:scale-105"
                alt={t(service.imageAltKey)}
              />
            </div>
            <div className="flex items-center ">
              <span className=" pr-1 font-semibold transition-colors duration-500 group-hover:text-primary">
                {t("link")}
              </span>
              <span className="relative overflow-hidden">
                <FaArrowRightLong className="-translate-x-2 transition-all duration-500 group-hover:translate-x-0 group-hover:text-primary" />
              </span>
            </div>
          </Link>
        </li>
      )})}
    </ul>
  );
}
