import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import dogoCalling from "@/public/dog-calling.png";
import { PiBoneFill } from "react-icons/pi";
import { FaMapLocationDot, FaPaperPlane, FaPhoneVolume } from "react-icons/fa6";

import { Metadata } from "next";
// eslint-disable-next-line camelcase
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Locale } from "@/lib/locales";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";

type ContactPageProps = {
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
    title: t("titleContact"),
    description: t("descriptionContact"),
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("ContactPage");
  return (
    <section>
      <div className=" gradient-bg relative mt-[calc(var(--header-height)+20px)] rounded-3xl px-5 py-8 text-center shadow-md  ">
        <h1 className="text-clamp-lg font-bold text-white">{t("h1")}</h1>
      </div>

      <div className="relative my-10 flex flex-col-reverse gap-5 rounded-3xl bg-white shadow-md sm:p-4 lg:flex-row-reverse lg:justify-around xl:gap-20">
          <FadeIn >
        <div className="flex flex-1 flex-col gap-10 lg:max-w-[650px]">
          <div className="space-y-6 p-5 ">
            <h2 className="flex items-center gap-2 font-semibold">
              <PiBoneFill className="size-6 text-primary" />
              <span className="text-primary">PetVet</span> {t("h1")}
            </h2>
            <p className="text-clamp-lg font-bold">
              {t("large-paragraph-right")}
            </p>
            <p className="text-clamp-sm text-black/70">
              {t("medium-paragraph-right")}
            </p>
          </div>
            <ContactForm className="lg:max-w-[650px]" />
        </div>
          </FadeIn>

        <div className="m-5 flex flex-col items-center gap-5 rounded-3xl bg-slate-100 p-4 sm:py-10 md:flex-row lg:flex-col lg:px-16">
          <div className="gradient-bg relative aspect-square w-full max-w-[400px] rounded-full ">
            <Image
              fill
              sizes="(min-width: 920px) 400px, (min-width: 780px) calc(76.67vw - 290px), (min-width: 540px) 400px, calc(92.73vw - 82px)"
              src={dogoCalling}
              className="object-contain"
              alt="Dog holding can and trying to call"
            />

            <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 rounded-3xl bg-white p-6 text-center shadow-md">
              <p className="text-clamp-xs font-semibold">
                &quot;<span className="text-primary">Woof!</span>{" "}
                {t("woof-paragraph")}&quot;
              </p>
            </div>
          </div>

          <div className="">
            <ul>
              <li className="flex flex-col items-center gap-3 border-b-2 py-3 text-center text-lg sm:flex-row sm:gap-8 sm:text-start">
                <span className="gradient-bg block size-14 rounded-full p-4 text-white">
                  <FaPhoneVolume className="size-6" />
                </span>
                <span>
                  <h3 className="font-bold text-primary">{t("phone-h3")}</h3>
                  <p className="font-semibold">
                    {t("phone-p")} <br />
                    <span className="text-primary">
                      (037)222-660 <br /> (061)415-098
                    </span>
                  </p>
                </span>
              </li>
              <li className="flex flex-col items-center gap-3 border-b-2 py-3 text-center text-lg sm:flex-row sm:gap-8 sm:text-start">
                <span className="gradient-bg block size-14 rounded-full p-4 text-white">
                  <FaPaperPlane className="size-6" />
                </span>
                <span>
                  <h3 className="font-bold text-primary">{t("email-h3")}</h3>
                  <p className="font-semibold">
                    {t("email-p")} <br />
                    <span className="text-primary">
                     petvet.bihac@gmail.com
                    </span>
                  </p>
                </span>
              </li>
              <li className="flex flex-col items-center gap-3  py-3 text-center text-lg sm:flex-row sm:gap-8 sm:text-start">
                <span className="gradient-bg block size-14 rounded-full p-4 text-white">
                  <FaMapLocationDot className="size-6" />
                </span>
                <span>
                  <h3 className="font-bold text-primary">{t("location-h3")}</h3>
                  <p className="font-semibold">
                    Bužimska bb, Ozimice 1, 77 000 Bihać
                  </p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
