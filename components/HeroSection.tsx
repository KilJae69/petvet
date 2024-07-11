import Image from "next/image";
import dogImg from "@/public/happy-dog.png";
import pawImg from "@/public/dog-paw.svg";
import PrimaryButton from "./shared/PrimaryButton";

export default function HeroSection() {
  return (
    <section className=" gradient-bg relative mt-[calc(var(--header-height)+20px)]  rounded-3xl px-5 pt-8 shadow-md  ">
      <div className="relative flex flex-col items-end md:flex-row md:justify-between lg:items-stretch">
        <div className=" relative z-10 flex flex-1 flex-col justify-between gap-5 md:translate-y-0 md:p-10 md:pl-8">
          <div className="flex flex-col gap-5 ">
            <h1 className="text-clamp-md font-bold text-white">
            <span className="text-clamp-max-xl uppercase">
                Pet
              </span>
              <span className="text-clamp-max-xl uppercase text-accent">
               Vet
              </span>{" "}
              <br />
              your friendly neighbourhood veterinarian
            </h1>
            <p className="text-clamp-xs text-white">
              We prioritize your pet&apos;s health with love and expertise. Join
              us on a journey of care where your pet takes center stage.
            </p>
            <PrimaryButton label="Contact Us" />
          </div>
          <span className="hidden text-white md:block">
            Succesfully treating your <br /> friends since 2010
          </span>
        </div>

        <div className="relative flex size-full  items-end justify-end ">
          <div className="relative z-10 aspect-square size-full min-h-[200px] max-w-[700px] ">
            <Image
              src={dogImg}
              alt="dog"
              priority
              fill
              className=" object-cover "
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

        {/* <div className=" relative aspect-square size-full max-w-[400px]   lg:max-w-[550px] ">
          <div className="absolute -top-32 left-32  h-full w-[200px]">
            <Image
              className="object-contain "
              fill
              src={pawImg}
              alt="Paw image"
            />
          </div>
          <Image
            src={dogImg}
            alt="dog"
            priority
            fill
            className="translate-y-[30%] object-cover  xs:translate-y-[27%] md:translate-y-[30%] lg:translate-y-1/4"
          />
        </div> */}
      </div>
    </section>
  );
}
