import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import ImageGallerySection from "@/components/ImageGallerySection";
import ProffesionalsSection from "@/components/ProffesionalsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyUsSection from "@/components/WhyUsSection";
// eslint-disable-next-line camelcase
import { setRequestLocale } from "next-intl/server";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
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
