import { proffesionals } from "@/constants/data";

import ProffesionalsSlider from "./ProffesionalsSlider";
import { useTranslations } from "next-intl";

export default function ProffesionalsSection() {
  const t = useTranslations("ProffesionalsSection");
  return (
    <section className="mt-10 flex flex-col items-center gap-10 pt-8 md:pt-16 lg:gap-20 lg:pt-24">
      <h2 className="text-clamp-lg font-semibold ">{t("h2")}</h2>

      <div className=" w-full  max-w-screen-xl">
        <ProffesionalsSlider slides={proffesionals} />
      </div>
    </section>
  );
}
