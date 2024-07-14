import { testimonials } from "@/constants/data";
import TestimonialsSlider from "./TestimonialsSlider";

export default function TestimonialsSection() {
  return (
    <section className="pt-8 md:pt-16 lg:pt-24">
        <h2 className="sr-only">Our client testimonials</h2>
        <TestimonialsSlider slides={testimonials} />
    </section>
  );
  
}