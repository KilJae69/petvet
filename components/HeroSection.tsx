import Image from "next/image";
import dogImg from "@/public/happy-dog.png";
import pawImg from "@/public/dog-paw.svg";
import PrimaryButton from "./shared/PrimaryButton";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations('HeroSection');
  return (
    <section className=" gradient-bg relative mt-[calc(var(--header-height)+20px)]  rounded-3xl px-5 pt-8 shadow-md  ">
      <div className="relative flex flex-col items-end md:flex-row md:justify-between lg:items-stretch">
        <div className=" relative z-10 flex flex-1 flex-col justify-between gap-5 md:translate-y-0 md:p-10 md:pl-8">
          <div className="flex flex-col gap-5 ">
            <h1 className="text-clamp-md font-bold text-white">
            <span className="text-clamp-max-xl uppercase">
            {t('title.part1')}
              </span>
              <span className="text-clamp-max-xl uppercase text-accent">
              {t('title.part2')}
              </span>{" "}
              <br />
              {t('title.subtitle')}
            </h1>
            <p className="text-clamp-xs text-white">
            {t('description')}
            </p>
            <PrimaryButton label={t('contactButton')} />
          </div>
          <span className="hidden text-white md:block">
          {t('successMessage')}
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
    </section>
  );
}
