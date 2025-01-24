import { routing } from "@/i18n/routing";
import { Locale } from "@/lib/locales";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PiBoneFill } from "react-icons/pi";
import Marquee from "react-fast-marquee";
import { aboutCards, partners } from "@/constants/data";
import Image from "next/image";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrimaryButton from "@/components/shared/PrimaryButton";

import { AnimatedTabsContent } from "@/components/FadeInTabsContent";



type AboutUsPageProps = {
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
    title: t("titleAboutUs"),
    description: t("descriptionAboutUs"),
  };
}

export default async function AboutPage({ params }: AboutUsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("AboutUsPage");
  return (
    <section className="md:pb-40">
      <div className=" gradient-bg relative mt-[calc(var(--header-height)+20px)] rounded-3xl px-5 py-8 text-center shadow-md  ">
        <h1 className="text-clamp-lg font-bold text-white">{t("h1")}</h1>
      </div>
      <FadeIn>
        <div className="mx-auto max-w-[1000px] space-y-6 p-5 py-14 text-center md:py-20 lg:py-32">
          <h2 className="flex items-center justify-center gap-2 font-semibold">
            <PiBoneFill className="size-6 text-primary" />
            <span className="block text-primary">PetVet</span> {t("h1")}
          </h2>
          <p className="text-clamp-lg font-bold">{t("large-heading")}</p>
          <p className="text-clamp-sm text-black/70">{t("subheading")}</p>
        </div>
      </FadeIn>

      <div className="relative mx-auto max-w-[1300px]">
        <Image
          priority
          src="/about-image.jpg"
          alt="animals"
          width={1000}
          height={500}
          className="mx-auto size-full max-w-[1300px] rounded-3xl border-4 border-primary object-cover"
        />
        <FadeInStagger>
          <div className="mt-10 flex flex-col items-stretch justify-center lg:p-4 gap-8 md:absolute md:bottom-0 md:translate-y-1/2 md:flex-row lg:gap-16">
            {aboutCards.map((item) => (
              <FadeIn key={item.id} className="flex-1">
                <div className="flex flex-col items-center rounded-3xl h-full bg-white p-4 text-center shadow-md transition-transform duration-300 hover:scale-105  md:max-w-sm  ">
                  <div className="flex size-16 items-center justify-center rounded-full bg-primary">
                    <item.icon className="size-12 text-white" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">
                    {t(item.titleKey)}
                  </h3>
                  <p className="mt-2 text-center text-gray-600">
                    {t(item.descriptionKey)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </div>
      <FadeIn>
        <div className="mx-auto max-w-[1000px] space-y-6 p-5 py-14 text-center md:pt-52">
          <h2 className="flex items-center justify-center gap-2 font-semibold">
            <PiBoneFill className="size-6 text-primary" />
            <span className="block text-primary">PetVet</span> {t("h1-2")}
          </h2>
          <p className="text-clamp-lg font-bold">{t("large-heading-2")}</p>
          <p className="text-clamp-sm text-black/70">{t("subheading-2")}</p>
        </div>
      </FadeIn>

      <Tabs defaultValue="mission" className="mx-auto max-w-[1300px]">
        <TabsList className="w-full flex-col justify-between mx-auto max-w-[1300px] mb-5 md:mb-10 gap-3 md:flex-row">
          <TabsTrigger className="bg-white text-3xl" value="mission">
            {t("tabTriggers.mission")}
          </TabsTrigger>
          <TabsTrigger className="bg-white text-3xl" value="vision">
            {t("tabTriggers.vision")}
          </TabsTrigger>
          <TabsTrigger className="bg-white text-3xl" value="goals">
            {t("tabTriggers.goals")}
          </TabsTrigger>
        </TabsList>

        <AnimatedTabsContent value="mission">
          <Image
            className="rounded-xl w-full md:w-1/2 border-2 object-cover border-primary"
            src="/tabs/mission-tab.jpg"
            alt="Dog and owner image"
            width={500}
            height={500}
          />
          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="text-clamp-md font-semibold">
              {t("tabs.mission.title")}
            </h2>
            <p>{t("tabs.mission.description")}</p>
            <PrimaryButton label={t("contact-button")} />
          </div>
        </AnimatedTabsContent>

        <AnimatedTabsContent value="vision">
          <Image
            className="rounded-xl w-full md:w-1/2 border-2 object-cover border-primary"
            src="/tabs/vision-tab.jpg"
            alt="Dog and owner image"
            width={500}
            height={500}
          />
          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="text-clamp-md font-semibold">
              {t("tabs.vision.title")}
            </h2>
            <p>{t("tabs.vision.description")}</p>
            <PrimaryButton label={t("contact-button")} />
          </div>
        </AnimatedTabsContent>

        <AnimatedTabsContent value="goals">
          <Image
            className="rounded-xl w-full md:w-1/2 border-2 object-cover border-primary"
            src="/tabs/goals-tab.jpg"
            alt="Dog and owner image"
            width={500}
            height={500}
          />
          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="text-clamp-md font-semibold">
              {t("tabs.goals.title")}
            </h2>
            <p>{t("tabs.goals.description")}</p>
            <PrimaryButton label={t("contact-button")} />
          </div>
        </AnimatedTabsContent>
      </Tabs>

      <FadeIn>
        <div className="mx-auto max-w-[1000px] space-y-6 p-5 md:py-14 text-center ">
          <h2 className="flex items-center justify-center gap-2 font-semibold">
            <PiBoneFill className="size-6 text-primary" />
            <span className="block text-primary">PetVet</span> {t("h1-3")}
          </h2>
          <p className="text-clamp-lg font-bold">{t("large-heading-3")}</p>
          <p className="text-clamp-sm text-black/70">{t("subheading-3")}</p>
        </div>
      </FadeIn>
   
      
      <Marquee pauseOnHover className="overflow-y-hidden">
        <ul
          role="list"
          className="mx-10 mt-10 flex items-center justify-center gap-8 md:gap-20 "
        >
          {partners.map((partner) => (
            <li key={partner.id}>
              <a target="_blank" rel="noopener noreferrer" href={partner.href}>
                <div className="relative flex h-[200px] w-auto items-center justify-center">
                  <Image
                    src={partner.imgSrc}
                    alt={partner.title}
                    unoptimized
                    className="max-h-[100px] max-w-[100px] object-contain md:max-h-[200px] md:max-w-[200px]"
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Marquee>
      
    </section>
  );
}
