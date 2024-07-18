import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import ImageGallerySection from "@/components/ImageGallerySection";
import ProffesionalsSection from "@/components/ProffesionalsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyUsSection from "@/components/WhyUsSection";
// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from "next-intl/server";

type HomePageProps = {
  params: {
    locale: "en" | "bs";
  };
};

export default function HomePage({ params: { locale } }: HomePageProps) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ProffesionalsSection />
      <TestimonialsSection />
      <ImageGallerySection />
      <FaqSection />
    </>
  );
}
