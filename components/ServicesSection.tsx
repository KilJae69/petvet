import { PiBoneFill } from "react-icons/pi";

import ServicesList from "./shared/ServicesList";
import { useTranslations } from "next-intl";
import { FadeIn } from "./FadeIn";

export default function ServicesSection() {
  const t = useTranslations("ServicesSection");
  return (
    <section className=" pt-8 md:pt-16 lg:pt-24">
      <FadeIn>
        <p className="text-clamp-md font-semibold leading-7 md:indent-52">
          {t("marqueeText.part1")}{" "}
          <span className="text-primary">{t("marqueeText.part2")}</span>{" "}
          {t("marqueeText.part3")}
        </p>
      </FadeIn>

      <div className="  flex flex-col justify-center gap-5 py-8 md:py-16   lg:gap-20 lg:py-24">
        <FadeIn>
          <div className="mx-auto max-w-[1000px] space-y-6 p-5 text-center">
            <h2 className="flex items-center justify-center gap-2 font-semibold">
              <PiBoneFill className="size-6 text-primary" />
              <span className="block text-primary">PetVet</span> {t("h2")}
            </h2>
            <p className="text-clamp-lg font-bold">
              {t("leadTitle")} <span className="text-primary">PetVet</span>{" "}
              {t("h2")}
            </p>
            <p className="text-clamp-sm text-black/70">{t("description")}</p>
          </div>
        </FadeIn>

        <ServicesList />
      </div>
    </section>
  );
}
