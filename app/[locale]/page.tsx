import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import ImageGallerySection from "@/components/ImageGallerySection";
import ProffesionalsSection from "@/components/ProffesionalsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyUsSection from "@/components/WhyUsSection";

export default function HomePage() {
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
