import HeroSection from "@/components/HeroSection";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Index");
  return (
    <>
      <HeroSection />
      <h1>{t("title")}</h1>
    </>
  );
}
