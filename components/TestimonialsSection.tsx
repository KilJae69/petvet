import TestimonialsSlider from "./TestimonialsSlider";
import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const t = useTranslations("TestimonialsSection");
  return (
    <section className="mt-10 pt-8 md:pt-16 lg:pt-24">
      <h2 className="sr-only">{t("h2")}</h2>
      <TestimonialsSlider />
    </section>
  );
}
