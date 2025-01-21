import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { FadeIn } from "./FadeIn";
import Image from "next/image";

export default function NotFoundPage() {
  const t = useTranslations("NotFound");
  return (
    <section className="flex w-full items-center justify-center pb-20 pt-[200px]">
      <FadeIn className="flex max-w-xl flex-col items-center text-center">
        <Image
          src="/not-found-dog.png"
          width={200}
          height={200}
          alt="not found dog"
          className="mb-5 size-auto object-cover"
        />
        <p className=" text-4xl font-semibold text-primary sm:text-5xl">
          {t("title")}
        </p>
        <h1 className=" mt-4 text-2xl font-semibold text-primary">
          {t("header")}
        </h1>
        <p className="mt-2 text-sm text-neutral-600">{t("description")}</p>
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          {t("homeLink")}
        </Link>
      </FadeIn>
    </section>
  );
}
