import PrimaryButton from "./shared/PrimaryButton";

import { services } from "@/constants/data";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section className="px-5 py-8 md:py-16 lg:py-24">
      <p className="text-clamp-md font-semibold leading-7 md:indent-52">
        Our goal is to provide tailored care, ensuring{" "}
        <span className="text-primary">
          each pet receives the attention necessary
        </span>{" "}
        and personalized for their age and health condition.
      </p>

      <div className=" my-10 flex flex-wrap justify-center gap-5 py-8   md:py-16 lg:py-24">
        <div className="gradient-bg flex aspect-square max-w-[300px] flex-col justify-between rounded-3xl p-5 shadow-lg lg:max-w-[400px]">
          <div className=" flex  flex-col gap-5 text-white">
            <h2 className="text-clamp-sm font-semibold uppercase">
              Our Services
            </h2>
            <p className="text-white/80">
              At our friendly veterinary clinic, counsultations provide
              comprehensive insights into your pet&apos;s health and well-being.
            </p>
          </div>
          <PrimaryButton label="Book now" />
        </div>

        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
