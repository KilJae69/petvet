import Image from "next/image";
import PrimaryButton from "./shared/PrimaryButton";
import puppyImg from "@/public/dog-icon2-removebg.png";
import pawImg from "@/public/dog-paw.svg";
import { Separator } from "./ui/separator";
import Logo from "./shared/Logo";

import { MapProvider } from "@/providers/map-provider";
import { MapComponent } from "./shared/GoogleMap";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="container mx-auto  max-w-[1970px] ">
      <div className="gradient-bg relative flex w-full flex-col items-stretch rounded-3xl px-5 pt-4 shadow-md 2md:flex-row">
        <div className="flex flex-1 flex-col gap-5 md:justify-center md:p-10">
          <h2 className="text-clamp-md font-bold text-white">
            <span className=" ">{t("h2.part1")}</span>{" "}
            <span className="uppercase text-accent">{t("h2.part2")}</span> <br />
            {t("h2.part3")}
          </h2>
          <p className="text-clamp-xs text-white">{t("paragraph")}</p>
          <PrimaryButton label={t("button")} />
        </div>

        <div className="relative flex size-full flex-1 items-end justify-end   ">
          <div className="relative z-10 aspect-square size-full max-w-[400px] md:min-h-[200px] ">
            <Image
              src={puppyImg}
              alt="dog"
              priority
              fill
              className=" translate-y-[18%] object-cover"
              sizes="(min-width: 1340px) 700px, (min-width: 780px) calc(64.44vw - 151px), calc(100vw - 72px)"
            />
          </div>
          <div className=" absolute bottom-0 left-0 size-full">
            <Image
              className="object-contain "
              fill
              sizes="(min-width: 940px) 400px, (min-width: 780px) calc(24.29vw + 177px), (min-width: 500px) 400px, calc(95.56vw - 59px)"
              src={pawImg}
              alt="Paw image"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-9">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row md:gap-10">
          <div className="flex flex-col items-center justify-center gap-3 py-5 text-center">
            <Logo />
            <p className=" text-black/50">{t("paragraph-secondary")}</p>
          </div>

          <div>
            <span className="flex items-center gap-3 text-xl">
              <FaPhone className=" text-accent" />
              +387 37 222 660
            </span>
            <span className="flex items-center gap-3 text-xl">
              <MdEmail className=" text-accent" />
              petvet@gmail.com
            </span>
          </div>

          <div className="h-[200px] w-full">
            <MapProvider>
              <MapComponent />
            </MapProvider>
          </div>
        </div>

        <Separator orientation="horizontal" className="bg-primaryAccent/60" />

        <div className="flex w-full flex-col justify-between gap-3 py-4 text-xs md:flex-row lg:text-sm">
          <p>{t("small-text-left")}</p>
          <p>
            {t("small-text-right")}{" "}
            <span className="text-yellow-400">Spark</span>Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
