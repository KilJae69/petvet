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

export default function Footer() {
  return (
    <footer className="container mx-auto mt-10 max-w-[1970px] pt-8 md:pt-16 lg:pt-24">
      <div className="gradient-bg relative flex w-full flex-col rounded-3xl px-5 pt-8 md:flex-row">
        <div className="flex flex-1 flex-col gap-5 md:justify-center md:p-10">
          <h1 className="text-clamp-lg font-bold text-white">
            <span className=" ">Get</span>{" "}
            <span className=" text-accent">free</span> <br />
            consultation
          </h1>
          <p className="text-clamp-xs text-white">
            At our veterinary clinic, consultations provide comprehensive
            insights into your pet&apos;s health and well-being.
          </p>
          <PrimaryButton label="Contact Us" />
        </div>

        <div className="relative flex size-full  items-end justify-end ">
          <div className="relative z-10 aspect-square size-full min-h-[200px] max-w-[400px] ">
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
              src={pawImg}
              alt="Paw image"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-9">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row md:gap-10">
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="text-black/50">
              Join us on a journey of care where your pet takes center stage.
            </p>
          </div>

          <div>
            <span className="flex items-center gap-3 text-xl">
              <FaPhone className=" text-accent" />
              +387 37 222 660
            </span>
            <span className="flex items-center gap-3 text-xl">
              <MdEmail className=" text-accent" />
              petvet@email.com
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
          <p>© 2024 PetVet. All rights reserved.</p>
          <p>
            Website developed and maintained by{" "}
            <span className="text-yellow-400">Spark</span>Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
