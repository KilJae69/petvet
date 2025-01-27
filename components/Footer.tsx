import Image from "next/image";
import PrimaryButton from "./shared/PrimaryButton";
import puppyImg from "@/public/dog-icon2-removebg.png";
import pawImg from "@/public/dog-paw.svg";
import { Separator } from "./ui/separator";
import Logo from "./shared/Logo";

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
            <span className="uppercase text-accent">{t("h2.part2")}</span>{" "}
            <br />
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
              fill
              className=" translate-y-[18%] object-cover"
              sizes="(min-width: 1340px) 700px, (min-width: 780px) calc(64.44vw - 151px), calc(100vw - 72px)"
            />
          </div>
          <div className=" absolute bottom-0 left-0 size-full">
            <Image
              className="object-contain "
              fill
              sizes="(min-width: 1060px) 459px, (min-width: 880px) calc(25.63vw + 194px), (min-width: 500px) 460px, calc(110.56vw - 69px)"
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
              <a href="tel:+38737222660">(037)222-660</a>
            </span>
            <span className="flex items-center gap-3 text-xl">
              <MdEmail className=" text-accent" />
              <a href="mailto:petvet.bihac@gmail.com">petvet.bihac@gmail.com</a>
            </span>
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/Veterinarska+ambulanta+Pet+Vet+Bihac/@44.8188391,15.8614077,19z/data=!4m6!3m5!1s0x476141e721bed00b:0x7afd5f63cefd48eb!8m2!3d44.8187841!4d15.8621119!16s%2Fg%2F11gy7wry9k?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
            className="relative h-[200px] w-full overflow-hidden rounded-xl border "
          >
            <Image
              src="/map-image.png"
              alt="map"
              fill
              className="object-cover"
              sizes="(min-width: 2060px) 1243px, (min-width: 1140px) calc(80.56vw - 400px), (min-width: 780px) calc(4.12vw + 456px), (min-width: 560px) calc(100vw - 34px), 466px"
            />
          </a>
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
