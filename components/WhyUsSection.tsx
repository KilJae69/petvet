import { useTranslations } from "next-intl";

export default function WhyUsSection() {

  const t = useTranslations("WhyUsSection");
  return (
    <section className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-10 lg:gap-20">
      <h2 className="text-clamp-lg font-semibold ">{t("h2")}</h2>
      <div className="flex  flex-col gap-10 md:px-10 lg:max-w-[60%]">
        <div className="text-clamp-sm flex gap-2 md:gap-4 lg:gap-8">
          <span className="font-semibold text-primary">01</span>
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold">{t("title1")}</h3>
            <p className="text-clamp-xs">
            {t("description1")}
            </p>
          </div>
        </div>

        <div className="text-clamp-sm flex  gap-2 md:gap-4 lg:gap-8">
          <span className="font-semibold text-primary">02</span>
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold">
            {t("title2")}
            </h3>
            <p className="text-clamp-xs">
            {t("description2")}
            </p>
          </div>
        </div>

        <div className="text-clamp-sm flex  gap-2 md:gap-4 lg:gap-8">
          <span className="font-semibold text-primary">03</span>
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold">
            {t("title3")}
            </h3>
            <p className="text-clamp-xs">
            {t("description3")}
            </p>
          </div>
        </div>

        <div className="text-clamp-sm flex  gap-2 md:gap-4 lg:gap-8">
          <span className="font-semibold text-primary">04</span>
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold">
            {t("title4")}
            </h3>
            <p className="text-clamp-xs">
            {t("description4")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
