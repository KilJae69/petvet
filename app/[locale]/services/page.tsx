import { FadeIn } from "@/components/FadeIn";
import ServicesList from "@/components/shared/ServicesList";
import { routing } from "@/i18n/routing";
import { Locale } from "@/lib/locales";
import { Metadata } from "next";

// eslint-disable-next-line camelcase
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { PiBoneFill } from "react-icons/pi";

type ServicesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  // Validate the locale
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("titleServices"),
    description: t("descriptionServices"),
  };
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ServicesSection");
  return (
    <section>
        <div className=" gradient-bg relative mt-[calc(var(--header-height)+20px)] rounded-3xl px-5 py-8 text-center shadow-md  ">
          <h1 className="text-clamp-lg font-bold text-white">
            {t("singlePageH1")}
          </h1>
        </div>
      <FadeIn>
        <div className="mx-auto max-w-[1000px] space-y-6 p-5 py-14 text-center md:py-20 lg:py-32">
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

      <div className="pb-14 md:pb-20 lg:pb-32">
        <ServicesList />
      </div>
    </section>
  );
}
