import Image from "next/image";

import { servicesNew } from "@/constants/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getTranslations, setRequestLocale } from "next-intl/server";


type ServicePageSingleProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: ServicePageSingleProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const singleService = servicesNew.find((service) => service.slug === slug);
  if (!singleService) return notFound();

  const t = await getTranslations({ locale, namespace: "ServicesList" });

  return {
    title: t(singleService.titleKey),
    description: t(singleService.content.aboutSectionKey),
  };
}

export function generateStaticParams() {
  const paths = servicesNew.map((service) => ({
    slug: service.slug,
  }));

  return paths;
}

export default async function ServicePageSingle({
  params,
}: ServicePageSingleProps) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ServicesList");
  const singleServiceData = servicesNew.find(
    (service) => service.slug === slug
  );

  if (!singleServiceData) return notFound();

  const { titleKey, image, imageAltKey, content } = singleServiceData;

  return (
    <section>
      <div className="gradient-bg relative mt-[calc(var(--header-height)+20px)] rounded-3xl px-5 py-8 text-center shadow-md">
        <h1 className="text-clamp-lg font-bold text-white">{t(titleKey)}</h1>
      </div>

      <article className="mx-auto flex max-w-screen-xl flex-col gap-8 py-14 md:py-20 lg:py-32">
        <div className="space-y-4">
          <h2 className="text-clamp-md font-semibold">
            {t("singlePageTitleAbout")}
          </h2>
          <p>{t(content.aboutSectionKey)}</p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="relative mx-auto aspect-[600/400] w-full max-w-[600px] overflow-hidden rounded-3xl">
            <Image
              fill
              src={image || ""}
              alt={t(imageAltKey)}
              className="object-cover"
              sizes="(min-width: 680px) 601px, 92.22vw"
            />
          </div>

          <div className="mx-auto flex max-w-[600px] flex-1 flex-col gap-4">
            <h2 className="text-clamp-md font-semibold">
              {t("singlePageTitleWhat")}
            </h2>
            <ul className="space-y-4">
              {content.serviceIncluded.map((service) => (
                <li key={service.id} className="space-y-2">
                  <h3 className="text-lg font-semibold text-primary">
                    {t(service.titleKey)}
                  </h3>
                  <p>{t(service.descriptionKey)}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-clamp-md font-semibold">
            {t("singlePageTitleWhy")}
          </h2>
          <p>{t(content.whySectionKey)}</p>
        </div>
      </article>
    </section>
  );
}
